document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // ---------------------------------------------
  // const userHeaderIcon = document.querySelector('.user-header__icon');
  // const userHeaderMenu = document.querySelector('.user-header__menu');
  // ---------------------------------------------
  // @@include('../vendor/swiper/js/swiper.js')
  // @@include('../vendor/smothScroll/smothScroll.js')
  // @@include('./modules/gotoBlock.js')

  // @ @include('./modules/app.js')
  // ---------------------------------------------
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.user-header__icon')) {
      // userHeaderMenu.classList.remove('_active');
    }
  });
  // ---------------------------------------------
  // userHeaderIcon.addEventListener('click', () => {
  //   // userHeaderMenu.classList.toggle('_active');
  // });
  // ---------------------------------------------
  inspectUserAgent();
  testWebP();
  backgroundImage();
  burgerActive();
  elemReplace();
});