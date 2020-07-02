import Swiper from './../vendor/swiper/js/swiper';
import * as app from './modules/app';
import './../layout/s-header/burger';
import './../layout/s-features/b-menu-features/menu-features';
import {
  sliderInit
} from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // =========================================
  app.inspectUserAgent();
  app.testWebP();
  app.backgroundImage();
  app.elemReplace();
  // =========================================
  sliderInit();
  /*
    Параметры для слайдера: https://swiperjs.com/
  */
  const teamSlider = new Swiper('.team-slider', {
    /*
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    */
    observer: true,
    observerParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // autoHeight: true,
    speed: 800,

    // touchRatio: 0,
    simulateTouch: true,
    loop: true,
    // preloadImages: false,
    // lazy: true,
    // Dotts
    pagination: {
      el: '',
      clickable: true,
    },
    // Arrows
    // navigation: {
    //   nextEl: '.control-main-slider__arrow_next',
    //   prevEl: '.control-main-slider__arrow_prev',
    // },

    // Responsive breakpoints
    // breakpoints: {
    //   320: {
    //     autoHeight: true,
    //   },
    //   768: {
    //     autoHeight: true,
    //   },
    // }
  });
});