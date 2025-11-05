// theme toggle (save pref)
const themeBtn = document.getElementById('theme-toggle');
const rootBody = document.body;
const saved = localStorage.getItem('theme');
if (saved === 'light') { rootBody.classList.add('light'); themeBtn.textContent = '🌞'; }
else { themeBtn.textContent = '🌙'; }

themeBtn.addEventListener('click', () => {
  rootBody.classList.toggle('light');
  const isLight = rootBody.classList.contains('light');
  themeBtn.textContent = isLight ? '🌞' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
menuToggle?.addEventListener('click', () => navList.classList.toggle('show'));

// typing animation
const typingEl = document.querySelector('.typing');
const roles = ['Web Developer', 'UI/UX Designer', 'Problem Solver'];
let rIndex = 0, ch = 0, deleting = false;

function typeLoop() {
  const current = roles[rIndex];
  if (!deleting) {
    ch++;
    typingEl.textContent = current.slice(0, ch);
    if (ch === current.length) { deleting = true; setTimeout(typeLoop, 900); return; }
  } else {
    ch--;
    typingEl.textContent = current.slice(0, ch);
    if (ch === 0) { deleting = false; rIndex = (rIndex + 1) % roles.length; }
  }
  setTimeout(typeLoop, deleting ? 80 : 140);
}
if (typingEl) typeLoop();

// simple reveal on scroll
const sections = document.querySelectorAll('section');
sections.forEach(s => {
  s.style.opacity = 0;
  s.style.transform = 'translateY(30px)';
  s.style.transition = 'opacity .7s ease, transform .7s ease';
});
function reveal() {
  sections.forEach(s => {
    const rect = s.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      s.style.opacity = 1;
      s.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', reveal);
reveal();



