let yearHolder = document.getElementById('year');
window.onload = function () {
  window.location.replace('https://breyr.dev');
  yearHolder.innerHTML = new Date().getFullYear();
};

// fade in animation on scrolling for project divs
const items = document.querySelectorAll('.appear2');

const active = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview2');
    } else {
      entry.target.classList.remove('inview2');
    }
  });
};

const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
  io2.observe(items[i]);
}
