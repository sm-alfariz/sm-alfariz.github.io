const COLORS = {
  green: { border:'var(--green)', text:'var(--green)', bg:'rgba(57,255,20,.08)', badge:'rgba(57,255,20,.15)', badgeText:'var(--green)' },
  cyan:  { border:'var(--cyan)', text:'var(--cyan)', bg:'rgba(0,229,255,.08)', badge:'rgba(0,229,255,.15)', badgeText:'var(--cyan)' },
  purple:{ border:'var(--purple)', text:'var(--purple)', bg:'rgba(176,38,255,.08)', badge:'rgba(176,38,255,.15)', badgeText:'var(--purple)' }
};

const slides = [
  { type:'category-header', content:{ num:'06', name:'Learning Journey', count:'4 minggu', desc:'Rekomendasi alur belajar 4 minggu untuk menguasai vibe coding — dari fundamental hingga workflow dan best practices.', color:'purple' } },
  { type:'term', content:{ num:1, title:'Fundamental', category:'Minggu 1', color:'green',
    def:'Mulai perjalanan vibe coding dengan menguasai 8 istilah fundamental. Pahami core concepts seperti Vibe Coding, AI Code Editor, Code Generation, Natural Language Programming, AI Pair Programming, Prompt-to-Code, Context Window, dan Token — membangun foundation yang kuat sebelum melangkah lebih jauh.',
    focus:'Fokus: Membangun pemahaman dasar tentang bagaimana AI dan developer berkolaborasi dalam ekosistem vibe coding.',
    action:'Buka part-1.html dan pelajari seluruh 8 istilah fundamental. Pahami analogi dan tips yang diberikan untuk setiap istilah.'
  }},
  { type:'term', content:{ num:2, title:'Prompting', category:'Minggu 2', color:'cyan',
    def:'Minggu kedua fokus pada skill paling penting dalam vibe coding — prompting. Pelajari 7 teknik komunikasi dengan AI: Prompt Engineering, System Prompt, Instruction Prompt, Few-shot Prompting, Chain-of-Thought, Iterative Prompting, dan Context Injection.',
    focus:'Fokus: Menguasai seni berkomunikasi dengan AI — skill yang membedakan beginner dari advanced vibe coder.',
    action:'Buka part-2.html dan praktikkan setiap teknik prompting. Buat personal prompt library untuk common tasks yang sering kamu kerjakan.'
  }},
  { type:'term', content:{ num:3, title:'Tools', category:'Minggu 3', color:'purple',
    def:'Minggu ketiga adalah tentang tools. Fokus pada SATU tools dulu — Cursor recomended untuk pemula. Kuasai Cursor secara mendalam: keyboard shortcuts, @mentions, Composer, Inline Edit, dan Tab Completion. Setelah mahir, eksplorasi tools lain seperti Claude Code, Windsurf, v0, dan Bolt.new.',
    focus:'Fokus: Depth over breadth. Kuasai 1 tools dengan baik sebelum mencoba tools lain.',
    action:'Install Cursor, pelajari shortcut dasar (Cmd+L, Cmd+K, Cmd+I), buat project sederhana dari awal sampai akhir menggunakan AI assistance.'
  }},
  { type:'term', content:{ num:4, title:'Workflow & Quality', category:'Minggu 4', color:'green',
    def:'Minggu terakhir fokus pada workflow dan quality. Pelajari 5 istilah: Scaffolding untuk memulai project, Refactoring dengan bantuan AI, Inline Completion untuk produktivitas, Chat-based Coding untuk complex tasks, dan Agentic Coding untuk autonomous task execution.',
    focus:'Fokus: Membangun workflow yang efisien dan menjaga kualitas code yang dihasilkan dengan AI.',
    action:'Buka part-4.html dan part-5.html untuk memahami workflow dan best practices. Terapkan dalam project sesungguhnya.'
  }},
  { type:'closing', content:{
    title:'Selesai! Part 6 — <span style="color:var(--purple)">Learning Journey</span>',
    message:'Kamu sudah memiliki roadmap 4 minggu untuk menguasai vibe coding. Konsisten dan praktik setiap hari!',
    steps:[
      { step:'→', title:'Kembali ke Index', detail:'Lihat semua kategori dan mulai perjalananmu' }
    ],
    closing:'Mulai dari Part 1 — Fundamental untuk memulai perjalananmu →',
    tagline:'<a href="index.html">Kembali ke Index →</a>'
  }}
];

function createParticles(){
  const container = document.getElementById('particles');
  for(let i=0;i<35;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size=2+Math.random()*3;
    p.style.width=size+'px';
    p.style.height=size+'px';
    p.style.left=Math.random()*100+'%';
    p.style.top=Math.random()*100+'%';
    p.style.animationDuration=(8+Math.random()*12)+'s';
    p.style.animationDelay=(Math.random()*15)+'s';
    const colors=['var(--green)','var(--cyan)','var(--purple)'];
    p.style.background=colors[Math.floor(Math.random()*3)];
    p.style.boxShadow='0 0 '+(4+Math.floor(Math.random()*6))+'px '+p.style.background;
    container.appendChild(p);
  }
}

function renderCategoryHeader(c){
  const cols=COLORS[c.color]||COLORS.purple;
  return `<div class="slide category-header" style="color:${cols.text}">
    <div class="num"><span class="num-glow">${c.num}</span></div>
    <h1>${c.name}</h1>
    <div class="count">● ${c.count} ●</div>
    <p>${c.desc}</p>
    <div class="week-grid">
      <div class="week-item">
        <div class="week-num" style="color:var(--green)">1</div>
        <div class="week-title">Fundamental</div>
        <div class="week-desc">8 istilah dasar</div>
      </div>
      <div class="week-item">
        <div class="week-num" style="color:var(--cyan)">2</div>
        <div class="week-title">Prompting</div>
        <div class="week-desc">7 teknik prompting</div>
      </div>
      <div class="week-item">
        <div class="week-num" style="color:var(--purple)">3</div>
        <div class="week-title">Tools</div>
        <div class="week-desc">Fokus Cursor</div>
      </div>
      <div class="week-item">
        <div class="week-num" style="color:var(--green)">4</div>
        <div class="week-title">Workflow</div>
        <div class="week-desc">Workflow & quality</div>
      </div>
    </div>
  </div>`;
}

function renderTerm(c){
  const cols=COLORS[c.color]||COLORS.green;
  const extras=[];
  if(c.focus) extras.push({label:'Fokus',val:c.focus});
  if(c.action) extras.push({label:'Action Plan',val:c.action});
  return `<div class="slide term-slide" style="color:${cols.text}">
    <div class="term-header">
      <span class="term-num" style="color:${cols.text}">#${String(c.num).padStart(2,'0')}</span>
      <h2 class="term-title">${c.title}</h2>
      <span class="term-badge" style="background:${cols.badge};color:${cols.badgeText};border:1px solid ${cols.border}">${c.category}</span>
    </div>
    <div class="term-def" style="border-left-color:${cols.border};color:${cols.text}">${c.def}</div>
    <div class="term-grid">${extras.map(e=>`<div class="term-card" style="border-color:${cols.border}"><div class="term-card-label" style="color:${cols.text}">${e.label}</div><p>${e.val}</p></div>`).join('')}</div>
  </div>`;
}

function renderClosing(c){
  return `<div class="slide closing-slide">
    <h2>${c.title}</h2>
    <p class="message">${c.message}</p>
    <div class="closing-steps">${c.steps.map(s=>`<a href="index.html" class="closing-step" style="cursor:pointer"><div class="step-icon">${s.step}</div><div class="step-text"><strong>${s.title}</strong><span>${s.detail}</span></div></a>`).join('')}</div>
    <div class="closing-tagline"><a href="index.html" style="display:inline-block;margin-bottom:8px">← Back to Index</a><br>${c.tagline}</div>
  </div>`;
}

function renderSlide(slide){
  if(slide.type==='category-header') return renderCategoryHeader(slide.content);
  if(slide.type==='term') return renderTerm(slide.content);
  if(slide.type==='closing') return renderClosing(slide.content);
  return '<div class="slide"><p>Unknown slide type</p></div>';
}

let current=0;
let total=slides.length;
let isAnimating=false;

const container=document.getElementById('slideContainer');
const prevBtn=document.getElementById('prevBtn');
const nextBtn=document.getElementById('nextBtn');
const dotContainer=document.getElementById('dotContainer');
const slideLabel=document.getElementById('slideLabel');
const slideCounter=document.getElementById('slideCounter');
const totalSlides=document.getElementById('totalSlides');
const progressBar=document.getElementById('progressBar');

function buildDots(){
  dotContainer.innerHTML='';
  for(let i=0;i<total;i++){
    const dot=document.createElement('div');
    dot.className='dot'+(i===current?' active':'');
    dot.addEventListener('click',()=>goTo(i));
    dotContainer.appendChild(dot);
  }
}

function updateDots(){
  const dots=dotContainer.querySelectorAll('.dot');
  dots.forEach((d,i)=>d.className='dot'+(i===current?' active':''));
}

function updateNav(){
  prevBtn.disabled=current===0;
  nextBtn.disabled=current===total-1;
}

function updateCounter(){
  const c=String(current+1).padStart(2,'0');
  const t=String(total).padStart(2,'0');
  slideLabel.textContent=c+' / '+t;
  slideCounter.textContent=c;
  totalSlides.textContent=t;
}

function updateProgress(){
  progressBar.style.width=((current+1)/total*100)+'%';
}

function goTo(idx){
  if(isAnimating||idx===current||idx<0||idx>=total) return;
  isAnimating=true;
  const dir=idx>current?'right':'left';
  const slidesEls=container.querySelectorAll('.slide');
  slidesEls.forEach(el=>{
    if(el.classList.contains('active')){
      el.classList.remove('active');
      el.classList.add(dir==='right'?'exit-left':'exit-right');
      setTimeout(()=>{el.classList.remove('exit-left','exit-right');},500);
    }
  });
  current=idx;
  container.innerHTML='';
  container.innerHTML=renderSlide(slides[current]);
  const newSlide=container.querySelector('.slide');
  if(newSlide){
    requestAnimationFrame(()=>{
      newSlide.style.transition='none';
      newSlide.style.opacity='0';
      newSlide.style.transform=dir==='right'?'translateX(60px)scale(.97)':'translateX(-60px)scale(.97)';
      newSlide.offsetHeight;
      newSlide.style.transition='';
      newSlide.classList.add('active');
      newSlide.style.opacity='';
      newSlide.style.transform='';
    });
  }
  updateNav();
  updateCounter();
  updateProgress();
  updateDots();
  setTimeout(()=>{isAnimating=false;},550);
}

// Init
totalSlides.textContent=String(total).padStart(2,'0');
container.innerHTML=renderSlide(slides[0]);
requestAnimationFrame(()=>{
  const s=container.querySelector('.slide');
  if(s){s.classList.add('active');}
});
buildDots();
updateNav();
updateCounter();
updateProgress();
createParticles();

// Navigation
prevBtn.addEventListener('click',()=>goTo(current-1));
nextBtn.addEventListener('click',()=>goTo(current+1));

document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();goTo(current+1);}
  if(e.key==='ArrowLeft'){e.preventDefault();goTo(current-1);}
  if(e.key==='Home'){e.preventDefault();goTo(0);}
  if(e.key==='End'){e.preventDefault();goTo(total-1);}
});

// Touch swipe
let touchStartX=0,touchStartY=0;
container.addEventListener('touchstart',e=>{
  touchStartX=e.changedTouches[0].screenX;
  touchStartY=e.changedTouches[0].screenY;
},{passive:true});
container.addEventListener('touchend',e=>{
  const dx=e.changedTouches[0].screenX-touchStartX;
  const dy=e.changedTouches[0].screenY-touchStartY;
  if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>50){
    if(dx<0) goTo(current+1);
    else goTo(current-1);
  }
},{passive:true});
