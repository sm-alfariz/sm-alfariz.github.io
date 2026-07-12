const COLORS = {
  cyan:  { border:'var(--cyan)', text:'var(--cyan)', bg:'rgba(0,229,255,.08)', badge:'rgba(0,229,255,.15)', badgeText:'var(--cyan)' },
  green: { border:'var(--green)', text:'var(--green)', bg:'rgba(57,255,20,.08)', badge:'rgba(57,255,20,.15)', badgeText:'var(--green)' },
  purple:{ border:'var(--purple)', text:'var(--purple)', bg:'rgba(176,38,255,.08)', badge:'rgba(176,38,255,.15)', badgeText:'var(--purple)' }
};

const slides = [
  { type:'category-header', content:{ num:'02', name:'Prompting & Communication', count:'7 istilah', desc:'Cara berkomunikasi dengan AI untuk mendapatkan hasil terbaik — skill yang membedakan beginner dari advanced vibe coder.', color:'cyan' } },
  { type:'term', content:{ num:9, title:'Prompt Engineering', category:'Prompting', color:'cyan',
    def:'Skill dan practice dalam merancang prompts yang efektif untuk mendapatkan hasil optimal dari AI. Core skill yang membedakan beginner dari advanced vibe coder.',
    analogy:'Seperti belajar "bahasa" untuk komunikasi dengan orang dari budaya berbeda. Ada cara tertentu menyampaikan maksud agar dipahami dengan tepat.',
    techniques:'Be Specific · Provide Context · Specify Output Format · Use Role/Persona · Include Examples · Set Constraints',
    tips:'Build personal prompt library untuk common tasks. Iterate dan refine berdasarkan results. Different tasks need different prompt styles.'
  }},
  { type:'term', content:{ num:10, title:'System Prompt', category:'Prompting', color:'cyan',
    def:'Instruksi permanen yang mengatur behavior, personality, knowledge boundaries, dan rules AI sepanjang conversation. Set the "operating mode" untuk keseluruhan session.',
    analogy:'Seperti employee handbook dan job description untuk karyawan baru. Sebelum mulai kerja, kamu jelaskan role, standard, tools, dan guidelines yang harus diikuti.',
    tips:'Set system prompt di awal setiap project. Save untuk reuse. Include tech stack ALWAYS. Be specific tentang response style preferences.',
    mistakes:'Skip system prompt → inconsistent outputs. Too generic → tidak membantu. Not updating for different projects → wrong context.'
  }},
  { type:'term', content:{ num:11, title:'Instruction Prompt', category:'Prompting', color:'cyan',
    def:'Prompt spesifik yang memberikan task atau perintah tertentu kepada AI per-request. Bekerja di dalam framework yang sudah di-set oleh system prompt.',
    analogy:'Kalau system prompt adalah job description, instruction prompt adalah task assignment harian. "Kerjakan laporan Q3" = instruction. "Kamu adalah financial analyst" = system.',
    tips:'One clear instruction per prompt. Include input/output specs untuk clarity. Keep instruction focused — big tasks should be broken down.'
  }},
  { type:'term', content:{ num:12, title:'Few-shot Prompting', category:'Prompting', color:'cyan',
    def:'Teknik prompting di mana kamu memberikan beberapa contoh (2-5) sebelum actual task untuk "mengajarkan" pattern, format, atau style yang diinginkan ke AI.',
    analogy:'Seperti training karyawan baru dengan menunjukkan contoh pekerjaan. "Lihat bagaimana kita format report-nya. Sekarang buatkan serupa untuk data ini."',
    tips:'2-3 examples biasanya cukup. Make examples clear, consistent, dan representative. Place examples BEFORE actual task. Quality > quantity.',
    mistakes:'Inconsistent examples → AI gets confused. Too many examples → diminishing returns. Examples don\'t match task complexity → wrong expectations.'
  }},
  { type:'term', content:{ num:13, title:'Chain-of-Thought (CoT)', category:'Prompting', color:'cyan',
    def:'Teknik yang meminta AI untuk menjelaskan reasoning step-by-step sebelum memberikan final answer. Membantu untuk complex logic, debugging, dan architectural decisions.',
    analogy:'Seperti meminta siswa menunjukkan "cara penyelesaian" di ujian matematika, bukan hanya jawaban akhir. Step-by-step reasoning membuat thinking process visible.',
    tips:'Gunakan untuk complex problems, bukan simple tasks. "Think step by step" adalah magic phrase. Read dan verify the reasoning.',
    mistakes:'Using CoT untuk very simple tasks → overkill. Not reading the reasoning → miss insights. Skipping CoT untuk complex tasks → suboptimal.'
  }},
  { type:'term', content:{ num:14, title:'Iterative Prompting', category:'Prompting', color:'cyan',
    def:'Pendekatan di mana kamu build output secara incremental melalui multiple rounds of prompts. Setiap round refine, extend, atau improve pada previous output.',
    analogy:'Seperti sculptor yang membentuk patung secara bertahap. Mulai dari rough shape, refine outlines, add details, polish surface.',
    tips:'Plan iterations sebelum starting. Verify EACH iteration works before moving on. Small iterations = easier debugging. Keep context across iterations.',
    mistakes:'Trying to do everything in one prompt → overwhelming. Not verifying each iteration → compound errors. Moving on too fast → bugs in foundation.'
  }},
  { type:'term', content:{ num:15, title:'Context Injection', category:'Prompting', color:'cyan',
    def:'Teknik menyertakan relevant code, files, documentation, atau information ke dalam prompt agar AI memiliki context yang cukup untuk response yang accurate dan consistent.',
    analogy:'Seperti memberikan brief lengkap ke designer: brand guidelines, color palette, existing assets, target audience. More context = better output.',
    tips:'Use @mentions di Cursor untuk automatic file inclusion. Include only RELEVANT context. Create "context snapshots" untuk frequently used contexts.',
    mistakes:'No context injection → AI makes assumptions. Too much irrelevant → dilutes focus. Outdated context → wrong assumptions. Forgetting types → type errors.'
  }},
  { type:'closing', content:{
    title:'Selesai! Part 2 — <span style="color:var(--cyan)">Prompting</span>',
    message:'Kamu sudah menguasai 7 istilah tentang prompting & communication.',
    steps:[
      { step:'→', title:'Lanjut ke Part 3', detail:'Tools & Environment — 6 istilah tentang alat-alat vibe coding' }
    ],
    closing:'Next: Tools & Environment — buka part-3.html',
    tagline:'<a href="part-3.html">Lanjut ke Part 3 →</a>'
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
  const cols=COLORS[c.color]||COLORS.cyan;
  return `<div class="slide category-header" style="color:${cols.text}">
    <div class="num"><span class="num-glow">${c.num}</span></div>
    <h1 class="glitch" data-text="${c.name}">${c.name}</h1>
    <div class="count">● ${c.count} ●</div>
    <p>${c.desc}</p>
  </div>`;
}

function renderTerm(c){
  const cols=COLORS[c.color]||COLORS.cyan;
  const extras=[];
  if(c.analogy) extras.push({label:'Analogy',val:c.analogy});
  if(c.tips) extras.push({label:'Tips',val:c.tips});
  if(c.mistakes) extras.push({label:'Common Mistakes',val:c.mistakes});
  if(c.techniques) extras.push({label:'Techniques',val:'<div class="technique-tags">'+c.techniques.split('·').map(t=>'<span class="technique-tag">'+t.trim()+'</span>').join('')+'</div>'});
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
    <div class="closing-steps">${c.steps.map(s=>`<a href="part-3.html" class="closing-step" style="cursor:pointer"><div class="step-icon">${s.step}</div><div class="step-text"><strong>${s.title}</strong><span>${s.detail}</span></div></a>`).join('')}</div>
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
