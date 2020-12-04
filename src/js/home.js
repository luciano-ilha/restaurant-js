import img from '../assets/lph_logo.png'
const mainContent = document.getElementById('content');

const content = () => {
  mainContent.classList.add('d-flex');
}

const navigation = () => {
  const navEl = document.createElement('div');
  navEl.classList.add('nav', 'd-flex');
  mainContent.appendChild(navEl);
  
  const imgEl = new Image();
  imgEl.src = img;
  navEl.appendChild(imgEl);
  
  const menuEl = document.createElement('div');
  menuEl.classList.add('nav-menu', 'd-flex');
  navEl.appendChild(menuEl);
  const elHome = document.createElement('span');
  elHome.classList.add('nav-menu-item');
  elHome.innerHTML = "HOME";
  menuEl.appendChild(elHome);
  const elMenu = document.createElement('span');
  elMenu.classList.add('nav-menu-item');
  elMenu.innerHTML = "MENU";
  menuEl.appendChild(elMenu)
  const elContact = document.createElement('span');
  elContact.classList.add('nav-menu-item');
  elContact.innerHTML = "CONTACT";
  menuEl.appendChild(elContact)
}

content();
navigation();