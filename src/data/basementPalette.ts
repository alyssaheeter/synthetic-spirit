import type { Additive, CandidateSeed, PaintColor } from '../types';

// Official identity is taken from the homeowner's PPG specification. Digital values below
// are deliberately marked estimated because current manufacturer pages could not be verified
// from the build environment. Replace these with a measured/current PPG reference when available.
export const palette: Record<'viningIvy'|'sharkskin'|'sawMill', PaintColor> = {
  viningIvy: {
    id:'viningIvy', name:'Vining Ivy', manufacturer:'PPG', code:'PPG1148-6', hex:'#3D695F', rgb:{r:61,g:105,b:95},
    lrv:12, verified:false, source:'Official name/code: homeowner specification; HEX/RGB/LRV: estimated screen reference',
    hueFamily:'Blue-green / teal', lightness:'Deep mid-tone', chroma:'Moderate', temperature:'Cool',
    undertones:'Blue with a softened green cast', notes:'2023 PPG Color of the Year identity; screen coordinates require confirmation.'
  },
  // VERIFY: Manufacturer code and digital values not confirmed from an accessible official PPG source.
  sharkskin: {
    id:'sharkskin', name:'Sharkskin', manufacturer:'PPG', code:'Code unverified', hex:'#9A9991', rgb:{r:154,g:153,b:145},
    lrv:31, verified:false, source:'Name: homeowner specification; code/HEX/RGB/LRV: estimated',
    hueFamily:'Stone gray', lightness:'Medium', chroma:'Low', temperature:'Balanced / slightly warm',
    undertones:'Subtle olive-beige', notes:'Confirm against the installed wall or current PPG chip.'
  },
  // VERIFY: Manufacturer code and digital values not confirmed from an accessible official PPG source.
  sawMill: {
    id:'sawMill', name:'Saw Mill', manufacturer:'PPG', code:'Code unverified', hex:'#8B6F5C', rgb:{r:139,g:111,b:92},
    lrv:18, verified:false, source:'Name: homeowner specification; code/HEX/RGB/LRV: estimated',
    hueFamily:'Earthy brown', lightness:'Mid-deep', chroma:'Low–moderate', temperature:'Warm',
    undertones:'Umber, clay, muted red', notes:'Confirm against the installed accent or current PPG chip.'
  }
};

// Concept colors only—not universal tint prescriptions or manufacturer formulas.
export const additives: Additive[] = [
  {id:'white',name:'Soft warm white',hex:'#F2EFE5',note:'Raises value; compatible paint is safer than an improvised colorant.'},
  {id:'black',name:'Soft black',hex:'#242725',note:'Powerful; measure in very small increments.'},
  {id:'gray',name:'Neutral gray',hex:'#8C908D',note:'Reduces chroma with minimal warmth.'},
  {id:'greige',name:'Warm greige',hex:'#A89C89',note:'Softens and warms toward the bridge palette.'},
  {id:'taupe',name:'Beige / taupe',hex:'#A78F73',note:'Adds earthiness; can become muddy quickly.'},
  {id:'ochre',name:'Yellow ochre direction',hex:'#B78932',note:'Concept direction only; pigment strength is unpredictable.'},
  {id:'umber',name:'Brown / umber direction',hex:'#6C4F3B',note:'Warms and deepens; high mudding risk.'},
  {id:'blue',name:'Muted blue',hex:'#4E7180',note:'Reinforces coolness; least cohesive with Saw Mill.'},
];

export const candidateSeeds: CandidateSeed[] = [
  {name:'Warm Sage',direction:'Best overall · warmer / earthier',additiveId:'greige',additiveOz:10,confidence:'High',rationale:'Takes the cool edge off while retaining botanical identity; a natural bridge from stone gray to warm wood-brown.',risks:'May dry flatter or browner than the digital preview.'},
  {name:'Muted Moss',direction:'Softer / more muted',additiveId:'gray',additiveOz:8,confidence:'High',rationale:'Reduces blue-green intensity without erasing the color, making the room feel related to Sharkskin.',risks:'A cool gray additive may keep more blue than desired.'},
  {name:'Soft Eucalyptus',direction:'Lighter',additiveId:'white',additiveOz:16,confidence:'High',rationale:'Lifts the laundry room and gives the deep existing palette breathing room while preserving a gentle green.',risks:'White paint may have weak hiding power or shift the base unpredictably.'},
  {name:'Smoky Olive',direction:'Warmer / earthier',additiveId:'taupe',additiveOz:8,confidence:'Medium',rationale:'Introduces an earthy yellow-brown relationship to Saw Mill and subdues the jewel-like teal quality.',risks:'Can turn muddy; approach in half-increments.'},
  {name:'Dusty Botanical',direction:'Grayer',additiveId:'greige',additiveOz:16,confidence:'Medium',rationale:'A more decisive neutralization that reads as an intentional green-gray beside Sharkskin.',risks:'Larger addition changes coverage and product performance.'},
  {name:'Forest Laundry',direction:'Deeper / moodier',additiveId:'umber',additiveOz:6,confidence:'Exploratory',rationale:'Echoes Saw Mill with a dark, cocooning botanical result.',risks:'May feel dim in a basement and can become muddy very quickly.'}
];
