'use strict';

let tab = function() {
  const tabNav = document.querySelectorAll('.tabsNav__item');
  const tabContent = document.querySelectorAll('.tab');
  let tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');

    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
    // console.log(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? 
        item.classList.add('active') :
        item.classList.remove('active');
    })
  }
};

tab();