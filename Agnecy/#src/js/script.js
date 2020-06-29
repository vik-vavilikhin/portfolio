import * as app from './modules/app';
import * as menu from './../layout/b-menu/menu';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // =========================================
  const burgerMenu = '.icon-menu';
  const mainMenu = '.menu__body';
  const menuFeaturesBody = '.menu-features__body';
  const menuFeaturesList = '.menu-features__list';

  app.inspectUserAgent();
  app.testWebP();
  app.backgroundImage();
  app.elemReplace();
  menu.burgerActive(menuFeaturesBody, menuFeaturesList, false);
  menu.burgerActive(burgerMenu, mainMenu);
  // =========================================

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (!target.closest(burgerMenu) &&
      !target.closest(mainMenu)) {
      menu.menuClose(burgerMenu, mainMenu);
    }
    if (!target.closest(menuFeaturesList) &&
      !target.closest(menuFeaturesBody)) {
      menu.menuClose(menuFeaturesList, menuFeaturesBody);
    }
    if (document.querySelector('.menu-features__link')) {
      e.preventDefault();
    }
    // if (target.closest('.menu-features__mini-hedear')) {
    //   const burger = '.menu-features__mini-hedear';
    //   menu.burgerActive(burger, menuFeaturesBody, false);
    // }
  });

});