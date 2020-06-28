import {
  bodyLock,
  bodyLockRemove,
  bodyLockAdd,
} from './../../js/modules/app';
// ===== CONSTANTS =========================
const constants = function (burger, menu) {
  const iconMenu = document.querySelector(burger);
  const menuBody = document.querySelector(menu);
  const activeiconMenu = (`${burger}_active`).replace('.', '');
  const activemenuBody = (`${menu}_active`).replace('.', '');
  return {
    iconMenu,
    menuBody,
    activeiconMenu,
    activemenuBody,
  };
};
// ===== menuClose =========================
/*
 * - iconMenuElem - меню-бургер '.icon-menu'
 * - menuBodyElem - основное меню навигации '.menu__body'
 */
const menuClose = function (burger, menu) {
  const iconMenu = document.querySelector(burger);
  const menuBody = document.querySelector(menu);
  const activeiconMenu = (`${burger}_active`).replace('.', '');
  const activemenuBody = (`${menu}_active`).replace('.', '');

  iconMenu.classList.remove(activeiconMenu);
  menuBody.classList.remove(activemenuBody);
};

// ====== burgerActive =====================
/*
 * - iconMenuElem - меню-бургер '.icon-menu'
 * - menuBodyElem - основное меню навигации '.menu__body'
 */
const burgerActive = function (
  burger,
  menu,
) {
  const iconMenu = document.querySelector(burger);
  const menuBody = document.querySelector(menu);
  const activeiconMenu = (`${burger}_active`).replace('.', '');
  const activemenuBody = (`${menu}_active`).replace('.', '');

  if (iconMenu != null) {
    const body = document.querySelector('body');

    let delay = 500;
    iconMenu.addEventListener('click', (e) => {
      if (!body.classList.contains('_wait')) {
        bodyLock(delay);
        iconMenu.classList.toggle(activeiconMenu);
        menuBody.classList.toggle(activemenuBody);
      }
    });
  }
};

export {
  menuClose,
  burgerActive
};