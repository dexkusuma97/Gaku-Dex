'use strict';
// A browser-like stack, including a previous external document and optional async pop delivery.
module.exports=function browserHistory({onPop=()=>{},onExternal=()=>{},deferred=false}={}){
 let index=1;const entries=[{external:true,state:null},{external:false,state:null}],queue=[];
 const copy=s=>s==null?s:JSON.parse(JSON.stringify(s));
 const api={get state(){return copy(entries[index].state)},get index(){return index},get entries(){return entries.map(e=>({...e,state:copy(e.state)}))},get length(){return entries.length},pushState(s){entries.splice(index+1);entries.push({external:false,state:copy(s)});index++},replaceState(s){entries[index]={external:false,state:copy(s)}},go(delta){const target=index+delta;if(target<0||target>=entries.length)return;const perform=()=>{index=target;if(entries[index].external)onExternal();else onPop({state:copy(entries[index].state)});};if(deferred)queue.push(perform);else perform()},back(){api.go(-1)},forward(){api.go(1)},flush(){for(let limit=0;queue.length;limit++){if(limit>30)throw Error('Navigation loop');queue.shift()();}}};return api;
};
