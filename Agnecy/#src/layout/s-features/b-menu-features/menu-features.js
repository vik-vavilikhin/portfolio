import * as menu from './../../../layout/b-menu/menu';

const selFIconMenu = '.menu-features__mini-hedear';
const selFBodyMenu = '.menu-features__body';
const selFListMenu = '.menu-features__list';
const selFLinkMenu = '.menu-features__link';

menu.burgerActive(selFIconMenu, selFListMenu, false);

document.addEventListener('click', (e) => {
  const target = e.target;
  if (document.querySelector(selFLinkMenu)) {
    e.preventDefault();
  }

  if (target.closest(selFLinkMenu)) {
    const valueLink = target.textContent;
    const headFilter = document.querySelector(selFIconMenu);

    headFilter.textContent = valueLink;
    menu.menuClose(selFIconMenu, selFListMenu);
  }

  if (!target.closest(selFLinkMenu) &&
    !target.closest(selFListMenu) &&
    !target.closest(selFIconMenu)) {

    menu.menuClose(selFIconMenu, selFListMenu);
  }
});