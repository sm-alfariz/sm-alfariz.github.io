(function(){
const COLORS = {
  green:  { border: 'var(--green)', text: 'var(--green)', bg: 'rgba(57,255,20,0.05)', badge: 'rgba(57,255,20,0.1)' },
  cyan:   { border: 'var(--cyan)', text: 'var(--cyan)', bg: 'rgba(0,229,255,0.05)', badge: 'rgba(0,229,255,0.1)' },
  purple: { border: 'var(--purple)', text: 'var(--purple)', bg: 'rgba(176,38,255,0.05)', badge: 'rgba(176,38,255,0.1)' },
};

const CL = COLORS.green;

const slides = [
  { type: 'category-header', content: { num: '04', name: 'Workflow & Techniques', count: '5 istilah', desc: 'Cara kerja dan teknik dalam vibe coding — bukan just tools, tapi how to use them effectively dalam daily workflow.', color: 'green' } },
  { type: 'term', content: { num: 22, title: 'Scaffolding', category: 'Workflow', color: 'green',
    def: 'Proses di mana AI generate basic structure, boilerplate, atau template code sebagai starting point — fokus pada creating foundation dan skeleton, bukan complete implementation.',
    analogy: 'Seperti kerangka bangunan sebelum diisi. Tukang membangun frame dulu — struktur, rangka, posisi ruangan — sebelum mengisi dengan dinding dan finishing.',
    tips: 'Great untuk starting new features — consistent structure. Define your standard scaffold template. Gunakan TODO comments untuk mark where implementation goes.',
    mistakes: 'Expecting complete implementation → scaffolding is skeleton only. Over-scaffolding → sometimes simple features don\'t need it.'
  }},
  { type: 'term', content: { num: 23, title: 'Code Refactoring (AI-assisted)', category: 'Workflow', color: 'green',
    def: 'Proses restructuring existing code dengan bantuan AI untuk improve readability, performance, maintainability — tanpa mengubah external behavior.',
    analogy: 'Seperti renovasi rumah dengan kontraktor AI. Fungsi rumah tetap sama, tapi structure dan appearance improved.',
    types: 'Readability · Performance · Pattern · Modernization · DRY (Don\'t Repeat Yourself)',
    tips: 'Specify refactoring goals clearly — "more readable" is vague. Ask AI to explain changes — understand the why. Test before and after.'
  }},
  { type: 'term', content: { num: 24, title: 'Inline Completion', category: 'Workflow', color: 'green',
    def: 'AI feature yang memberikan real-time code suggestions saat kamu mengetik, muncul sebagai "ghost text" yang bisa di-accept dengan Tab atau di-dismiss.',
    analogy: 'Seperti predictive text di smartphone, tapi untuk code dan jauh lebih intelligent. AI memprediksi dan menyarankan kelanjutan kode berdasarkan context.',
    tips: 'Write descriptive comments — guides completion direction. Tab to accept, Esc to dismiss. Open related files — more context = better suggestions.',
    mistakes: 'Accepting without reading → introducing bugs. Fighting AI instead of guiding → frustrating. No context = poor suggestions.'
  }},
  { type: 'term', content: { num: 25, title: 'Chat-based Coding', category: 'Workflow', color: 'green',
    def: 'Paradigma vibe coding di mana interaksi dengan AI dilakukan melalui conversational chat interface — mirip messaging dengan colleague atau mentor.',
    analogy: 'Seperti Slack conversation dengan senior developer yang selalu available dan super knowledgeable. Tanya apa saja, diskusi approach, rubber duck debugging.',
    tips: 'Conversational tone works well. Ask follow-up questions — dig deeper. Let AI ask clarifying questions. Build incrementally through conversation.',
    mistakes: 'Monologue instead of dialogue → miss AI\'s insights. Not engaging with AI\'s questions → suboptimal.'
  }},
  { type: 'term', content: { num: 26, title: 'Agentic Coding', category: 'Workflow', color: 'green',
    def: 'Pendekatan di mana AI beroperasi lebih autonomously — bisa plan, execute multi-step tasks, read/write files, run commands, make decisions, dan iterate dengan minimal human intervention.',
    analogy: 'Perbedaan assistant vs agent seperti giving turn-by-turn directions vs giving destination. Assistant: "Belok kiri..." Agent: "Pergi ke kantor pos" — agent figures out the route.',
    tips: 'Clear goal dan constraints — guide without micromanaging. Let AI plan before execute. Review hasil, bukan setiap step. Set boundaries — what it can and cannot modify.',
    mistakes: 'Micromanaging agent → defeats the purpose. Vague goals tanpa constraints → unexpected changes. Not reviewing final output → miss issues.'
  }},
  { type: 'closing', content: {
    title: 'Selesai! Part 4 — <span style="color:var(--green)">Workflow</span>',
    message: 'Kamu sudah menguasai 5 istilah tentang workflow & techniques.',
    steps: [
      { step: '→', title: 'Lanjut ke Part 5', detail: 'Quality & Best Practices — 4 istilah tentang menjaga kualitas output AI coding', link: 'part-5.html' },
      { step: '←', title: 'Kembali ke Index', detail: 'Lihat semua part yang tersedia', link: 'index.html' },
    ],
    closing: 'Next: Quality & Best Practices — buka part-5.html',
    tagline: '<a href="part-5.html" style="color:var(--green);text-decoration:none;text-shadow:0 0 20px rgba(57,255,20,0.3)">Lanjut ke Part 5 →</a>'
  }}
];

let currentSlide = 0;

function renderCategoryHeader(s) {
  const c = s.content;
  const clr = COLORS[c.color];
  return '<div class="slide-enter" style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative">' +
    '<div class="corner-accent corner-tl" style="border-color:' + clr.border + '20"></div>' +
    '<div class="corner-accent corner-br" style="border-color:' + clr.border + '20"></div>' +
    '<div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:999px;margin-bottom:32px;background:' + clr.border + '10;border:1px solid ' + clr.border + '20">' +
      '<span style="font-size:11px;font-family:\'JetBrains Mono\',monospace;letter-spacing:2px;color:' + clr.border + '">Kategori ' + c.num + '</span>' +
    '</div>' +
    '<h2 style="font-size:clamp(1.5rem,5vw,3.5rem);font-weight:900;margin-bottom:16px;line-height:1.2;text-align:center">' +
      '<span style="color:' + clr.border + '">' + c.num + '.</span> ' + c.name +
    '</h2>' +
    '<p style="color:var(--text-dim);font-size:clamp(0.8rem,2vw,1rem);max-width:500px;text-align:center;margin-bottom:32px">' + c.desc + '</p>' +
    '<div style="display:inline-flex;align-items:center;gap:12px;padding:12px 20px;border-radius:12px;background:' + clr.border + '10;border:1px solid ' + clr.border + '15">' +
      '<span style="font-size:clamp(1.2rem,3vw,1.5rem);font-weight:900;font-family:\'JetBrains Mono\',monospace;color:' + clr.border + '">' + c.count + '</span>' +
      '<span style="color:var(--text-dim);font-size:clamp(0.7rem,1.5vw,0.85rem)">istilah dalam kategori ini</span>' +
    '</div>' +
    '<div style="margin-top:40px;display:flex;align-items:center;gap:8px;color:var(--text-dim);font-size:12px">' +
      '<span style="animation:pulseGlow 2s ease-in-out infinite;color:' + clr.border + '">▼</span>' +
      '<span>Next untuk mulai</span>' +
    '</div>' +
  '</div>';
}

function renderTerm(s) {
  const c = s.content;
  const clr = COLORS[c.color];
  const extras = [];
  if (c.analogy) extras.push({ label: '💡 Analogi', text: c.analogy });
  if (c.tips) extras.push({ label: '⚡ Tips & Tricks', text: c.tips });
  if (c.mistakes) extras.push({ label: '⚠️ Common Mistakes', text: c.mistakes });
  if (c.types) extras.push({ label: '📋 Types', text: c.types });

  const numStr = String(c.num).padStart(2, '0');

  let extrasHtml = '';
  if (extras.length > 0) {
    extrasHtml += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px;width:100%;max-width:1000px">';
    extras.slice(0, 2).forEach(function(sec) {
      extrasHtml += '<div style="border-radius:12px;padding:14px;border:1px solid ' + clr.border + '10;background:' + clr.bg + '">' +
        '<span style="font-size:11px;font-family:\'JetBrains Mono\',monospace;letter-spacing:1px;display:block;margin-bottom:6px;color:' + clr.border + '">' + sec.label + '</span>' +
        '<p class="term-body" style="color:var(--text-dim);font-size:13px;line-height:1.7">' + sec.text + '</p>' +
      '</div>';
    });
    if (extras.length > 2) {
      extrasHtml += '<div style="border-radius:12px;padding:14px;border:1px solid ' + clr.border + '10;background:' + clr.bg + ';grid-column:1/-1">' +
        '<span style="font-size:11px;font-family:\'JetBrains Mono\',monospace;letter-spacing:1px;display:block;margin-bottom:6px;color:' + clr.border + '">' + extras[2].label + '</span>' +
        '<p class="term-body" style="color:var(--text-dim);font-size:13px;line-height:1.7">' + extras[2].text + '</p>' +
      '</div>';
    }
    extrasHtml += '</div>';
  }

  return '<div class="slide-enter" style="height:100%;display:flex;flex-direction:column;justify-content:center;max-width:1000px;margin:0 auto;width:100%;padding:8px 0;overflow-y:auto;">' +
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-shrink:0">' +
      '<span class="num-badge" style="background:' + clr.badge + ';color:' + clr.text + ';border:1px solid ' + clr.border + '30">' + numStr + '</span>' +
      '<span style="color:var(--text-dim);font-size:11px;font-family:\'JetBrains Mono\',monospace;letter-spacing:1px;text-transform:uppercase">' + c.category + '</span>' +
      '<span style="color:rgba(142,154,166,0.3);font-size:11px">|</span>' +
      '<span style="color:var(--text-dim);font-size:11px;font-family:\'JetBrains Mono\',monospace">' + c.title + '</span>' +
    '</div>' +
    '<h3 class="term-title" style="font-size:clamp(1.2rem,3vw,2rem);font-weight:900;margin-bottom:16px;line-height:1.3;flex-shrink:0">' + c.title + '</h3>' +
    '<div style="border-radius:12px;padding:14px 16px;border:1px solid ' + clr.border + '15;background:' + clr.bg + ';margin-bottom:12px;flex-shrink:0">' +
      '<span style="font-size:11px;font-family:\'JetBrains Mono\',monospace;letter-spacing:1px;display:block;margin-bottom:6px;color:' + clr.border + '">📖 Definisi</span>' +
      '<p class="term-body" style="color:var(--text-dim);font-size:clamp(0.75rem,1.8vw,0.9rem);line-height:1.7">' + c.def + '</p>' +
    '</div>' +
    extrasHtml +
  '</div>';
}

function renderClosing(s) {
  const c = s.content;
  return '<div class="slide-enter" style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;max-width:800px;margin:0 auto;position:relative">' +
    '<div class="corner-accent corner-tl" style="border-color:rgba(57,255,20,0.2)"></div>' +
    '<div class="corner-accent corner-tr" style="border-color:rgba(0,229,255,0.2)"></div>' +
    '<div class="corner-accent corner-bl" style="border-color:rgba(176,38,255,0.2)"></div>' +
    '<div class="corner-accent corner-br" style="border-color:rgba(57,255,20,0.2)"></div>' +
    '<div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:999px;border:1px solid rgba(57,255,20,0.2);background:rgba(57,255,20,0.05);margin-bottom:32px">' +
      '<span style="width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulseGlow 2s ease-in-out infinite"></span>' +
      '<span style="color:var(--green);font-size:11px;font-family:\'JetBrains Mono\',monospace;letter-spacing:2px">Closing</span>' +
    '</div>' +
    '<h2 style="font-size:clamp(1.5rem,4vw,3rem);font-weight:900;margin-bottom:16px;line-height:1.2">' + c.title + '</h2>' +
    '<p style="color:var(--text-dim);font-size:clamp(0.8rem,2vw,1rem);margin-bottom:32px">' + c.message + '</p>' +
    '<div style="width:100%;max-width:500px;display:flex;flex-direction:column;gap:10px;margin-bottom:32px">' +
      (function(){ var h = ''; c.steps.forEach(function(s, i){
        var colors = ['var(--green)','var(--cyan)'];
        var bgs = ['rgba(57,255,20,0.1)','rgba(0,229,255,0.1)'];
        h += '<a href="' + s.link + '" style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:12px;border:1px solid var(--surface-border);background:var(--surface);text-decoration:none;transition:all 0.3s;cursor:pointer" class="card-hover">' +
          '<span style="width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;font-family:\'JetBrains Mono\',monospace;background:' + bgs[i] + ';color:' + colors[i] + '">' + s.step + '</span>' +
          '<div style="text-align:left;flex:1">' +
            '<h4 style="color:#FFFFFF;font-weight:600;font-size:14px">' + s.title + '</h4>' +
            '<p style="color:var(--text-dim);font-size:12px">' + s.detail + '</p>' +
          '</div>' +
          '<span style="color:rgba(142,154,166,0.3)">→</span>' +
        '</a>';
      }); return h; })() +
    '</div>' +
    '<p style="color:var(--text-dim);font-size:clamp(0.7rem,1.5vw,0.85rem);max-width:400px;margin-bottom:20px">' + c.closing + '</p>' +
    '<div style="font-size:clamp(1.2rem,3vw,1.8rem);font-weight:900">' + c.tagline + '</div>' +
  '</div>';
}

function renderSlide(slide) {
  switch (slide.type) {
    case 'category-header': return renderCategoryHeader(slide);
    case 'term': return renderTerm(slide);
    case 'closing': return renderClosing(slide);
    default: return '<div>Unknown slide type</div>';
  }
}

function goTo(index) {
  if (index < 0 || index >= slides.length) return;
  currentSlide = index;
  renderCurrent();
  updateDots();
  updateNav();
  updateProgress();
  updateCounter();
}

function updateNav() {
  var prev = document.getElementById('prevBtn');
  var next = document.getElementById('nextBtn');
  if (prev) { prev.disabled = currentSlide === 0; prev.style.opacity = currentSlide === 0 ? '0.2' : ''; prev.style.cursor = currentSlide === 0 ? 'not-allowed' : 'pointer'; }
  if (next) { next.disabled = currentSlide === slides.length - 1; next.style.opacity = currentSlide === slides.length - 1 ? '0.2' : ''; next.style.cursor = currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer'; }
}

function updateProgress() {
  var bar = document.getElementById('progressBar');
  if (bar) bar.style.width = ((currentSlide + 1) / slides.length * 100) + '%';
}

function updateCounter() {
  var sc = document.getElementById('slideCounter');
  var ts = document.getElementById('totalSlides');
  var sl = document.getElementById('slideLabel');
  if (sc) sc.textContent = String(currentSlide + 1).padStart(2, '0');
  if (ts) ts.textContent = String(slides.length).padStart(2, '0');
  if (sl) sl.textContent = String(currentSlide + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
}

function updateDots() {
  var dots = document.querySelectorAll('#dotContainer button');
  dots.forEach(function(dot, i) {
    dot.className = i === currentSlide ? 'dot-active' : 'dot-inactive';
  });
}

function buildDots() {
  var dc = document.getElementById('dotContainer');
  if (!dc) return;
  dc.innerHTML = '';
  slides.forEach(function(_, i) {
    var dot = document.createElement('button');
    dot.className = 'dot-inactive';
    dot.dataset.index = i;
    dot.onclick = function() { goTo(i); };
    dc.appendChild(dot);
  });
}

function renderCurrent() {
  var container = document.getElementById('slideContainer');
  if (!container) return;
  container.innerHTML = renderSlide(slides[currentSlide]);
  var firstChild = container.firstElementChild;
  if (firstChild) {
    firstChild.style.animation = 'none';
    requestAnimationFrame(function() {
      firstChild.style.animation = 'slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    });
  }
}

function createParticles() {
  var p = document.getElementById('particles');
  if (!p) return;
  var colors = ['var(--green)', 'var(--cyan)', 'var(--purple)'];
  for (var i = 0; i < 35; i++) {
    var el = document.createElement('div');
    el.className = 'particle';
    el.style.left = Math.random() * 100 + '%';
    el.style.top = Math.random() * 100 + '%';
    var dur = 8 + Math.random() * 12;
    el.style.animation = 'float ' + dur + 's ' + (Math.random() * 10) + 's infinite linear';
    var s = 1 + Math.random() * 2;
    el.style.width = s + 'px';
    el.style.height = s + 'px';
    el.style.background = colors[Math.floor(Math.random() * 3)];
    el.style.boxShadow = '0 0 ' + (s * 2) + 'px ' + el.style.background;
    p.appendChild(el);
  }
}

function createOrbs() {
  var orbs = [
    { color: 'var(--green)', top: '10%', left: '5%', width: '300px', height: '300px', delay: '0s' },
    { color: 'var(--cyan)', top: '60%', left: '70%', width: '250px', height: '250px', delay: '-7s' },
    { color: 'var(--purple)', top: '30%', left: '80%', width: '200px', height: '200px', delay: '-14s' },
  ];
  orbs.forEach(function(o) {
    var el = document.createElement('div');
    el.className = 'orb';
    el.style.top = o.top;
    el.style.left = o.left;
    el.style.width = o.width;
    el.style.height = o.height;
    el.style.background = 'radial-gradient(circle, ' + o.color + ', transparent 70%)';
    el.style.animationDelay = o.delay;
    el.style.animationDuration = '20s';
    document.body.appendChild(el);
  });
}

createOrbs();
createParticles();
buildDots();
renderCurrent();
updateNav();
updateProgress();
updateCounter();
updateDots();

document.getElementById('prevBtn').onclick = function() { goTo(currentSlide - 1); };
document.getElementById('nextBtn').onclick = function() { goTo(currentSlide + 1); };

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    if (currentSlide < slides.length - 1) goTo(currentSlide + 1);
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (currentSlide > 0) goTo(currentSlide - 1);
  }
  if (e.key === 'Home') { e.preventDefault(); goTo(0); }
  if (e.key === 'End') { e.preventDefault(); goTo(slides.length - 1); }
});

var touchStartX = 0;
var container = document.getElementById('slideContainer');
if (container) {
  container.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  container.addEventListener('touchend', function(e) {
    var diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < slides.length - 1) goTo(currentSlide + 1);
      else if (diff < 0 && currentSlide > 0) goTo(currentSlide - 1);
    }
  }, { passive: true });
}

})();
