'use strict';

let tab = function() {
  const tabNav = document.querySelectorAll('.tabsNav__item');
  const tabContent = document.querySelectorAll('.tab');
  let tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    console.log(this);
    
  }
};

tab();