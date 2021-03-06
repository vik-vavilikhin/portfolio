import * as menu from './../../../layout/b-menu/menu';

const selFIconMenu = '.menu-features__mini-hedear';
const selFListMenu = '.menu-features__list';
const selFLinkMenu = '.menu-features__link';

menu.burgerActive(selFIconMenu, selFListMenu, false);

document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.closest(selFLinkMenu)) {
    e.preventDefault();
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