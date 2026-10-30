/* Shared application shell and browser history bridge for the Simulasi menu. */
window.GakuSimulationHost={
 active:()=>page==='Simulasi',
 activate(){page='Simulasi'},
 title:(heading,subtitle)=>title(heading,subtitle),
 render(){updateScreen()},
 clearRoute(){history.replaceState({...appRoute(),simulation:null},'')},
 writeRoute(route,replace){page='Simulasi';routeDepth=1+route.depth;history[replace?'replaceState':'pushState']({...appRoute(),page:'Simulasi',depth:routeDepth,simulation:route},'')},
 returnHome(){const route=history.state;if(route?.gaku&&route.page!=='Simulasi')applyRoute(route);else{page='Beranda';kanaView='groups';routeDepth=0;history.replaceState(appRoute(),'')}try{const saved=JSON.parse(localStorage.getItem('gaku-ui-history')||'[]');if(Array.isArray(saved))historyData=saved}catch{}updateScreen()}
};
