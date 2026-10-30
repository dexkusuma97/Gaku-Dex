/* Shared dialogue parsing and playback. Speaker metadata is never spoken. */
(function(root){
 'use strict';
 const genders={female:'female',male:'male',narrator:'narrator','女':'female','女の人':'female','女性':'female','男':'male','男の人':'male','男性':'male','母':'female','子':'male','先生':'male','店員':'female','客':'male','受付':'female','学生':'male',onna:'female',otoko:'male',woman:'female',man:'male',f:'female',m:'male'};
 const label=/(女の人|男の人|女性|男性|女|男|母|子|先生|店員|客|受付|学生|Onna|Otoko|Woman|Man|Female|Male|Narrator|F|M)\s*[：:]/gi;
 function split(text){
  const source=String(text||'').trim(),matches=[...source.matchAll(label)],out=[];
  const push=(speaker,s)=>{s=s.trim();if(s)out.push({speaker,text:s});};
  if(!matches.length){push('narrator',source);return out;}
  push('narrator',source.slice(0,matches[0].index));
  matches.forEach((m,i)=>push(genders[m[1].toLowerCase()]||genders[m[1]]||'narrator',source.slice(m.index+m[0].length,matches[i+1]?.index??source.length)));
  return out;
 }
 function createPlayer(env=root){
  let sequence=0,media=null,delay=null;
  function stop(){sequence++;if(delay!==null)env.clearTimeout(delay);delay=null;if(media){media.onended=media.onerror=media.onplaying=null;media.pause();media.removeAttribute?.('src');media.load?.();media=null;}env.speechSynthesis?.cancel();}
  function play({question,onStart=()=>{},onEnd=()=>{},onError=()=>{}}){
   stop();const token=sequence;let started=false,settled=false;
   const active=()=>sequence===token&&!settled;
   const start=()=>{if(active()&&!started){started=true;onStart();}};
   const finish=()=>{if(!active())return;settled=true;onEnd();};
   const fail=()=>{if(!active())return;settled=true;onError();};
   function fallback(){
    if(!active())return;
    const synth=env.speechSynthesis,U=env.SpeechSynthesisUtterance,voices=synth?.getVoices().filter(v=>/^ja/i.test(v.lang))||[];
    if(!U||!voices.length){fail();return;}
    const female=voices.find(v=>/female|woman|nanami|kyoko|haruka|ayumi|mizuki|ひかり|女性/i.test(v.name))||voices[0];
    const male=voices.find(v=>/male|man|keita|ichiro|takumi|otoya|男性/i.test(v.name)&&!/female|woman/i.test(v.name))||voices.find(v=>v!==female)||female;
    const turns=split(question.audio);let index=0;
    function next(){if(!active())return;const line=turns[index++];if(!line){finish();return;}const u=new U(line.text);u.lang='ja-JP';u.voice=line.speaker==='male'?male:female;u.rate=.83;u.pitch=line.speaker==='male'?.9:1.08;u.onstart=start;u.onend=()=>{if(active())delay=env.setTimeout(next,300);};u.onerror=fail;synth.speak(u);}
    next();
   }
   if(!/^[a-z0-9-]+$/.test(question.id||'')||!question.audio){fail();return;}
   if(!env.Audio){fallback();return;}
   const prefix=env.GAKU_SIM_EMBEDDED?'':'../',url=prefix+'assets/simulasi/'+question.id+'.mp3';
   const audio=new env.Audio(url);media=audio;audio.onplaying=start;audio.onended=finish;
   let checking=false;
   async function failedMedia(){
    if(!active()||checking)return;checking=true;
    try{const response=await env.fetch(url,{method:'HEAD'});if(!active())return;if(response.status===404||response.status===410){audio.onended=audio.onerror=audio.onplaying=null;audio.pause();media=null;fallback();}else fail();}catch{fail();}
   }
   audio.onerror=failedMedia;
   try{const promise=audio.play();promise?.catch(error=>{if(active()&&!checking){if(error?.name==='NotAllowedError')fail();else failedMedia();}});}catch{fail();}
  }
  return {play,stop};
 }
 const api={split,createPlayer};root.GakuSimulationAudio=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
