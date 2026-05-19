/**
 * 掲載予定パネルの開閉
 */
export function initComingSoon() {
  const toggleBtn = document.getElementById('coming-soon-btn');
  const closeBtn = document.getElementById('coming-soon-close');
  const content = document.getElementById('coming-soon-content');

  if (!toggleBtn || !content) return;

  const open = () => {
    content.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', '掲載予定を閉じる');
  };

  const close = () => {
    content.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', '掲載予定を表示');
  };

  toggleBtn.addEventListener('click', () => {
    if (content.classList.contains('is-open')) {
      close();
    } else {
      open();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', close);
  }
}
