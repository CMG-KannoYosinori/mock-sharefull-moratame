/**
 * アコーディオン（.js-t-accordion）
 * クリックで次の要素を開閉し、矢印クラスを切り替える
 */
export function initAccordion() {
  const triggers = document.querySelectorAll('.js-t-accordion');
  triggers.forEach((trigger) => {
    const content = trigger.nextElementSibling;
    if (!content) return;

    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.3s ease';
    if (content.style.display === 'none' || getComputedStyle(content).display === 'none') {
      content.style.display = '';
      content.style.maxHeight = '0';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    trigger.addEventListener('click', () => {
      const isOpen = trigger.classList.contains('t-arrow_up');
      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        requestAnimationFrame(() => {
          content.style.maxHeight = '0';
        });
      } else {
        content.style.maxHeight = '0';
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.addEventListener('transitionend', function onEnd() {
            content.removeEventListener('transitionend', onEnd);
            if (content.style.maxHeight !== '0px') {
              content.style.maxHeight = 'none';
            }
          }, { once: true });
        });
      }
      trigger.classList.toggle('t-arrow_down');
      trigger.classList.toggle('t-arrow_up');
    });
  });
}
