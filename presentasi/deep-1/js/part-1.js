const COLORS={
  green:{border:'var(--green)',text:'var(--green)',bg:'rgba(57,255,20,0.05)',badge:'rgba(57,255,20,0.1)'},
  cyan:{border:'var(--cyan)',text:'var(--cyan)',bg:'rgba(0,229,255,0.05)',badge:'rgba(0,229,255,0.1)'},
  purple:{border:'var(--purple)',text:'var(--purple)',bg:'rgba(176,38,255,0.05)',badge:'rgba(176,38,255,0.1)'},
};

function clr(n){return COLORS[n]||COLORS.green}

function createParticles(){
  const p=document.getElementById('particles');
  if(!p)return;
  for(let i=0;i<35;i++){
    const e=document.createElement('div');
    e.className='particle';
    e.style.left=Math.random()*100+'%';
    e.style.top=Math.random()*100+'%';
    e.style.animationDuration=(8+Math.random()*12)+'s';
    e.style.animationDelay=(Math.random()*10)+'s';
    e.style.width=(1+Math.random()*2)+'px';
    e.style.height=e.style.width;
    e.style.background=['var(--green)','var(--cyan)','var(--purple)'][Math.floor(Math.random()*3)];
    p.appendChild(e);
  }
}

function renderCategoryHeader(s){
  const c=s.content,cl=clr(c.color);
  return `<div class="slide-enter" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;height:100%">
    <div class="corner-accent corner-tl" style="border-color:color-mix(in srgb, ${cl.border} 12%, transparent)"></div>
    <div class="corner-accent corner-br" style="border-color:color-mix(in srgb, ${cl.border} 12%, transparent)"></div>
    <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:9999px;margin-bottom:32px;background:color-mix(in srgb, ${cl.border} 6%, transparent);border:1px solid color-mix(in srgb, ${cl.border} 12%, transparent)">
      <span style="color:${cl.border};font-size:12px;font-family:'JetBrains Mono',monospace;letter-spacing:2px">Kategori ${c.num}</span>
    </div>
    <h2 style="font-size:clamp(1.5rem,5vw,3.5rem);font-weight:900;margin-bottom:16px;line-height:1.25">
      <span style="color:${cl.border}">${c.num}.</span> ${c.name}
    </h2>
    <p style="color:var(--text-dim);font-size:clamp(.8rem,2vw,1rem);max-width:480px;margin-bottom:32px">${c.desc}</p>
    <div style="display:inline-flex;align-items:center;gap:12px;padding:12px 20px;border-radius:12px;background:color-mix(in srgb, ${cl.border} 6%, transparent);border:1px solid color-mix(in srgb, ${cl.border} 9%, transparent)">
      <span style="font-size:clamp(1.2rem,4vw,1.5rem);color:${cl.border};font-family:'JetBrains Mono',monospace;font-weight:900">${c.count}</span>
      <span style="color:var(--text-dim);font-size:clamp(.75rem,2vw,.875rem)">istilah dalam kategori ini</span>
    </div>
    <div style="color:var(--text-dim);font-size:11px;margin-top:40px;display:flex;align-items:center;gap:8px">
      <span style="color:${cl.border};animation:pulseGlow 2s ease-in-out infinite">▼</span>
      <span style="font-family:'JetBrains Mono',monospace">Next untuk mulai</span>
    </div>
  </div>`;
}

function renderTerm(s){
  const c=s.content,cl=clr(c.color);
  const extras=[];
  if(c.analogy)extras.push({label:'Analogi',text:c.analogy});
  if(c.tips)extras.push({label:'Tips & Tricks',text:c.tips});
  if(c.mistakes)extras.push({label:'Common Mistakes',text:c.mistakes});
  if(c.techniques)extras.push({label:'Techniques',text:c.techniques});
  if(c.levels)extras.push({label:'Levels',text:c.levels});
  if(c.features)extras.push({label:'Features',text:c.features});
  if(c.sizes)extras.push({label:'Sizes',text:c.sizes});
  if(c.aspects)extras.push({label:'Aspects',text:c.aspects});
  if(c.types)extras.push({label:'Types',text:c.types});
  if(c.tools)extras.push({label:'Popular Tools',text:c.tools});
  const n=Math.min(extras.length,2);
  return `<div class="slide-enter" style="display:flex;flex-direction:column;padding-top:16px;padding-bottom:16px;height:100%;max-width:1024px;margin:0 auto;width:100%;overflow-y:auto">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-shrink:0">
      <span class="num-badge" style="background:${cl.badge};color:${cl.text};border:1px solid color-mix(in srgb, ${cl.border} 19%, transparent)">${String(c.num).padStart(2,'0')}</span>
      <span style="color:var(--text-dim);font-size:11px;font-family:'JetBrains Mono',monospace;letter-spacing:1px;text-transform:uppercase">${c.category}</span>
      <span style="color:rgba(142,154,166,0.3);font-size:11px">|</span>
      <span style="color:var(--text-dim);font-size:11px;font-family:'JetBrains Mono',monospace">${c.title}</span>
    </div>
    <h3 class="term-title" style="font-size:clamp(1.1rem,3.5vw,2.25rem);font-weight:900;margin-bottom:16px;line-height:1.2;flex-shrink:0">${c.title}</h3>
    <div style="border-radius:12px;padding:20px;border:1px solid color-mix(in srgb, ${cl.border} 9%, transparent);margin-bottom:16px;background:${cl.bg};flex-shrink:0">
      <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;display:block;margin-bottom:6px;color:${cl.border}">&#x1F4D6; Definisi</span>
      <p class="term-body" style="color:var(--text-dim);line-height:1.7;font-size:clamp(.8rem,2vw,.95rem)">${c.def}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;flex-shrink:0">
      ${extras.slice(0,2).map(sec=>`
        <div style="border-radius:12px;padding:16px;border:1px solid color-mix(in srgb, ${cl.border} 6%, transparent);background:${cl.bg}">
          <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;display:block;margin-bottom:6px;color:${cl.border}">${sec.label}</span>
          <p class="term-body" style="color:var(--text-dim);font-size:clamp(.75rem,2vw,.875rem);line-height:1.6">${sec.text}</p>
        </div>
      `).join('')}
    </div>
    ${extras.length>2?`
    <div style="border-radius:12px;padding:16px;border:1px solid color-mix(in srgb, ${cl.border} 6%, transparent);margin-top:12px;background:${cl.bg};flex-shrink:0">
      <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;display:block;margin-bottom:6px;color:${cl.border}">${extras[2].label}</span>
      <p class="term-body" style="color:var(--text-dim);font-size:clamp(.75rem,2vw,.875rem);line-height:1.6">${extras[2].text}</p>
    </div>`:''}
  </div>`;
}

function renderClosing(s){
  const c=s.content;
  return `<div class="slide-enter" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;height:100%;max-width:768px;margin:0 auto">
    <div class="corner-accent corner-tl" style="border-color:rgba(57,255,20,0.2)"></div>
    <div class="corner-accent corner-tr" style="border-color:rgba(0,229,255,0.2)"></div>
    <div class="corner-accent corner-bl" style="border-color:rgba(176,38,255,0.2)"></div>
    <div class="corner-accent corner-br" style="border-color:rgba(57,255,20,0.2)"></div>
    <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:9999px;margin-bottom:32px;background:rgba(57,255,20,0.05);border:1px solid rgba(57,255,20,0.2)">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulseGlow 2s ease-in-out infinite;display:inline-block"></span>
      <span style="color:var(--green);font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px">Closing</span>
    </div>
    <h2 style="font-size:clamp(1.2rem,4vw,2.5rem);font-weight:900;margin-bottom:12px;line-height:1.2">${c.title}</h2>
    <p style="color:var(--text-dim);margin-bottom:32px;font-size:clamp(.8rem,2vw,1rem)">${c.message}</p>
    <div style="width:100%;max-width:480px;margin-bottom:32px">
      ${c.steps.map((s,i)=>{
        const sb=['rgba(57,255,20,0.1)','rgba(0,229,255,0.1)'][i];
        const sc=['var(--green)','var(--cyan)'][i];
        const linkTarget=s.title.includes('Part 2')?'part-2.html':'#';
        return `<a href="${linkTarget}" style="display:flex;align-items:center;gap:16px;padding:12px 16px;border-radius:12px;border:1px solid var(--surface-border);background:var(--surface);text-decoration:none;transition:all .3s;margin-bottom:8px" class="card-hover">
          <span style="width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;font-family:'JetBrains Mono',monospace;background:${sb};color:${sc};flex-shrink:0">${s.step}</span>
          <div style="text-align:left">
            <div style="color:#fff;font-weight:600;font-size:13px">${s.title}</div>
            <div style="color:var(--text-dim);font-size:11px">${s.detail}</div>
          </div>
          <span style="color:rgba(142,154,166,0.3);margin-left:auto;font-size:13px">&rarr;</span>
        </a>`;
      }).join('')}
    </div>
    <p style="color:var(--text-dim);font-size:clamp(.7rem,2vw,.875rem);max-width:480px;margin-bottom:20px">${c.closing}</p>
    <a href="part-2.html" style="display:inline-flex;align-items:center;gap:8px;padding:12px 32px;border-radius:8px;background:rgba(0,229,255,0.1);border:1px solid rgba(0,229,255,0.3);color:var(--cyan);text-decoration:none;font-weight:700;font-size:clamp(.9rem,2.5vw,1.25rem);transition:all .3s;box-shadow:0 0 20px rgba(0,229,255,0.15)" onmouseover="this.style.boxShadow='0 0 30px rgba(0,229,255,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 0 20px rgba(0,229,255,0.15)';this.style.transform='translateY(0)'">
      Lanjut ke Part 2 &rarr;
    </a>
  </div>`;
}

function renderSlide(slide,index){
  switch(slide.type){
    case 'category-header':return renderCategoryHeader(slide);
    case 'term':return renderTerm(slide);
    case 'closing':return renderClosing(slide);
    default:return '<div>Unknown slide type</div>';
  }
}

let currentSlide=0;

function goTo(index){
  if(index<0||index>=slides.length)return;
  currentSlide=index;
  renderCurrent();
  updateDots();
  updateNav();
  updateProgress();
  updateCounter();
}

function updateNav(){
  const p=document.getElementById('prevBtn'),n=document.getElementById('nextBtn');
  if(p)p.disabled=currentSlide===0;
  if(n)n.disabled=currentSlide===slides.length-1;
}

function updateProgress(){
  const bar=document.getElementById('progressBar');
  if(bar)bar.style.width=((currentSlide+1)/slides.length*100)+'%';
}

function updateCounter(){
  const sc=document.getElementById('slideCounter'),ts=document.getElementById('totalSlides'),sl=document.getElementById('slideLabel');
  if(sc)sc.textContent=String(currentSlide+1).padStart(2,'0');
  if(ts)ts.textContent=String(slides.length).padStart(2,'0');
  if(sl)sl.textContent=`${String(currentSlide+1).padStart(2,'0')}/${String(slides.length).padStart(2,'0')}`;
}

function updateDots(){
  document.querySelectorAll('#dotContainer button').forEach((dot,i)=>{
    dot.className=i===currentSlide?'dot-active':'dot-inactive';
  });
}

function buildDots(){
  const dc=document.getElementById('dotContainer');
  if(!dc)return;
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
  if(!container)return;
  container.innerHTML=renderSlide(slides[currentSlide],currentSlide);
  const first=container.firstElementChild;
  if(first){
    first.style.animation='none';
    requestAnimationFrame(()=>{first.style.animation='slideIn .5s cubic-bezier(0.16,1,0.3,1) forwards'});
  }
}

function initPresentation(slideData){
  slides=slideData;
  currentSlide=0;
  buildDots();
  renderCurrent();
  updateNav();
  updateProgress();
  updateCounter();
  updateDots();
  document.getElementById('prevBtn').onclick=()=>goTo(currentSlide-1);
  document.getElementById('nextBtn').onclick=()=>goTo(currentSlide+1);
  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'||e.key==='ArrowDown'||e.key===' '){e.preventDefault();if(currentSlide<slides.length-1)goTo(currentSlide+1)}
    if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();if(currentSlide>0)goTo(currentSlide-1)}
    if(e.key==='Home'){e.preventDefault();goTo(0)}
    if(e.key==='End'){e.preventDefault();goTo(slides.length-1)}
  });
  let tx=0;
  const c=document.getElementById('slideContainer');
  if(c){
    c.addEventListener('touchstart',e=>{tx=e.changedTouches[0].screenX},{passive:true});
    c.addEventListener('touchend',e=>{
      const d=tx-e.changedTouches[0].screenX;
      if(Math.abs(d)>50){if(d>0&currentSlide<slides.length-1)goTo(currentSlide+1);else if(d<0&currentSlide>0)goTo(currentSlide-1)}
    },{passive:true});
  }
}

let slides=[
  {type:'category-header',content:{num:'01',name:'Fundamental Vibe Coding',count:'8 istilah',desc:'Dasar-dasar yang membentuk pemahaman inti — istilah yang akan kamu temui di setiap diskusi tentang vibe coding.',color:'green'}},
  {type:'term',content:{num:1,title:'Vibe Coding',category:'Fundamental',color:'green',def:'Pendekatan development di mana developer menggunakan AI sebagai collaborative partner untuk menulis code melalui natural language. Istilah "vibe" merujuk pada flow kolaboratif antara manusia dan AI — kamu describe "vibe" yang diinginkan, AI bantu wujudkan.',analogy:'Seperti bekerja dengan co-pilot pesawat. Kamu pilot utama yang menentukan destination dan membuat keputusan critical. AI co-pilot membantu navigation, monitor instruments, handle routine tasks.',tips:'Treat AI sebagai junior developer yang capable tapi perlu direction. Clear instruction = better output. Iterate dan refine — jangan expect perfect di first attempt.'}},
  {type:'term',content:{num:2,title:'AI Code Editor',category:'Fundamental',color:'green',def:'Code editor yang terintegrasi dengan AI capabilities secara native — code generation, intelligent completion, refactoring, dan assistance langsung dalam editor. Menyatukan coding dan AI assistance dalam satu environment seamless.',analogy:'Kalau code editor biasa seperti mesin ketik canggih, AI code editor seperti mesin ketik yang punya asisten duduk di sebelah kamu, siap membantu kapan saja tanpa kamu harus keluar dari flow.',tools:'Cursor (paling populer), GitHub Copilot + VS Code, Windsurf, Zed, Void, Continue',tips:'Learn keyboard shortcuts — Cmd+L (chat), Cmd+K (inline), Cmd+I (composer). Gunakan @mentions untuk include specific files sebagai context.'}},
  {type:'term',content:{num:3,title:'Code Generation',category:'Fundamental',color:'green',def:'Proses AI menghasilkan code berdasarkan instruksi bahasa natural, partial code, atau specifications — dari single function sampai entire features dengan struktur yang konsisten.',analogy:'Seperti memesan pakaian ke tailor custom. Kamu describe apa yang kamu mau, tailor (AI) mewujudkannya. Semakin detail description-nya, semakin sesuai hasilnya.',levels:'Level 1: Single function. Level 2: Component. Level 3: Feature (multi-function). Level 4: System (multiple files, API, DB).',tips:'Start simple, build complexity incrementally. Always specify tech stack dan language. Include edge cases yang harus di-handle.'}},
  {type:'term',content:{num:4,title:'Natural Language Programming',category:'Fundamental',color:'green',def:'Paradigma programming di mana developer menggunakan bahasa manusia (bukan programming language) untuk menginstruksikan komputer atau AI apa yang harus dilakukan.',analogy:'Bayangkan punya translator yang fasih semua bahasa programming. Kamu bicara Bahasa Indonesia: "Filter produk yang harganya di bawah 100 ribu." Translator convert ke Python, JavaScript, SQL — dengan syntax yang benar.',tips:'Describe WHAT you want, bukan HOW to implement. Be specific tentang input dan expected output. Include example data kalau structure complex.'}},
  {type:'term',content:{num:5,title:'AI Pair Programming',category:'Fundamental',color:'green',def:'Collaborative coding practice di mana developer bekerja bersama AI sebagai "pair" — satu pihak think, plan, dan direct (human), satu pihak execute, suggest, dan assist (AI).',analogy:'Traditional pair programming: Driver (yang ketik) + Navigator (yang guide). Dalam AI pair programming, kamu sebagai Navigator, AI sebagai Driver yang sangat cepat dan punya knowledge luas.',tips:'Treat AI sebagai pair yang knowledgeable, bukan just executor. Ask untuk suggestions dan alternatives. Maintain dialogue, bukan monologue.'}},
  {type:'term',content:{num:6,title:'Prompt-to-Code',category:'Fundamental',color:'green',def:'Pipeline di mana text prompt ditransformasi menjadi working code — dari input natural language instruction hingga output executable code yang bisa langsung dijalankan.',analogy:'Seperti vending machine canggih. Masukkan request (prompt), mesin process, keluar produk (code). Kamu bisa fine-tune request dan iterate sampai sesuai keinginan.',tips:'Structure prompt seperti spec document untuk complex features. Include ALL requirements upfront. Test generated code sebelum move on.'}},
  {type:'term',content:{num:7,title:'Context Window',category:'Fundamental',color:'green',def:'"Memory" atau batasan seberapa banyak informasi (code, conversation history, files) yang bisa AI lihat dan pertimbangkan saat generate response. Di luar context window = AI tidak tahu exists.',analogy:'Seperti meja kerja dengan ukuran terbatas. Semakin besar meja, semakin banyak dokumen yang bisa dikerjakan bersamaan. Context window = ukuran meja AI.',sizes:'Small (8K-16K): 1-3 file. Medium (32K-64K): 5-10 file. Large (128K-200K): 20+ file. Claude 3.5: 200K tokens ≈ 500 halaman.',tips:'Provide relevant files sebagai context dengan @mentions. Prioritize most relevant context — quality over quantity.'}},
  {type:'term',content:{num:8,title:'Token',category:'Fundamental',color:'green',def:'Unit pengukuran untuk text yang diproses AI. Menentukan: (1) berapa banyak code yang bisa diproses, (2) berapa banyak yang bisa di-generate, (3) berapa biaya API usage.',analogy:'Token seperti kredit di arcade game. Setiap action butuh kredit. Prompt panjang = lebih banyak kredit. Tapi beda game (model) punya kurs kredit berbeda.',tips:'Concise prompts save tokens tanpa sacrifice clarity. Reuse context dari previous messages. Use cheaper models untuk simple tasks (GPT-4o-mini, Haiku).'}},
  {type:'closing',content:{title:'Selesai! Part 1 — <span style="color:var(--green)">Fundamental</span>',message:'Kamu sudah menguasai 8 istilah fundamental vibe coding.',steps:[{step:'\u2192',title:'Lanjut ke Part 2',detail:'Prompting & Communication \u2014 7 istilah tentang cara berkomunikasi dengan AI'}],closing:'Next: Prompting & Communication \u2014 buka part-2.html',tagline:'Lanjut ke Part 2 \u2192'}}
];
initPresentation(slides);
createParticles();
