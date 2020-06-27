// ===== menuClose =========================
/*
 * - iconMenuElem - меню-бургер '.icon-menu'
 * - menuBodyElem - основное меню навигации '.menu__body'
 */
function menuClose() {
  const iconMenu = document.querySelector('.icon-menu');
  const menuBody = document.querySelector('.menu__body');
  iconMenu.classList.remove('icon-menu_active');
  menuBody.classList.remove('menu__body_active');
}

document.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.closest('.menu__body_active')) {
    // menuClose();
  }
});

// ====== burgerActive =====================
/*
 * - iconMenuElem - меню-бургер '.icon-menu'
 * - menuBodyElem - основное меню навигации '.menu__body'
 */
function burgerActive() {
  const iconMenu = document.querySelector('.icon-menu');
  const menuBody = document.querySelector('.menu__body');

  if (iconMenu != null) {
    const body = document.querySelector('body');

    let delay = 500;
    iconMenu.addEventListener('click', (e) => {
      if (!body.classList.contains('_wait')) {
        // bodyLock(delay);
        iconMenu.classList.toggle('icon-menu_active');
        menuBody.classList.toggle('menu__body_active');
      }
    });
  }
}