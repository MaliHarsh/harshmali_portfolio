(() => {
 const canvas=document.getElementById('cad-view'); if(!canvas)return;
 const ctx=canvas.getContext('2d'); let yaw=.55,pitch=.28,zoom=1,mesh=null,drag=null;
 const views={iso:[.55,.28],front:[0,0],side:[Math.PI/2,0]};
 function draw(){
  if(!mesh)return; const rect=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);
  canvas.width=Math.max(1,Math.round(rect.width*dpr));canvas.height=Math.round(rect.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
  const w=rect.width,h=rect.height;ctx.fillStyle='#edf3fa';ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='#d8e3f0';ctx.lineWidth=1;for(let x=0;x<w;x+=28){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}for(let y=0;y<h;y+=28){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
  const scale=Math.min(w/280,h/230)*zoom;
  const points=mesh.vertices.map(([x,y,z])=>{z-=98;const rx=x*Math.cos(yaw)-y*Math.sin(yaw),depth=x*Math.sin(yaw)+y*Math.cos(yaw);return [rx,z*Math.cos(pitch)-depth*Math.sin(pitch),depth*Math.cos(pitch)+z*Math.sin(pitch)]});
  const triangles=mesh.faces.map(f=>({f,depth:f.reduce((s,i)=>s+points[i][2],0)/3})).sort((a,b)=>a.depth-b.depth);
  for(const {f} of triangles){const vs=f.map(i=>points[i]),u=vs[1].map((x,i)=>x-vs[0][i]),v=vs[2].map((x,i)=>x-vs[0][i]);const normal=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],n=Math.hypot(...normal);const light=.35+.65*Math.abs((normal[0]*.3+normal[1]*.65+normal[2]*.7)/n);ctx.beginPath();vs.forEach((v,j)=>{const x=w/2+v[0]*scale,y=h/2-v[1]*scale;j?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();ctx.fillStyle=`rgb(${Math.round(10+35*light)},${Math.round(45+65*light)},${Math.round(85+110*light)})`;ctx.fill();ctx.strokeStyle='#002e56';ctx.lineWidth=.45;ctx.stroke()}
  ctx.fillStyle='#001e44';ctx.font='12px monospace';ctx.fillText('CONCEPTUAL RECONSTRUCTION / NOT AS-BUILT',18,26);ctx.fillStyle='#52647c';ctx.fillText('X · width     Y · depth     Z · height',18,h-18);
 }
 document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{[yaw,pitch]=views[b.dataset.view];zoom=1;draw()}));
 canvas.addEventListener('pointerdown',e=>{drag=[e.clientX,e.clientY];canvas.setPointerCapture(e.pointerId)});
 canvas.addEventListener('pointermove',e=>{if(!drag)return;yaw+=(e.clientX-drag[0])*.008;pitch=Math.max(-1.2,Math.min(1.2,pitch+(e.clientY-drag[1])*.008));drag=[e.clientX,e.clientY];draw()});
 ['pointerup','pointercancel'].forEach(type=>canvas.addEventListener(type,()=>drag=null));
 canvas.addEventListener('wheel',e=>{e.preventDefault();zoom=Math.max(.65,Math.min(1.7,zoom-e.deltaY*.001));draw()},{passive:false});
 new ResizeObserver(draw).observe(canvas);
 fetch('reaction-wheel-reference-mesh.json').then(r=>{if(!r.ok)throw Error('Model unavailable');return r.json()}).then(m=>{mesh=m;draw()}).catch(()=>{canvas.outerHTML='<p>Interactive preview unavailable. The CAD drawing and downloadable files are available below.</p>'});
})();
