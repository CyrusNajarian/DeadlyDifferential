/* Distribution is recorded separately; changing location never earns duplicate credit. */
window.DDSymptomDetails=(()=>{
 const sides=[['unilateral','One side (unilateral)'],['bilateral','Both sides (bilateral)'],['asymmetric_bilateral','Both sides, unequal'],['unspecified','Not established']];
 const regions=[['upper','Arm / hand'],['lower','Leg / foot'],['upper_lower','Arm and leg'],['eyes','Eyelids / eye muscles'],['face','Face'],['bulbar','Speech / swallowing muscles'],['head_trunk','Head / trunk'],['generalized','Generalized'],['unspecified','Not established']];
 const ref=()=>window.DDReference;
 function searchTerm(raw){
  const direct=ref().resolve(raw,'symptom');if(direct)return direct.term;
  const withoutSide=String(raw).replace(/\b(?:unilateral|bilateral|one[- ]sided|both[- ]sided|left|right)\b/gi,' ').replace(/\s+/g,' ').trim();
  const sided=ref().resolve(withoutSide,'symptom');if(sided)return sided.term;
  const withoutRegion=withoutSide.replace(/\b(?:upper|lower|arm|arms|leg|legs|hand|hands|foot|feet|extremity|extremities)\b/gi,' ').replace(/\s+/g,' ').trim();
  return ref().resolve(withoutRegion,'symptom')?.term||withoutRegion;
 }
 function resolve(raw){return ref().resolve(raw,'symptom')||ref().resolve(searchTerm(raw),'symptom')}
 function fields(entry){const q=entry?.qualifiers;return q?[...(q.side?['side']:[]),...(q.region?['region']:[])]:[]}
 function label(details){return details?[sides.find(([id])=>id===details.side)?.[1],regions.find(([id])=>id===details.region)?.[1]].filter(Boolean).join(' · '):''}
 function validate(entry,details,stage){
  const required=fields(entry),missing=required.filter(field=>!details?.[field]);
  if(missing.length)return {complete:false,valid:false,reason:'missing_distribution',missing};
  if(!required.length)return {complete:true,valid:true};
  if(details.side&&!sides.some(([id])=>id===details.side)||details.region&&!regions.some(([id])=>id===details.region))return {complete:true,valid:false,reason:'invalid_distribution'};
  const region=entry.qualifiers.fixedRegion||details.region,policy=stage.symptomDistribution||{};
  const allowedRegions=policy.regionsById?.[entry.id]||policy.regions;
  if(allowedRegions&&region&&!allowedRegions.includes(region))return {complete:true,valid:false,reason:'region_mismatch'};
  const allowed=policy.sidesById?.[entry.id]||(['s-hemiparetic-gait','s-hemispatial-neglect'].includes(entry.id)?['unilateral']:null);
  if(allowed&&!allowed.includes(details.side))return {complete:true,valid:false,reason:'side_mismatch'};
  return {complete:true,valid:true,details:{side:details.side,...(region?{region}:{})}};
 }
 return {sides,regions,searchTerm,resolve,fields,label,validate};
})();
