const slider = document.querySelector('.kslider');
const slides = document.querySelectorAll('.kslide');
const left = document.querySelector('.kleft');
const right = document.querySelector('.kright');
const frame = document.querySelector('.kslider-frame');

let index = 0;
const total = slides.length;

function updateKSlider(){
  const width = frame.clientWidth;  // 🔥 REAL WIDTH
  slider.style.transform = `translateX(-${index * width}px)`;
}

right.addEventListener('click', () => {
  index = (index + 1) % total;
  updateKSlider();
});

left.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateKSlider();
});

/* resize safe */
window.addEventListener('resize', updateKSlider);
