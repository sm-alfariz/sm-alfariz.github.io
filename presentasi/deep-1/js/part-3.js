const COLORS = {
  green:  { border:'var(--green)', text:'var(--green)', bg:'rgba(57,255,20,.05)', badge:'rgba(57,255,20,.1)' },
  cyan:   { border:'var(--cyan)', text:'var(--cyan)', bg:'rgba(0,229,255,.05)', badge:'rgba(0,229,255,.1)' },
  purple: { border:'var(--purple)', text:'var(--purple)', bg:'rgba(176,38,255,.05)', badge:'rgba(176,38,255,.1)' },
};
function clr(name){return COLORS[name]||COLORS.green}

let currentSlide = 0;

function renderCategoryHeader(slide){
  const c=slide.content, co=clr(c.color);
  return `<div class="slide-enter" style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;padding:20px">
    <div class="corner-accent corner-tl" style="border-color:color-mix(in srgb, ${co.border} 12%, transparent)"></div>
    <div class="corner-accent corner-br" style="border-color:color-mix(in srgb, ${co.border} 12%, transparent)"></div>
    <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:100px;margin-bottom:24px;background:color-mix(in srgb, ${co.border} 6%, transparent);border:1px solid color-mix(in srgb, ${co.border} 12%, transparent)">
      <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;color:${co.border}">Kategori ${c.num}</span>
    </div>
    <h2 style="font-size:clamp(28px,5vw,52px);font-weight:900;margin-bottom:14px;line-height:1.15">${c.name}</h2>
    <p style="color:var(--text-dim);font-size:clamp(13px,1.5vw,16px);max-width:500px;margin-bottom:28px;line-height:1.6">${c.desc}</p>
    <div style="display:inline-flex;align-items:center;gap:12px;padding:12px 28px;border-radius:14px;background:color-mix(in srgb, ${co.border} 3%, transparent);border:1px solid color-mix(in srgb, ${co.border} 9%, transparent)">
      <span style="font-size:28px;font-weight:900;font-family:'JetBrains Mono',monospace;color:${co.border}">${c.count}</span>
      <span style="color:var(--text-dim);font-size:14px">istilah dalam kategori ini</span>
    </div>
    <div style="margin-top:32px;display:flex;align-items:center;gap:6px;color:var(--text-dim);font-size:12px;font-family:'JetBrains Mono',monospace">
      <span style="color:${co.border};animation:pulseGlow 2s ease-in-out infinite">▼</span>
      <span>Next untuk mulai</span>
    </div>
  </div>`;
}

function renderTerm(slide){
  const c=slide.content, co=clr(c.color);
  const extras=[];
  if(c.analogy) extras.push({label:'💡 Analogi',text:c.analogy});
  if(c.tips) extras.push({label:'⚡ Tips & Tricks',text:c.tips});
  if(c.mistakes) extras.push({label:'⚠️ Common Mistakes',text:c.mistakes});
  if(c.features) extras.push({label:'🔩 Features',text:c.features});
  if(c.tools) extras.push({label:'🔧 Popular Tools',text:c.tools});
  return `<div class="slide-enter" style="height:100%;display:flex;flex-direction:column;justify-content:center;max-width:800px;margin:0 auto;width:100%;padding:12px 16px;overflow-y:auto">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap">
      <span class="num-badge" style="background:${co.badge};color:${co.text};border:1px solid color-mix(in srgb, ${co.border} 19%, transparent)">${String(c.num).padStart(2,'0')}</span>
      <span style="color:var(--text-dim);font-size:11px;font-family:'JetBrains Mono',monospace;letter-spacing:1px;text-transform:uppercase">${c.category}</span>
      <span style="color:rgba(142,154,166,.2);font-size:12px">|</span>
      <span style="color:var(--text-dim);font-size:12px;font-family:'JetBrains Mono',monospace">${c.title}</span>
    </div>
    <h3 class="term-title" style="font-size:clamp(22px,3.5vw,36px);font-weight:900;margin-bottom:14px;line-height:1.15">${c.title}</h3>
    <div style="border-radius:12px;padding:14px 18px;margin-bottom:10px;background:${co.bg};border:1px solid color-mix(in srgb, ${co.border} 9%, transparent)">
      <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;display:block;color:${co.border}">📖 Definisi</span>
      <p class="term-body" style="color:var(--text-dim);line-height:1.7;font-size:clamp(13px,1.3vw,15px)">${c.def}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:8px;width:100%">
      ${extras.slice(0,2).map(sec => `
        <div class="card-hover" style="border-radius:12px;padding:12px 16px;background:${co.bg};border:1px solid color-mix(in srgb, ${co.border} 6%, transparent);position:relative;overflow:hidden">
          <div class="card-glow" style="position:absolute;inset:0;background:linear-gradient(135deg,transparent 60%,color-mix(in srgb, ${co.border} 2%, transparent));opacity:0;transition:opacity .4s;pointer-events:none"></div>
          <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;display:block;color:${co.border}">${sec.label}</span>
          <p class="term-body" style="color:var(--text-dim);font-size:clamp(12px,1.2vw,14px);line-height:1.6;position:relative;z-index:1">${sec.text}</p>
        </div>
      `).join('')}
    </div>
    ${extras.length>2?`
    <div class="card-hover" style="margin-top:8px;border-radius:12px;padding:12px 16px;background:${co.bg};border:1px solid color-mix(in srgb, ${co.border} 6%, transparent);position:relative;overflow:hidden">
      <div class="card-glow" style="position:absolute;inset:0;background:linear-gradient(135deg,transparent 60%,color-mix(in srgb, ${co.border} 2%, transparent));opacity:0;transition:opacity .4s;pointer-events:none"></div>
      <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;display:block;color:${co.border}">${extras[2].label}</span>
      <p class="term-body" style="color:var(--text-dim);font-size:clamp(12px,1.2vw,14px);line-height:1.6;position:relative;z-index:1">${extras[2].text}</p>
    </div>`:''}
  </div>`;
}

function renderClosing(slide){
  const c=slide.content;
  return `<div class="slide-enter" style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;max-width:768px;margin:0 auto;position:relative;padding:20px">
    <div class="corner-accent corner-tl" style="border-color:rgba(57,255,20,.2)"></div>
    <div class="corner-accent corner-tr" style="border-color:rgba(0,229,255,.2)"></div>
    <div class="corner-accent corner-bl" style="border-color:rgba(176,38,255,.2)"></div>
    <div class="corner-accent corner-br" style="border-color:rgba(57,255,20,.2)"></div>
    <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:100px;border:1px solid rgba(57,255,20,.2);background:rgba(57,255,20,.05);margin-bottom:20px">
      <span style="width:8px;height:8px;border-radius:50%;background:var(--green);animation:pulseGlow 2s ease-in-out infinite;display:inline-block"></span>
      <span style="color:var(--green);font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;text-transform:uppercase">Complete</span>
    </div>
    <h2 style="font-size:clamp(24px,4vw,42px);font-weight:900;margin-bottom:12px;line-height:1.2">${c.title}</h2>
    <p style="color:var(--text-dim);margin-bottom:24px;font-size:clamp(14px,1.5vw,16px)">${c.message}</p>
    <div style="width:100%;max-width:500px;margin-bottom:20px">
      ${c.steps.map((s,i)=>{
        const link = 'part-4.html';
        return `<a href="${link}" style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:12px;border:1px solid var(--surface-border);background:var(--surface);text-decoration:none;transition:all .3s;margin-bottom:8px" class="card-hover" onmouseover="this.style.borderColor='rgba(176,38,255,.3)'" onmouseout="this.style.borderColor='var(--surface-border)'">
           <span style="width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;font-family:'JetBrains Mono',monospace;background:rgba(176,38,255,.1);color:var(--purple);flex-shrink:0">${s.step}</span>
          <div style="text-align:left;flex:1">
            <h4 style="color:#fff;font-weight:600;font-size:13px">${s.title}</h4>
            <p style="color:var(--text-dim);font-size:11px;margin-top:2px">${s.detail}</p>
          </div>
          <span style="color:rgba(142,154,166,.3);font-size:16px;transition:transform .3s;flex-shrink:0" class="part-arrow">→</span>
        </a>`;
      }).join('')}
    </div>
    <p style="color:var(--text-dim);font-size:13px;max-width:400px;margin-bottom:24px">${c.closing}</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
       <a href="index.html" style="display:inline-flex;align-items:center;gap:8px;padding:10px 24px;border-radius:10px;background:var(--surface);border:1px solid var(--surface-border);color:var(--text-dim);text-decoration:none;font-size:13px;font-weight:600;transition:all .3s;font-family:'Inter',sans-serif" onmouseover="this.style.borderColor='rgba(57,255,20,.4)';this.style.color='var(--green)'" onmouseout="this.style.borderColor='var(--surface-border)';this.style.color='var(--text-dim)'">← Kembali ke Index</a>
      <a href="part-4.html" style="display:inline-flex;align-items:center;gap:8px;padding:10px 24px;border-radius:10px;background:rgba(176,38,255,.1);border:1px solid rgba(176,38,255,.3);color:var(--purple);text-decoration:none;font-size:13px;font-weight:600;transition:all .3s;font-family:'Inter',sans-serif;text-shadow:0 0 10px rgba(176,38,255,.3)" onmouseover="this.style.background='rgba(176,38,255,.2)';this.style.borderColor='var(--purple)'" onmouseout="this.style.background='rgba(176,38,255,.1)';this.style.borderColor='rgba(176,38,255,.3)'">Lanjut ke Part 4 →</a>
    </div>
  </div>`;
}

function renderSlide(slide){
  switch(slide.type){
    case 'category-header': return renderCategoryHeader(slide);
    case 'term': return renderTerm(slide);
    case 'closing': return renderClosing(slide);
    default: return '<div>Unknown slide</div>';
  }
}

function goTo(index){
  if(index<0||index>=slides.length) return;
  currentSlide=index;
  renderCurrent();
  updateDots();
  updateNav();
  updateProgress();
  updateCounter();
}

function updateNav(){
  const p=document.getElementById('prevBtn'), n=document.getElementById('nextBtn');
  if(p){p.disabled=currentSlide===0;p.style.opacity=currentSlide===0?'.2':'1';p.style.cursor=currentSlide===0?'not-allowed':'pointer'}
  if(n){n.disabled=currentSlide===slides.length-1;n.style.opacity=currentSlide===slides.length-1?'.2':'1';n.style.cursor=currentSlide===slides.length-1?'not-allowed':'pointer'}
}

function updateProgress(){
  const bar=document.getElementById('progressBar');
  if(bar) bar.style.width=((currentSlide+1)/slides.length*100)+'%';
}

function updateCounter(){
  const sc=document.getElementById('slideCounter'), ts=document.getElementById('totalSlides'), sl=document.getElementById('slideLabel');
  if(sc) sc.textContent=String(currentSlide+1).padStart(2,'0');
  if(ts) ts.textContent=String(slides.length).padStart(2,'0');
  if(sl) sl.textContent=`${String(currentSlide+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
}

function updateDots(){
  document.querySelectorAll('#dotContainer button').forEach((dot,i)=>{
    dot.className=i===currentSlide?'dot-active':'dot-inactive';
  });
}

function buildDots(){
  const dc=document.getElementById('dotContainer');
  if(!dc) return;
  dc.innerHTML='';
  slides.forEach((_,i)=>{
    const dot=document.createElement('button');
    dot.className='dot-inactive';
    dot.dataset.index=i;
    dot.onclick=()=>goTo(i);
    dc.appendChild(dot);
  });
}

function renderCurrent(){
  const container=document.getElementById('slideContainer');
  if(!container) return;
  container.innerHTML=renderSlide(slides[currentSlide]);
  const first=container.firstElementChild;
  if(first){
    first.style.animation='none';
    requestAnimationFrame(()=>{first.style.animation='slideIn .45s cubic-bezier(.16,1,.3,1) forwards'});
  }
}

function createParticles(){
  const p=document.getElementById('particles');
  if(!p) return;
  const colors=['var(--green)','var(--cyan)','var(--purple)'];
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

function init(){
  slides.push(
    {type:'category-header',content:{num:'03',name:'Tools & Environment',count:'6 istilah',desc:'Alat-alat yang digunakan dalam ekosistem vibe coding — sama seperti carpenter perlu tau berbagai jenis tools untuk berbagai pekerjaan.',color:'purple'}},
    {type:'term',content:{num:16,title:'Cursor',category:'Tools',color:'purple',def:'AI-first code editor dibangun di atas VS Code dengan integrasi AI native untuk code generation, editing, refactoring, dan assistance. Tool paling populer untuk vibe coding saat ini.',analogy:'Kalau VS Code adalah mobil manual yang powerful, Cursor adalah mobil dengan advanced driver assistance system (ADAS). Kamu tetap in control, tapi driving jadi lebih effortless.',features:'Chat (Cmd+L) · Inline Edit (Cmd+K) · Composer (Cmd+I) · Tab Completion · @Mentions',tips:'Learn keyboard shortcuts. Use @mentions extensively. Setup .cursorrules file untuk project-specific instructions.'}},
    {type:'term',content:{num:17,title:'GitHub Copilot',category:'Tools',color:'purple',def:'AI coding assistant dari GitHub (Microsoft) yang menyediakan code suggestions dan completions berbasis AI. Bekerja sebagai extension di VS Code, JetBrains, dan editors lain.',analogy:'Seperti autocomplete di smartphone, tapi untuk code dan 100x lebih powerful. Saat kamu ketik code, Copilot suggests next lines hingga entire implementations.',features:'Inline Suggestions (Ghost Text) · Comment-Driven Development · Copilot Chat (/explain, /fix, /tests)',tips:'Write descriptive comments first — guides Copilot better. Use descriptive function names. Open related files untuk more context.'}},
    {type:'term',content:{num:18,title:'Claude Code',category:'Tools',color:'purple',def:'Terminal-based AI coding tool dari Anthropic yang memungkinkan interaksi dengan Claude untuk coding tasks langsung dari command line — bisa membaca, menulis, dan menjalankan perintah.',analogy:'Seperti punya senior developer yang bisa kamu panggil dari terminal. Dia bisa lihat semua file, edit langsung, run commands, dan explain apa yang dia lakukan.',tips:'Great untuk larger refactors — Claude bisa handle multi-file changes. Gunakan untuk debugging — bisa read logs, check files, trace issues. Review changes before accepting.',mistakes:'Not reviewing Claude\'s changes → unexpected modifications. Giving vague instructions → vague results. Over-relying without understanding → lost ownership.'}},
    {type:'term',content:{num:19,title:'Windsurf',category:'Tools',color:'purple',def:'AI code editor dari Codeium dengan "Cascade" — AI assistant agentic yang bisa understand, plan, dan execute multi-step coding tasks secara lebih autonomous.',analogy:'Kalau Cursor seperti co-pilot yang kamu instruksikan step by step, Windsurf dengan Cascade lebih seperti partner yang kamu kasih bigger goal dan dia figure out steps-nya.',features:'Cascade (multi-step autonomous) · Flows (persistent context) · Supercomplete (advanced autocomplete) · Command Execution',tips:'Gunakan Cascade untuk multi-step tasks — designed for autonomy. Cocok untuk project scaffolding dan large-scale refactoring.'}},
    {type:'term',content:{num:20,title:'v0 (by Vercel)',category:'Tools',color:'purple',def:'AI-powered UI generation tool dari Vercel yang bisa generate React/Next.js components dari text descriptions atau image references — fokus pada UI/frontend generation.',analogy:'Seperti magic converter dari design ke code. Kamu punya screenshot atau design di kepala, describe atau upload, v0 generates React component dengan Tailwind CSS.',tips:'Start dengan text, refine dengan iterations. Gunakan untuk rapid prototyping. Combine dengan Cursor — generate di v0, customize di Cursor.',mistakes:'Expecting production-ready code untuk complex apps. Not iterating enough — first output rarely perfect.'}},
    {type:'term',content:{num:21,title:'Bolt.new',category:'Tools',color:'purple',def:'AI-powered full-stack app builder yang bisa create, edit, dan deploy applications entirely dari browser. Tidak perlu local development setup.',analogy:'Seperti punya developer + server + deployment pipeline dalam satu browser tab. Describe app, Bolt build everything, dapat working app dengan shareable URL.',tips:'Great untuk MVPs dan prototypes — validate ideas fast. Gunakan untuk learning projects — experiment without setup. Quick demos untuk clients.',mistakes:'Using untuk complex production apps → better for prototypes. Not understanding generated code → learn from what Bolt creates. No version control → changes ephemeral.'}},
    {type:'closing',content:{title:'Selesai! Part 3 — <span style="color:var(--purple)">Tools</span>',message:'Kamu sudah mengenal 6 tools utama untuk vibe coding.',steps:[{step:'→',title:'Lanjut ke Part 4',detail:'Workflow & Techniques — 5 istilah tentang cara kerja dan teknik'}],closing:'Next: Workflow & Techniques — buka part-4.html',tagline:'Lanjut ke Part 4 →'}}
  );
  currentSlide=0;
  buildDots();
  renderCurrent();
  updateNav();
  updateProgress();
  updateCounter();
  updateDots();

  const prev=document.getElementById('prevBtn'), next=document.getElementById('nextBtn');
  if(prev) prev.onclick=()=>goTo(currentSlide-1);
  if(next) next.onclick=()=>goTo(currentSlide+1);

  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'||e.key==='ArrowDown'||e.key===' '){e.preventDefault();if(currentSlide<slides.length-1) goTo(currentSlide+1)}
    if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();if(currentSlide>0) goTo(currentSlide-1)}
    if(e.key==='Home'){e.preventDefault();goTo(0)}
    if(e.key==='End'){e.preventDefault();goTo(slides.length-1)}
  });

  let touchStartX=0;
  const container=document.getElementById('slideContainer');
  if(container){
    container.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX},{passive:true});
    container.addEventListener('touchend',e=>{
      const diff=touchStartX-e.changedTouches[0].screenX;
      if(Math.abs(diff)>50){if(diff>0&currentSlide<slides.length-1) goTo(currentSlide+1);else if(diff<0&currentSlide>0) goTo(currentSlide-1)}
    },{passive:true});
  }

  // Orbs
  const o=document.getElementById('orbs');
  if(o) for(let i=0;i<3;i++){
    const orb=document.createElement('div');
    orb.className='orb';
    orb.style.top=(10+Math.random()*70)+'%';
    orb.style.left=(5+Math.random()*70)+'%';
    orb.style.width=(200+Math.random()*300)+'px';
    orb.style.height=orb.style.width;
    orb.style.animationDelay=(Math.random()*10)+'s';
    orb.style.background=['radial-gradient(circle,rgba(176,38,255,.12),transparent 70%)','radial-gradient(circle,rgba(57,255,20,.12),transparent 70%)','radial-gradient(circle,rgba(0,229,255,.12),transparent 70%)'][i];
    o.appendChild(orb);
  }
}

const slides = [];
function boot(){ createParticles(); init(); }
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
else boot();

document.addEventListener('mouseover',e=>{
  const t=e.target.closest('#prevBtn, #nextBtn');
  if(t&&!t.disabled){t.style.borderColor='rgba(176,38,255,.4)';t.style.color='#fff'}
});
document.addEventListener('mouseout',e=>{
  const t=e.target.closest('#prevBtn, #nextBtn');
  if(t){t.style.borderColor='var(--surface-border)';t.style.color='var(--text-dim)'}
});
