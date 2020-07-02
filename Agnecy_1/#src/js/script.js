import * as app from './modules/app';
import './../layout/s-header/burger';
import './../layout/s-features/b-menu-features/menu-features';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // =========================================
  app.inspectUserAgent();
  app.testWebP();
  app.backgroundImage();
  app.elemReplace();
  // =========================================
});