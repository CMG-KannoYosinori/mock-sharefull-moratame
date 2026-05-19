function initItemVisualSwiper() {
  if (typeof Swiper === 'undefined') return;

  document.querySelectorAll('.p-item-visual__swiper').forEach(function (el) {
    new Swiper(el, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: el.querySelector('.p-item-visual__pagination'),
        clickable: true,
      },
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initItemVisualSwiper);
} else {
  initItemVisualSwiper();
}
