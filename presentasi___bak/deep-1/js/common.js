function createParticles(){
  const p=document.getElementById('particles');
  if(!p) return;
  const colors=['#39FF14','#00E5FF','#B026FF'];
  for(let i=0;i<35;i++){
    const el=document.createElement('div');
    el.className='particle';
    el.style.left=Math.random()*100+'%';
    el.style.top=Math.random()*100+'%';
    el.style.animation=`float ${8+Math.random()*12}s ${Math.random()*10}s infinite`;
    el.style.width=(1+Math.random()*2)+'px';
    el.style.height=el.style.width;
    el.style.background=colors[Math.floor(Math.random()*3)];
    p.appendChild(el);
  }
}
