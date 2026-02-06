document.addEventListener("DOMContentLoaded", () => {

  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.image');
  const dotsBox = document.querySelector('.dots');
  const frame = document.querySelector('.frame');

  if (!slider || images.length === 0 || !frame) {
    console.error("Slider elements missing");
    return;
  }

  let index = 0;
  const total = images.length;
  let autoSlide;

  /* CREATE DOTS */
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsBox.appendChild(dot);

    dot.addEventListener('click', () => {
      index = i;
      updateSlider();
      resetAutoSlide();
    });
  });

  const dots = document.querySelectorAll('.dots span');

  function updateSlider() {
    const width = frame.clientWidth;   // 🔥 REAL WIDTH
    slider.style.transform = `translateX(-${index * width}px)`;

    dots.forEach(d => d.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  /* AUTO SLIDE */
  function startAutoSlide() {
    autoSlide = setInterval(() => {
      index = (index + 1) % total;
      updateSlider();
    }, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  startAutoSlide();

  /* RESIZE FIX */
  window.addEventListener('resize', updateSlider);

  /* TOUCH SWIPE */
  let startX = 0;

  slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) index = (index + 1) % total;
    else if (endX - startX > 50) index = (index - 1 + total) % total;

    updateSlider();
    resetAutoSlide();
  });

});
