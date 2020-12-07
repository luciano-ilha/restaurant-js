import { mainContent } from './home';
import img from '../assets/lph_logo.png';

export default () => {
  const elNav = document.createElement('div');
  elNav.classList.add('nav', 'd-flex');
  mainContent.appendChild(elNav);
  const imgEl = new Image();
  imgEl.src = img;
  elNav.appendChild(imgEl);
  const navMenu = document.createElement('div');
  navMenu.classList.add('nav-menu', 'd-flex');
  elNav.appendChild(navMenu);
  const menuHome = document.createElement('span');
  menuHome.classList.add('nav-menu-item', 'nav1');
  menuHome.innerHTML = 'HOME';
  navMenu.appendChild(menuHome);
  const menuMenu = document.createElement('span');
  menuMenu.classList.add('nav-menu-item', 'nav2');
  menuMenu.innerHTML = 'MENU';
  navMenu.appendChild(menuMenu);
  const menuContact = document.createElement('span');
  menuContact.classList.add('nav-menu-item', 'nav3');
  menuContact.innerHTML = 'CONTACT';
  navMenu.appendChild(menuContact);
};