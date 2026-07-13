(function(){
  var root=document.documentElement;
  function getSaved(){try{return localStorage.getItem('theme');}catch(e){return null;}}
  function apply(theme){
    if(theme==='light') root.setAttribute('data-theme','light');
    else root.removeAttribute('data-theme');
  }
  // Apply immediately (before paint) to avoid flash
  apply(getSaved()||'dark');

  function icon(){return root.getAttribute('data-theme')==='light'?'🌙':'☀️';}

  function build(){
    var btn=document.createElement('button');
    btn.className='theme-toggle';
    btn.type='button';
    btn.setAttribute('aria-label','Toggle light/dark theme');
    btn.textContent=icon();
    btn.addEventListener('click',function(){
      var next=root.getAttribute('data-theme')==='light'?'dark':'light';
      apply(next);
      try{localStorage.setItem('theme',next);}catch(e){}
      btn.textContent=icon();
    });
    document.body.appendChild(btn);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build);
  else build();
})();
