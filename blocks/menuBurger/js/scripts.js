const burger = document.querySelector('.burger'),
  menu = document.querySelector('.menu'),
  body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});