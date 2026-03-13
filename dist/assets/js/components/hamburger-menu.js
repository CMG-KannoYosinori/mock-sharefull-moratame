/**
 * ハンバーガーメニューの開閉とヘッダー高さに合わせたレイアウト調整
 */
export function initHamburgerMenu() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menu_btn');
  const menuBackground = document.querySelector('.menu-background');
  const menuCloseBtn = document.getElementById('menu_close');

  if (!header) return;

  if (!menuBtn || !menu || !menuBackground || !menuCloseBtn) return;

  const openMenu = () => {
    menuBtn.classList.add('active');
    menu.classList.add('open');
    menuBackground.classList.add('open');
    document.body.classList.add('is-drawer-open');
  };

  const closeMenu = () => {
    menuBtn.classList.remove('active');
    menu.classList.remove('open');
    menuBackground.classList.remove('open');
    document.body.classList.remove('is-drawer-open');
  };

  menuBtn.addEventListener('click', function () {
    if (menuBtn.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuBackground.addEventListener('click', function () {
    if (menuBackground.classList.contains('open')) {
      closeMenu();
    }
  });

  menuCloseBtn.addEventListener('click', function () {
    closeMenu();
  });
}
