type Child = Node | string | number | boolean | null | undefined | Child[];
type Props = any;
let root: HTMLElement;
let rootView: () => Node;
let cursor = 0;
const state: unknown[] = [];

export const Fragment = ({children=[]}:Props) => { const fragment=document.createDocumentFragment(); append(fragment,children); return fragment; };
export function h(tag: string | ((props: Props) => Child), props: Props | null, ...children: Child[]): Child {
  const all = {...(props || {}), children};
  if (typeof tag === 'function') return tag(all);
  const node = document.createElement(tag);
  Object.entries(props || {}).forEach(([key,value]) => {
    if (key === 'className') node.className = String(value);
    else if (key === 'style' && value && typeof value === 'object') Object.entries(value as Record<string,string|number>).forEach(([k,v])=>node.style.setProperty(k,String(v)));
    else if (key.startsWith('on') && typeof value === 'function') node.addEventListener(key.slice(2).toLowerCase(), value as EventListener);
    else if (key === 'value') return;
    else if (value !== false && value != null) node.setAttribute(key, value === true ? '' : String(value));
  });
  append(node, children);
  if (props && 'value' in props) (node as HTMLInputElement).value = String(props.value);
  return node;
}
function append(parent:Node, children:Child[]){const visit=(child:Child):void=>{if(Array.isArray(child)){child.forEach(visit);return}if(child===false||child==null||child===true)return;parent.appendChild(child instanceof Node?child:document.createTextNode(String(child)));};children.forEach(visit);}
export function useState<T>(initial:T):[T,(next:T)=>void]{const index=cursor++;if(state[index]===undefined)state[index]=initial;return [state[index] as T,(next:T)=>{state[index]=next;render();}];}
export function useMemo<T>(factory:()=>T,_deps:unknown[]):T{return factory();}
function render(){cursor=0;root.replaceChildren(rootView());window.scrollTo({top:window.scrollY});}
export function mount(element:HTMLElement, view:()=>Node){root=element;rootView=view;render();}

declare global { namespace JSX { interface IntrinsicElements { [name:string]: any } } }
