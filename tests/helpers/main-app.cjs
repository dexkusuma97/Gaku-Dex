const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const browserHistory=require('./browser-history.cjs');
const html=fs.readFileSync('dist/index.html','utf8');
function app(storage=new Map()){
 const listeners={},els=new Map(),timeouts=new Map();let timer=0;
 function el(){return {innerHTML:'',textContent:'',style:{},dataset:{},classList:{toggle(){},add(){},remove(){}},setAttribute(){},addEventListener(){},removeEventListener(){},focus(){},querySelector(){return null},querySelectorAll(){return []}}}
 const document={body:el(),getElementById(id){if(!els.has(id))els.set(id,el());return els.get(id)},querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}};
 const c={console,document,navigator:{},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},sessionStorage:{getItem:()=>null,setItem(){},removeItem(){}},setTimeout(fn){timeouts.set(++timer,fn);return timer},clearTimeout(id){timeouts.delete(id)},setInterval(){return ++timer},clearInterval(){},scrollTo(){},matchMedia:()=>({matches:false,addEventListener(){}}),location:{hash:'',pathname:'/',search:''},addEventListener(event,fn){(listeners[event]??=[]).push(fn)},URL,URLSearchParams,Date};c.window=c;c.history=browserHistory({onPop:e=>(listeners.popstate||[]).forEach(fn=>fn(e))});vm.createContext(c);
 for(const match of html.matchAll(/<script(?: src="([^"]+)")?>([\s\S]*?)<\/script>/g))vm.runInContext(match[1]?fs.readFileSync('dist/'+match[1],'utf8'):match[2],c,{filename:match[1]||'index-inline.js'});
 return {c,els,storage,flush(){const all=[...timeouts.values()];timeouts.clear();for(const fn of all)fn()},run:s=>vm.runInContext(s,c)};
}

module.exports=app;
