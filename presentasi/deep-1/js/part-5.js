// ── COLORS ──
const COLORS = {
  green:  { border: 'var(--green)', text: 'var(--green)', bg: 'rgba(57,255,20,0.05)', badge: 'rgba(57,255,20,0.1)' },
  cyan:   { border: 'var(--cyan)', text: 'var(--cyan)', bg: 'rgba(0,229,255,0.05)', badge: 'rgba(0,229,255,0.1)' },
  purple: { border: 'var(--purple)', text: 'var(--purple)', bg: 'rgba(176,38,255,0.05)', badge: 'rgba(176,38,255,0.1)' },
};
function clr(name) { return COLORS[name] || COLORS.green; }

// ── SLIDE DATA (exact from index_bak.html) ──
const slides = [
  { type: 'category-header', content: { num: '05', name: 'Quality & Best Practices', count: '4 istilah', desc: 'Menjaga kualitas dalam vibe coding — AI powerful, tapi tanpa quality control outputnya bisa problematic.', color: 'cyan' } },
  { type: 'term', content: { num: 27, title: 'Code Review (AI-assisted)', category: 'Quality', color: 'cyan',
    def: 'Proses menggunakan AI untuk review code dan mendapatkan feedback tentang quality, potential bugs, improvements, security issues, dan adherence to best practices.',
    analogy: 'Seperti punya senior reviewer yang selalu available untuk second opinion. Fresh eyes, tidak bias, bisa catch things yang kamu miss.',
    aspects: 'Bugs & Errors · Security Review · Performance Review · Best Practices · Readability & Maintainability',
    tips: 'Specify review criteria — focused review better. Ask for severity ranking. Gunakan sebelum merging. Learn from reviews.'
  }},
  { type: 'term', content: { num: 28, title: 'Hallucination (Code Context)', category: 'Quality', color: 'cyan',
    def: 'Ketika AI generate code yang terlihat correct tapi sebenarnya menggunakan APIs, methods, libraries, atau syntax yang tidak exist atau incorrect.',
    analogy: 'Seperti orang yang sangat confident menjawab padahal mengarang. AI tidak bilang "saya tidak tahu" — dia generate something yang looks plausible tapi fabricated.',
    examples: 'Non-existent methods · Wrong package imports · Invented libraries · Deprecated APIs · Wrong syntax for version',
    tips: 'Always verify unfamiliar APIs. Test generated code. Check package existence. Gunakan TypeScript yang catches many hallucinations at compile time.'
  }},
  { type: 'term', content: { num: 29, title: 'Grounding', category: 'Quality', color: 'cyan',
    def: 'Teknik untuk "anchor" AI responses ke factual information, existing code, atau documentation — reducing hallucination dan memastikan responses based on reality.',
    analogy: 'Seperti memastikan seseorang bicara berdasarkan dokumen yang ada, bukan mengarang. "Jawab berdasarkan manual ini" vs "Jawab berdasarkan apa yang kamu tahu".',
    techniques: 'Code Context Grounding · Documentation Grounding · Type Grounding · Example Grounding · Constraint Grounding',
    tips: 'Always provide relevant context. Reference documentation explicitly. Gunakan types sebagai guardrails. Provide working examples.'
  }},
  { type: 'term', content: { num: 30, title: 'Human-in-the-Loop', category: 'Quality', color: 'cyan',
    def: 'Paradigma di mana human tetap terlibat dalam oversight, review, approval, dan decision-making meskipun AI melakukan heavy lifting. AI assist, human approve.',
    analogy: 'Seperti self-driving car dengan human driver tetap di belakang kemudi. Car bisa drive, tapi human tetap watch, takeover anytime, responsible for outcomes.',
    tips: 'Set explicit checkpoints. Always review before merge. Jangan biarkan AI decide critical things alone. Maintain understanding of the code.',
    mistakes: 'Full autopilot mode → lost control. Approving without reading → rubber stamping. No checkpoints for complex tasks.'
  }},
  { type: 'closing', content: {
    title: 'Selesai! 🎉<br><span style="color:var(--green)">30 Istilah</span> <span style="color:var(--text-dim)">Vibe Coding</span>',
    message: 'Kamu sudah menguasai seluruh 30 istilah! Sekarang kamu paham bahasa vibe coding.',
    steps: [
      { step: '01', title: 'Master Fundamentals', detail: 'Vibe coding, AI code editor, Tokens & Context', color: 'green' },
      { step: '02', title: 'Learn Prompting', detail: 'Engineering, few-shot, chain-of-thought & more', color: 'cyan' },
      { step: '03', title: 'Pick Your Tools', detail: 'Cursor, Copilot, v0, Windsurf & Bolt.new', color: 'purple' },
      { step: '04', title: 'Develop Workflow', detail: 'Scaffolding, refactoring, inline & chat coding', color: 'green' },
      { step: '05', title: 'Focus Quality', detail: 'Reviews, hallucination, grounding, human-in-the-loop', color: 'cyan' },
    ],
    tagline: '<a href="part-6.html">Lanjut ke Learning Journey →</a>'
  }}
];

// ── PARTICLES ──
function createParticles() {
  const p = document.getElementById('particles');
  if (!p) return;
  for (let i = 0; i < 35; i++) {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.left = Math.random() * 100 + '%';
    el.style.top = Math.random() * 100 + '%';
    el.style.animation = `float ${8 + Math.random() * 12}s ${Math.random() * 10}s infinite`;
    const size = 1 + Math.random() * 2;
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.background = ['var(--green)', 'var(--cyan)', 'var(--purple)'][Math.floor(Math.random() * 3)];
    p.appendChild(el);
  }
}

// ── RENDERERS ──
function renderCategoryHeader(s) {
  const c = s.content;
  const co = clr(c.color);
  return `
  <div class="slide-enter" style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative">
    <div class="corner-accent corner-tl" style="border-color:color-mix(in srgb, ${co.border} 12%, transparent)"></div>
    <div class="corner-accent corner-br" style="border-color:color-mix(in srgb, ${co.border} 12%, transparent)"></div>
    <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:999px;margin-bottom:32px;background:color-mix(in srgb, ${co.border} 6%, transparent);border:1px solid color-mix(in srgb, ${co.border} 12%, transparent)">
      <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;color:${co.border}">Kategori ${c.num}</span>
    </div>
    <h2 style="font-size:clamp(1.75rem,5vw,3.5rem);font-weight:900;margin-bottom:16px;line-height:1.2">
      <span style="color:${co.border}">${c.num}.</span> ${c.name}
    </h2>
    <p style="color:var(--text-dim);font-size:clamp(0.8rem,1.8vw,1.05rem);max-width:520px;text-align:center;margin-bottom:32px">${c.desc}</p>
    <div style="display:inline-flex;align-items:center;gap:12px;padding:12px 20px;border-radius:12px;background:color-mix(in srgb, ${co.border} 6%, transparent);border:1px solid color-mix(in srgb, ${co.border} 9%, transparent)">
      <span style="font-size:clamp(1.2rem,3vw,1.75rem);font-weight:900;font-family:'JetBrains Mono',monospace;color:${co.border}">${c.count}</span>
      <span style="color:var(--text-dim);font-size:clamp(0.7rem,1.4vw,0.85rem)">istilah dalam kategori ini</span>
    </div>
    <div style="margin-top:40px;display:flex;align-items:center;gap:8px;color:var(--text-dim);font-size:10px">
      <span style="animation:blink 1.5s infinite;color:${co.border}">▼</span>
      <span>Next untuk mulai</span>
    </div>
  </div>`;
}

function renderTerm(s) {
  const c = s.content;
  const co = clr(c.color);
  const extras = [];
  if (c.analogy) extras.push({ label: '💡 Analogi', text: c.analogy });
  if (c.tips) extras.push({ label: '⚡ Tips & Tricks', text: c.tips });
  if (c.mistakes) extras.push({ label: '⚠️ Common Mistakes', text: c.mistakes });
  if (c.techniques) extras.push({ label: '🔧 Techniques', text: c.techniques });
  if (c.aspects) extras.push({ label: '🔍 Aspects', text: c.aspects });
  if (c.examples) extras.push({ label: '📋 Examples', text: c.examples });

  function extraCard(sec) {
    return `<div style="border-radius:12px;padding:16px;border:1px solid color-mix(in srgb, ${co.border} 6%, transparent);background:${co.bg}">
      <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;display:block;margin-bottom:8px;color:${co.border}">${sec.label}</span>
      <p style="color:var(--text-dim);font-size:clamp(0.75rem,1.5vw,0.9rem);line-height:1.6">${sec.text}</p>
    </div>`;
  }

  const grid = extras.slice(0, 2);
  const rest = extras.slice(2);

  return `
  <div class="slide-enter scroll-content" style="height:100%;max-width:1000px;margin:0 auto;width:100%;padding:8px 0">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
      <span class="num-badge" style="background:${co.badge};color:${co.text};border:1px solid color-mix(in srgb, ${co.border} 19%, transparent)">${String(c.num).padStart(2,'0')}</span>
      <span style="color:var(--text-dim);font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;text-transform:uppercase">${c.category}</span>
      <span style="color:rgba(142,154,166,0.3);font-size:10px">|</span>
      <span style="color:var(--text-dim);font-size:10px;font-family:'JetBrains Mono',monospace">${c.title}</span>
    </div>
    <h3 style="font-size:clamp(1.25rem,3vw,2.25rem);font-weight:900;margin-bottom:20px;line-height:1.2">${c.title}</h3>
    <div style="border-radius:12px;padding:20px;border:1px solid color-mix(in srgb, ${co.border} 9%, transparent);background:${co.bg};margin-bottom:16px">
      <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;display:block;margin-bottom:8px;color:${co.border}">📖 Definisi</span>
      <p style="color:var(--text-dim);font-size:clamp(0.8rem,1.6vw,0.95rem);line-height:1.7">${c.def}</p>
    </div>
    ${grid.length ? `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-bottom:${rest.length ? '12px' : '0'}">
      ${grid.map(extraCard).join('')}
    </div>` : ''}
    ${rest.map(sec => `<div style="margin-top:12px;border-radius:12px;padding:16px;border:1px solid color-mix(in srgb, ${co.border} 6%, transparent);background:${co.bg}">
      <span style="font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;display:block;margin-bottom:8px;color:${co.border}">${sec.label}</span>
      <p style="color:var(--text-dim);font-size:clamp(0.75rem,1.5vw,0.9rem);line-height:1.6">${sec.text}</p>
    </div>`).join('')}
  </div>`;
}

function renderClosing(s) {
  const c = s.content;
  return `
  <div class="slide-enter scroll-content" style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;max-width:900px;margin:0 auto;padding:16px 0">
    <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:999px;border:1px solid rgba(57,255,20,0.2);background:rgba(57,255,20,0.05);margin-bottom:32px">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--green);animation:blink 1.5s infinite"></span>
      <span style="color:var(--green);font-size:10px;font-family:'JetBrains Mono',monospace;letter-spacing:2px">Complete</span>
    </div>
    <h2 style="font-size:clamp(1.5rem,4vw,3rem);font-weight:900;margin-bottom:16px;line-height:1.2">${c.title}</h2>
    <p style="color:var(--text-dim);font-size:clamp(0.85rem,1.8vw,1.05rem);margin-bottom:32px">${c.message}</p>
    <div style="width:100%;max-width:600px;display:flex;flex-direction:column;gap:10px;margin-bottom:24px">
      ${c.steps.map((st, i) => {
        const sCo = clr(st.color);
        return `
        <div style="display:flex;align-items:center;gap:16px;padding:14px 16px;border-radius:12px;border:1px solid var(--surface-border);background:var(--surface);transition:all 0.3s cubic-bezier(0.16,1,0.3,1);text-align:left"
             onmouseover="this.style.transform='translateY(-2px)';this.style.borderColor='color-mix(in srgb, ${sCo.border} 20%, transparent)'" onmouseout="this.style.transform='';this.style.borderColor='var(--surface-border)'">
          <span style="width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;font-family:'JetBrains Mono',monospace;flex-shrink:0;background:${sCo.badge};color:${sCo.text}">${st.step}</span>
          <div style="flex:1">
            <h4 style="color:#fff;font-weight:600;font-size:clamp(0.8rem,1.6vw,0.95rem)">${st.title}</h4>
            <p style="color:var(--text-dim);font-size:clamp(0.7rem,1.3vw,0.8rem)">${st.detail}</p>
          </div>
          ${i < 4 ? '<span style="color:rgba(142,154,166,0.3);margin-left:auto">→</span>' : ''}
        </div>`;
      }).join('')}
    </div>
    <div style="font-size:clamp(1.25rem,3vw,2rem);font-weight:900;margin-bottom:32px;text-shadow:0 0 20px rgba(57,255,20,0.3)">${c.tagline}</div>
    <a href="index.html" class="btn-glow" style="background:linear-gradient(135deg,var(--cyan),var(--purple));color:#fff;box-shadow:0 0 20px rgba(0,229,255,0.3)"
       onmouseover="this.style.boxShadow='0 0 40px rgba(0,229,255,0.5)'" onmouseout="this.style.boxShadow='0 0 20px rgba(0,229,255,0.3)'">
      ← Kembali ke Index
    </a>
  </div>`;
}

function renderSlide(slide, index) {
  switch (slide.type) {
    case 'category-header': return renderCategoryHeader(slide);
    case 'term': return renderTerm(slide);
    case 'closing': return renderClosing(slide);
    default: return '<div style="color:var(--text-dim);text-align:center;padding:40px">Unknown slide type</div>';
  }
}

// ── NAVIGATION ──
let currentSlide = 0;

function goTo(index) {
  if (index < 0 || index >= slides.length) return;
  currentSlide = index;
  renderCurrent();
  updateNav();
  updateProgress();
  updateCounter();
  updateDots();
}

function updateNav() {
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  if (prev) prev.disabled = currentSlide === 0;
  if (next) next.disabled = currentSlide === slides.length - 1;
}

function updateProgress() {
  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = ((currentSlide + 1) / slides.length * 100) + '%';
}

function updateCounter() {
  const sc = document.getElementById('slideCounter');
  const ts = document.getElementById('totalSlides');
  const sl = document.getElementById('slideLabel');
  if (sc) sc.textContent = String(currentSlide + 1).padStart(2, '0');
  if (ts) ts.textContent = String(slides.length).padStart(2, '0');
  if (sl) sl.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
}

function updateDots() {
  document.querySelectorAll('#dotContainer button').forEach((dot, i) => {
    dot.className = `dot ${i === currentSlide ? 'dot-active' : 'dot-inactive'}`;
  });
}

function buildDots() {
  const dc = document.getElementById('dotContainer');
  if (!dc) return;
  dc.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot dot-inactive';
    dot.dataset.index = i;
    dot.onclick = () => goTo(i);
    dc.appendChild(dot);
  });
}

function renderCurrent() {
  const container = document.getElementById('slideContainer');
  if (!container) return;
  container.innerHTML = renderSlide(slides[currentSlide], currentSlide);
  const firstChild = container.firstElementChild;
  if (firstChild) {
    firstChild.style.animation = 'none';
    requestAnimationFrame(() => {
      firstChild.style.animation = 'slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    });
  }
  container.scrollTop = 0;
}

// ── INIT ──
function initPresentation() {
  currentSlide = 0;
  buildDots();
  renderCurrent();
  updateNav();
  updateProgress();
  updateCounter();
  updateDots();

  document.getElementById('prevBtn').onclick = () => goTo(currentSlide - 1);
  document.getElementById('nextBtn').onclick = () => goTo(currentSlide + 1);

  document.addEventListener('keydown', (e) => {
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

  let touchStartX = 0;
  const container = document.getElementById('slideContainer');
  container.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  container.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < slides.length - 1) goTo(currentSlide + 1);
      else if (diff < 0 && currentSlide > 0) goTo(currentSlide - 1);
    }
  }, { passive: true });
}

createParticles();
initPresentation();
