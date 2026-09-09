import {describe,it} from 'node:test';
import assert from 'node:assert/strict';
import {additiveFromTotalPercent,hexToRgb,mixHex,scaleRecipe} from './color.ts';
describe('physical batch math',()=>{
  it('scales 8:128 to an 8 oz base sample',()=>assert.equal(scaleRecipe(128,8,8),.5));
  it('scales consistently for 4, 8 and 16 oz bases',()=>assert.deepEqual([4,8,16].map(v=>scaleRecipe(128,16,v)),[.5,1,2]));
  it('converts total mixture percent to additive ounces',()=>assert.equal(additiveFromTotalPercent(128,20),32));
  it('handles no additive',()=>assert.equal(scaleRecipe(128,0,8),0));
  it('rejects malformed hex',()=>assert.throws(()=>hexToRgb('#fff')));
  it('returns base at zero addition',()=>assert.equal(mixHex('#3D695F','#FFFFFF',128,0),'#3D695F'));
});
