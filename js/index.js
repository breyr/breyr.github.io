const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');

btn.addEventListener('click', navToggle);
m1.addEventListener('click', navToggle);
m2.addEventListener('click', navToggle);
m3.addEventListener('click', navToggle);

// toggle navigation when width of screen is at least 961px and navigation is open when resizing window
window.addEventListener('resize', () => {
  let width = window.innerWidth;
  if(btn.classList.contains('open') && width > 1270) {
    navToggle();
  }
});

function navToggle() {
  btn.classList.toggle('open');
  document.body.classList.toggle('stop-scrolling');
  overlay.classList.toggle('overlay-show');
  menu.classList.toggle('show-menu');
}

// fade in animation on scrolling for project divs
const items = document.querySelectorAll('.appear2');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview2'); 
        }else{
            entry.target.classList.remove('inview2'); 
        }
    });
}

const io2 = new IntersectionObserver(active);
for(let i=0; i < items.length; i++) {
  io2.observe(items[i]);
}

