/**
 * ページトップへボタン（.pageTopScroll）の表示制御
 * スクロール量に応じてふわっと表示／非表示
 */
export function initPageTopScroll() {
  if (!document.body.id) document.body.id = 'pageTop';

  const pageTopScroll = document.querySelector('.pageTopScroll');
  if (!pageTopScroll) return;

  const link = pageTopScroll.querySelector('a[href="#pageTop"]');
  if (link) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const showThreshold = 300;
  let isVisible = false;
  let fadeTimeout = null;

  pageTopScroll.style.display = 'none';

  function togglePageTopScroll() {
    const scrollTop = window.pageYOffset ?? document.documentElement.scrollTop;
    if (scrollTop > showThreshold) {
      if (!isVisible) {
        if (fadeTimeout) clearTimeout(fadeTimeout);
        pageTopScroll.style.display = 'block';
        pageTopScroll.offsetHeight;
        pageTopScroll.classList.add('is-visible');
        isVisible = true;
      }
    } else {
      if (isVisible) {
        pageTopScroll.classList.remove('is-visible');
        fadeTimeout = setTimeout(() => {
          pageTopScroll.style.display = 'none';
          isVisible = false;
          fadeTimeout = null;
        }, 300);
      }
    }
  }

  window.addEventListener('scroll', togglePageTopScroll, { passive: true });
  togglePageTopScroll();
}
