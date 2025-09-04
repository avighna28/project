// Basic interactivity: scroll reveal, eq animation toggle when audio plays, explore button pulse effect stop/start
document.addEventListener('DOMContentLoaded', function(){
  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  function reveal(){
    for(const r of reveals){
      const top = r.getBoundingClientRect().top;
      if(top < window.innerHeight - 60) r.classList.add('show');
    }
  }
  reveal();
  window.addEventListener('scroll', reveal);

  // audio eq animation toggle
  const audio = document.getElementById('narration');
  const eq = document.getElementById('eq');
  audio.addEventListener('play', ()=> eq.style.opacity = '1');
  audio.addEventListener('pause', ()=> eq.style.opacity = '0.35');

  // explore button scroll
  document.getElementById('explore').addEventListener('click', ()=>{
    alert('Explore feature: map / hidden items can be added here. For demo it just shows this message.');
  });

  // VR / 3D buttons demo bounce
  document.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('mouseenter', ()=> b.style.transform = 'translateY(-6px) scale(1.02)');
    b.addEventListener('mouseleave', ()=> b.style.transform = '');
  });
});

// hamburger toggle
document.getElementById('menuToggle').addEventListener('click', function() {
  document.getElementById('mainNav').classList.toggle('active');
});
