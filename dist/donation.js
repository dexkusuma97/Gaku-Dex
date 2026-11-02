'use strict';
// One startup announcement per document load; ordinary app navigation never reopens it.
(() => {
  const imagePath='assets/donation/donasi-shiba.png';
  let dialog,closing=false,closeTimer=null,previousFocus=null,scrollBefore=null,outsideDown=false;
  function reducedMotion(){return document.body.classList.contains('no-motion')||window.matchMedia('(prefers-reduced-motion: reduce)').matches;}
  function restore(){
    clearTimeout(closeTimer);closeTimer=null;closing=false;outsideDown=false;
    dialog.classList.remove('donation-closing');
    if(scrollBefore){document.documentElement.style.overflow=scrollBefore.html;document.body.style.overflow=scrollBefore.body;scrollBefore=null;}
    if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});
    previousFocus=null;
  }
  function close(){
    if(!dialog?.open||closing)return;
    closing=true;dialog.classList.add('donation-closing');
    const finish=()=>{if(dialog.open)dialog.close();restore();};
    if(reducedMotion())finish();else closeTimer=setTimeout(finish,200);
  }
  function outside(event){const r=dialog.getBoundingClientRect();return event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom;}
  function init(){
    if(dialog)return;
    dialog=document.getElementById('donation-dialog');
    dialog.querySelector('.donation-close').addEventListener('click',close);
    dialog.addEventListener('pointerdown',e=>{outsideDown=e.target===dialog&&outside(e);});
    dialog.addEventListener('pointercancel',()=>{outsideDown=false;});
    dialog.addEventListener('click',e=>{if(e.target===dialog&&outsideDown&&outside(e))close();outsideDown=false;});
    dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
    // The app has an Escape handler for its other modals. Keep this dialog independent.
    dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close();}});
    dialog.addEventListener('close',()=>{if(!dialog.open)restore();});
    const picture=dialog.querySelector('img');
    picture.addEventListener('error',()=>{picture.hidden=true;dialog.querySelector('.donation-image-error').hidden=false;});
  }
  function open(){
    init();
    if(dialog.open){if(closing){clearTimeout(closeTimer);closeTimer=null;closing=false;dialog.classList.remove('donation-closing');}return;}
    previousFocus=document.activeElement;
    scrollBefore={html:document.documentElement.style.overflow,body:document.body.style.overflow};
    dialog.showModal();
    document.documentElement.style.overflow='hidden';document.body.style.overflow='hidden';
    dialog.querySelector('.donation-close').focus({preventScroll:true});
  }
  window.GakuDonation={open,close};
  window.donationScreen=()=>title('Sawer / Donasi','Terima kasih sudah menemani perjalanan DeX Gaku.')+`<section class="donation-page"><div class="donation-copy"><span class="mini-tag">DUKUNG DEX GAKU</span><h2>Belajar tumbuh bersama.</h2><p>Kalau DeX Gaku membantu belajarmu, kamu bisa mendukung pengembangannya lewat QR donasi ini. Dukunganmu sangat berarti.</p><div class="donation-actions"><button class="primary" type="button" onclick="GakuDonation.open()">Lihat QR donasi ♡</button><a class="chip" href="${imagePath}" download="DeX-Gaku-Donasi.png">Simpan gambar QR ↓</a></div><p class="hint">Di HP yang sama, simpan gambar lalu pilih gambar tersebut dari fitur pindai QR pada aplikasi pembayaranmu.</p></div><button class="donation-preview" type="button" onclick="GakuDonation.open()" aria-label="Perbesar gambar QR donasi"><img src="${imagePath}" width="1229" height="1536" alt="QR donasi DeX Gaku dengan maskot Shiba hijau"></button></section>`;
  document.addEventListener('DOMContentLoaded',()=>{
    init();const picture=dialog.querySelector('img');
    if(picture.complete){if(picture.naturalWidth>0)open();}
    else picture.addEventListener('load',open,{once:true});
  },{once:true});
})();
