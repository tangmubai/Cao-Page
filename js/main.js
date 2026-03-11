document.addEventListener('DOMContentLoaded', function () {
  // Simple carousel
  const slides = Array.from(document.querySelectorAll('.carousel .slide'));
  const dotsContainer = document.querySelector('.carousel .dots');
  let idx = 0;

  if (slides.length > 0) {
    // create dots
    slides.forEach((s, i) => {
      const d = document.createElement('div');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.dataset.index = i;
      d.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(d);
    });

    function goTo(i) {
      slides[idx].classList.remove('active');
      dotsContainer.children[idx].classList.remove('active');
      idx = i;
      slides[idx].classList.add('active');
      dotsContainer.children[idx].classList.add('active');
    }

    function next() { goTo((idx + 1) % slides.length); }
    const timer = setInterval(next, 4000);

    // pause on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
  }

  // Mobile dropdown toggle: tap to open
  const dropdownParents = document.querySelectorAll('.has-dropdown');
  dropdownParents.forEach(parent => {
    const a = parent.querySelector('a');
    a.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        parent.classList.toggle('open');
      }
    });
  });
});
