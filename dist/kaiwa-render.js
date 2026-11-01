/* Vanilla JS, scoped module. No keys, external AI calls, or account dependencies. */
(function (global) {
  'use strict';
  function currentLevel(){return typeof prefs!=='undefined'&&prefs.level==='N4'?'N4':'N5';}
  function entries(){return (currentLevel()==='N4'?global.GAKU_KAIWA_N4_DATA:global.GAKU_KAIWA_DATA)||[];}
  const state = {scenario:null, mode:'read', visible:[], cursor:0, choices:[], wrong:[], feedback:'', done:false, revealed:new Set(), busy:false};
  let root=null, pending=null, sequence=0, player=null, settle=null, watchdog=null, all=false, activeLine=-1;
  const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const scenario = () => entries().find(s=>s.id===state.scenario);
  function shuffle(values){const a=values.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function stop(){
    sequence++;all=false;activeLine=-1;clearTimeout(watchdog);
    if(player){player.onended=null;player.onerror=null;player.pause();player.removeAttribute('src');player.load();player=null;}
    if(settle){const end=settle;settle=null;end(false);}
    if(global.speechSynthesis)global.speechSynthesis.cancel();
    updateAudio();
  }
  function notice(text){const el=root?.querySelector('[data-audio-status]');if(el)el.textContent=text;}
  function updateAudio(){
    root?.querySelectorAll('[data-play]').forEach(button=>{const playing=Number(button.dataset.play)===activeLine;button.textContent=playing?'■':'▶';button.setAttribute('aria-label',(playing?'Hentikan':'Putar')+' suara kalimat '+(Number(button.dataset.play)+1));});
    const button=root?.querySelector('[data-action="all"]');if(button){button.textContent=all?'■ Hentikan':'▶ Putar semua';button.setAttribute('aria-pressed',String(all));}
  }
  function persona(line,s){
    const gender=line.gender||(line.who==='npc'?s.gender:'male');
    return gender==='female'?{gender:'female',name:'Hori',initial:'H'}:{gender:'male',name:'Ryota',initial:'R'};
  }
  function voiceFor(line,s){
    const voices=global.speechSynthesis.getVoices().filter(v=>/^ja(?:-|_|$)/i.test(v.lang));
    const female=persona(line,s).gender==='female';
    const pattern=female?/female|woman|kyoko|haruka|nanami|ayumi|mizuki/i:/male|man|ichiro|keita|takumi|otoya/i;
    return voices.find(v=>pattern.test(v.name)&&(!/female|woman/i.test(v.name)||female))||voices[0];
  }
  function speakLine(index,token){
    const s=scenario(),line=s?.lines[index];if(!line)return Promise.resolve(false);
    return new Promise(resolve=>{
      let finished=false,fallback=false;
      const finish=ok=>{if(finished)return;finished=true;clearTimeout(watchdog);settle=null;if(token===sequence){activeLine=-1;updateAudio();}resolve(ok);};
      settle=finish;activeLine=index;updateAudio();
      const tts=()=>{
        if(fallback||finished||token!==sequence)return;fallback=true;clearTimeout(watchdog);
        if(player){player.onended=null;player.onerror=null;player.pause();player=null;}
        if(!global.speechSynthesis||!global.SpeechSynthesisUtterance){notice('Suara belum tersedia di perangkat ini. Kamu tetap bisa membaca dialog.');finish(false);return;}
        const u=new global.SpeechSynthesisUtterance(line.jp);u.lang='ja-JP';u.rate=.82;const voice=voiceFor(line,s);if(voice)u.voice=voice;
        notice('Memakai suara Jepang dari perangkat. Pilihan suara pria/wanita mengikuti perangkat.');
        u.onend=()=>finish(true);u.onerror=()=>{notice('Suara perangkat belum dapat diputar. Coba lagi atau periksa suara Jepang di pengaturan HP.');finish(false);};
        watchdog=setTimeout(()=>{if(token===sequence){global.speechSynthesis.cancel();finish(false);notice('Suara perangkat belum merespons. Coba putar kembali.');}},30000);
        try{global.speechSynthesis.speak(u);}catch{finish(false);notice('Suara perangkat belum dapat diputar.');}
      };
      if(s.audioMode==='device'){tts();return;}
      try{
        player=new global.Audio('assets/kaiwa/'+(s.audioId||s.id)+'-'+(index+1)+'.mp3');player.preload='auto';player.onended=()=>finish(true);player.onerror=tts;
        player.onplaying=()=>{clearTimeout(watchdog);watchdog=setTimeout(()=>{if(token===sequence){player?.pause();finish(false);notice('Pemutaran dihentikan karena audio tidak selesai.');}},60000);};
        watchdog=setTimeout(tts,8000);
        const attempt=player.play();attempt?.catch(tts);
      }catch{tts();}
    });
  }
  async function play(index){if(activeLine===index){stop();return;}global.stopAudio?.();stop();notice('');await speakLine(index,sequence);}
  async function playAll(){
    if(!scenario())return;
    if(all){stop();return;}global.stopAudio?.();stop();all=true;const token=sequence;updateAudio();notice('');
    const lines=state.mode==='read'?scenario().lines.map((_,i)=>i):state.visible.slice();
    for(const index of lines){if(token!==sequence)break;const ok=await speakLine(index,token);if(!ok)break;}
    if(token===sequence){all=false;activeLine=-1;updateAudio();}
  }
  function saveRoute(){if(typeof global.GakuKaiwa.onRoute==='function')global.GakuKaiwa.onRoute();}
  function clearProgress(){clearTimeout(pending);pending=null;stop();state.visible=[];state.cursor=0;state.choices=[];state.wrong=[];state.feedback='';state.done=false;state.revealed.clear();state.busy=false;}
  function reset(){clearProgress();state.scenario=null;state.mode='read';}
  function open(id,mode='read',push=true){if(!entries().some(s=>s.id===id))return;clearProgress();state.scenario=id;state.mode=mode==='practice'?'practice':'read';if(state.mode==='practice')advance();if(push)saveRoute();draw(true);}
  function advance(){
    const s=scenario();if(!s)return;
    while(state.cursor<s.lines.length&&s.lines[state.cursor].who==='npc'){state.visible.push(state.cursor++);}
    if(state.cursor>=s.lines.length){state.done=true;state.choices=[];global.GakuKaiwa.onComplete?.(s);return;}
    const line=s.lines[state.cursor];state.choices=shuffle([{jp:line.jp,correct:true},...line.salah.map(o=>({...o,correct:false}))]);state.wrong=[];
  }
  function choose(index){
    if(!scenario()){reset();return;}
    if(state.done||state.busy||state.wrong.includes(index))return;
    const choice=state.choices[index];if(!choice)return;
    if(!choice.correct){state.wrong.push(index);state.feedback=choice.why;const button=root?.querySelector('[data-choice="'+index+'"]');if(button){button.disabled=true;button.classList.add('kw-incorrect');button.setAttribute('aria-label',choice.jp+' — belum tepat');}const feedback=root?.querySelector('[data-feedback]');if(feedback)feedback.textContent=choice.why;root?.querySelector('[data-choice]:not(:disabled)')?.focus({preventScroll:true});return;}
    stop();state.visible.push(state.cursor++);state.feedback='';state.busy=true;draw();
    pending=setTimeout(()=>{pending=null;state.busy=false;advance();draw(true);},500);
  }
  function bubble(line,index){
    const mine=line.who==='me',open=state.revealed.has(index),voice=persona(line,scenario()),customPlayer=mine&&scenario().playerName==='Adi',name=customPlayer?'Kamu':voice.name,initial=customPlayer?'K':voice.initial;
    return `${line.stage?`<p class="kw-stage">${esc(line.stage)}</p>`:''}<article class="kw-row ${mine?'kw-mine':''}"><div class="kw-avatar" aria-hidden="true">${initial}</div><div class="kw-message"><div class="kw-speaker">${esc(name)}</div><div class="kw-bubble"><button class="kw-text" data-reveal="${index}" aria-expanded="${open}" aria-controls="kw-meaning-${index}" aria-label="${esc(line.jp)}. ${open?'Sembunyikan':'Lihat'} romaji dan arti"><span lang="ja">${esc(line.jp)}</span><span class="kw-tap">${open?'− Tutup arti':'+ Romaji & arti'}</span></button><button class="kw-audio" data-play="${index}" aria-label="Putar suara kalimat ${index+1}">▶</button><div class="kw-meaning" id="kw-meaning-${index}" ${open?'':'hidden'}><p class="kw-rom">${esc(line.rom)}</p><p>${esc(line.id)}</p>${line.note?`<p class="kw-line-note">${esc(line.note)}</p>`:''}</div></div></div></article>`;
  }
  function content(){
    const s=scenario();
    if(!s)return `<div class="kw-intro"><span class="kw-eyebrow">KAIWA · ${currentLevel()}</span><h2>Obrolan kecil,<br>langkah berani.</h2><p>${currentLevel()==='N4'?'Latih percakapan lewat situasi sehari-hari.<br>Pahami maksudnya, lalu pilih balasanmu.':'Kenalan, belanja, atau pesan makanan.<br>Dengar dulu, lalu coba balas sendiri.'}</p><div class="kw-pixel" aria-hidden="true">こんにちは<span>✦</span></div></div><div class="kw-label">PILIH CERITAMU <span>${entries().length} situasi sehari-hari</span></div><div class="kw-scenarios">${entries().map((s,i)=>`<article class="kw-card kw-card-${i}"><div class="kw-card-top"><span class="kw-icon" aria-hidden="true">${esc(s.ic)}</span><span class="kw-level">${currentLevel()} · ${s.lines.length} kalimat</span></div><h3>${esc(s.judul)}</h3><p>${esc(s.sub)}</p>${s.book?`<span class="kw-source-tag">Marugoto ${esc(s.book)}</span>`:''}<div class="kw-person">${esc(persona({who:'npc'},s).name)} <span>· lawan bicara</span></div><div class="kw-card-actions"><button data-open="${esc(s.id)}" data-mode="read">▶ Baca & dengar</button><button data-open="${esc(s.id)}" data-mode="practice">Latihan →</button></div></article>`).join('')}</div><p class="kw-note">Tidak perlu terburu-buru. Setiap bubble bisa diketuk untuk melihat arti.</p>${currentLevel()==='N4'?'<p class="kw-note">Referensi: Japan Foundation · Marugoto Elementary 1–2 (A2). Dialog adaptasi untuk latihan; pengelompokan N4 mengikuti aplikasi.</p>':''}`;
    const indices=state.mode==='read'?s.lines.map((_,i)=>i):state.visible;
    return `<header class="kw-room-head"><button data-action="menu" class="kw-menu">‹ Skenario</button><div><span class="kw-eyebrow">${esc(persona({who:'npc'},s).name)} · ${currentLevel()}</span><h2>${esc(s.judul)}</h2></div><span class="kw-icon" aria-hidden="true">${esc(s.ic)}</span></header><div class="kw-modes" role="group" aria-label="Mode percakapan"><button data-mode-switch="read" aria-pressed="${state.mode==='read'}">Baca & dengar</button><button data-mode-switch="practice" aria-pressed="${state.mode==='practice'}">Latihan</button></div><div class="kw-toolbar"><span>${state.mode==='read'?'Ketuk bubble untuk melihat arti.':'Pilih balasan yang paling sesuai.'}</span><button data-action="all" aria-pressed="false">▶ Putar semua</button></div>${s.audioMode==='device'?'<p class="kw-note kw-voice-note">Suara N4 memakai suara Jepang dari perangkat. Pilihan suara mengikuti perangkatmu.</p>':''}<p class="kw-audio-status" data-audio-status role="status"></p><div class="kw-dialog" aria-label="Dialog ${esc(s.judul)}">${indices.map(i=>bubble(s.lines[i],i)).join('')}</div>${state.mode==='practice'&&!state.done?`<section class="kw-replies" aria-label="Giliran kamu"><div class="kw-label">${state.busy?'LANJUT PERCAKAPAN…':'GILIRAN KAMU'}<span>${state.visible.filter(i=>s.lines[i].who==='me').length} / ${s.lines.filter(l=>l.who==='me').length} balasan</span></div>${s.lines[state.cursor]?.intent?`<p class="kw-intent"><b>Tujuan balasan:</b> ${esc(s.lines[state.cursor].intent)}</p>`:''}<p data-feedback class="kw-feedback" role="status">${esc(state.feedback)}</p>${!state.busy?state.choices.map((o,i)=>`<button class="kw-choice ${state.wrong.includes(i)?'kw-incorrect':''}" data-choice="${i}" ${state.wrong.includes(i)?'disabled':''}><span aria-hidden="true">${i+1}</span><span lang="ja">${esc(o.jp)}</span></button>`).join(''):''}</section>`:''}${state.done?`<section class="kw-finish" tabindex="-1"><span aria-hidden="true">✦</span><h3>Percakapan selesai!</h3><p>Kamu berhasil menyelesaikan obrolan ${esc(s.judul.toLowerCase())} bersama ${esc(persona({who:'npc'},s).name)}.</p><div><button data-action="repeat">↻ Ulangi</button><button data-action="menu">Menu Kaiwa →</button></div></section>`:''}`;
  }
  function screen(){return '<section class="kw-app" id="kaiwa-root" aria-label="Belajar percakapan bahasa Jepang">'+content()+'</section>';}
  function draw(focus=false){if(!root||!root.isConnected)return;root.innerHTML=content();updateAudio();if(focus){const target=root.querySelector('.kw-finish')||root.querySelector('[data-choice]')||root.querySelector('[data-action="menu"]');target?.focus({preventScroll:true});}}
  function onClick(e){
    const button=e.target.closest('button');if(!button||!root.contains(button))return;
    if(button.dataset.open){open(button.dataset.open,button.dataset.mode);return;}
    if(button.dataset.modeSwitch){open(state.scenario,button.dataset.modeSwitch,false);saveRoute();return;}
    if('play' in button.dataset){play(Number(button.dataset.play));return;}
    if('choice' in button.dataset){choose(Number(button.dataset.choice));return;}
    if('reveal' in button.dataset){const i=Number(button.dataset.reveal),show=!state.revealed.has(i);if(show)state.revealed.add(i);else state.revealed.delete(i);button.setAttribute('aria-expanded',String(show));button.setAttribute('aria-label',scenario().lines[i].jp+'. '+(show?'Sembunyikan':'Lihat')+' romaji dan arti');button.querySelector('.kw-tap').textContent=show?'− Tutup arti':'+ Romaji & arti';root.querySelector('#kw-meaning-'+i).hidden=!show;return;}
    if(button.dataset.action==='all')playAll();
    if(button.dataset.action==='repeat')open(state.scenario,state.mode,false);
    if(button.dataset.action==='menu'){if(typeof global.GakuKaiwa.onMenu==='function')global.GakuKaiwa.onMenu();else{reset();draw();}}
  }
  function sync(active){
    if(!active){clearTimeout(pending);pending=null;stop();if(state.busy){state.busy=false;advance();}root=null;return;}
    const next=document.getElementById('kaiwa-root');if(next!==root){stop();root=next;root?.addEventListener('click',onClick);}
  }
  function restore(route){if(route?.id&&entries().some(s=>s.id===route.id))open(route.id,route.mode,false);else reset();}
  global.GakuKaiwa={screen,sync,stop,reset,open,choose,play,playAll,getRoute:()=>({id:scenario()?.id||null,mode:state.mode}),restore};
  global.addEventListener('pagehide',stop);
})(window);
