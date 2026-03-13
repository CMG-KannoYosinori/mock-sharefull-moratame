function initTopHeroSwiper() {
  if (typeof Swiper === 'undefined') return;

  var swiper = new Swiper('.p-top-hero__swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.p-top-hero__tabs',
      clickable: true,
      renderBullet: function (index, className) {
        var label = 'バナー' + (index + 1);
        return '<button type="button" class="' + className + '" role="tab" aria-label="' + label + '"></button>';
      },
    },
    on: {
      slideChange: function () {
        var tabs = document.querySelectorAll('.p-top-hero__tabs .swiper-pagination-bullet');
        tabs.forEach(function (tab, i) {
          tab.setAttribute('aria-selected', i === swiper.realIndex ? 'true' : 'false');
        });
      },
    },
  });

  var initTabs = document.querySelectorAll('.p-top-hero__tabs .swiper-pagination-bullet');
  initTabs.forEach(function (tab, i) {
    tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTopHeroSwiper);
} else {
  initTopHeroSwiper();
}

