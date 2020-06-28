import * as app from './modules/app';
import * as menu from './../layout/b-menu/menu';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // =========================================
  const burgerMenu = '.icon-menu';
  const mainMenu = '.menu__body';

  app.inspectUserAgent();
  app.testWebP();
  app.backgroundImage();
  app.elemReplace();
  menu.burgerActive(burgerMenu, mainMenu);
  // =========================================

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest(burgerMenu) &&
      !target.closest(mainMenu)) {
      menu.menuClose(burgerMenu, mainMenu);
    }
  });

});