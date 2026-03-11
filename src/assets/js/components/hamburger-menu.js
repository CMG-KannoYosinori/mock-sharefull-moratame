/**
 * ハンバーガーメニューの開閉とヘッダー高さに合わせたレイアウト調整
 */
export function initHamburgerMenu() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menu_btn');
  const menuBackground = document.querySelector('.menu-background');

  if (!header) return;

  const headerHeight = header.offsetHeight;

  if (main) {
    main.style.paddingTop = headerHeight + 'px';
  }
  if (menu) {
    menu.style.marginTop = headerHeight + 'px';
  }

  if (!menuBtn || !menu || !menuBackground) return;

  menuBtn.addEventListener('click', function () {
    if (menuBtn.classList.contains('active')) {
      menuBtn.classList.remove('active');
      menuBtn.textContent = 'MENU';
      menu.classList.remove('open');
      menuBackground.classList.remove('open');
    } else {
      menuBtn.classList.add('active');
      menuBtn.textContent = 'CLOSE';
      menu.classList.add('open');
      menuBackground.classList.add('open');
    }
  });

  menuBackground.addEventListener('click', function () {
    if (menuBackground.classList.contains('open')) {
      menuBackground.classList.remove('open');
      menuBtn.classList.remove('active');
      menuBtn.textContent = 'MENU';
      menu.classList.remove('open');
    }
  });
}
