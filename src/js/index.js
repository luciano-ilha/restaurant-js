import './home';
import './menu';
import './contact';
import '../css/reset.scss';
import '../css/styles.scss';
import { elAbout, footerHome, content, navigation, about, footer } from '../js/home';
import { elMenu, footerMenu, menu, menuFooter } from '../js/menu';
import { elContact, footerContact, contact, contactFooter } from '../js/contact';

content();
navigation();
about();
footer();
menu();
menuFooter();
contact();
contactFooter();

const homeSwitch = () => {
  if (elAbout.classList.contains('hidden')) {
    elAbout.classList.remove('hidden');
    elAbout.classList.add('d-flex');
    footerHome.classList.remove('hidden');
    footerHome.classList.add('d-flex');
    elMenu.classList.remove('d-flex');
    elMenu.classList.add('hidden');
    footerMenu.classList.remove('d-flex');
    footerMenu.classList.add('hidden');
    elContact.classList.remove('d-flex');
    elContact.classList.add('hidden');
    footerContact.classList.remove('d-flex');
    footerContact.classList.add('hidden');
  }
}

const menuSwitch = () => {
  if (elMenu.classList.contains('hidden')) {
    elMenu.classList.remove('hidden');
    elMenu.classList.add('d-flex');
    footerMenu.classList.remove('hidden');
    footerMenu.classList.add('d-flex');
    elAbout.classList.remove('d-flex');
    elAbout.classList.add('hidden');
    footerHome.classList.remove('d-flex');
    footerHome.classList.add('hidden');
    elContact.classList.remove('d-flex');
    elContact.classList.add('hidden');
    footerContact.classList.remove('d-flex');
    footerContact.classList.add('hidden');
  }
}

const contactSwitch = () => {
  if (elContact.classList.contains('hidden')) {
    elContact.classList.remove('hidden');
    elContact.classList.add('d-flex');
    footerContact.classList.remove('hidden');
    footerContact.classList.add('d-flex');
    elAbout.classList.remove('d-flex');
    elAbout.classList.add('hidden');
    footerHome.classList.remove('d-flex');
    footerHome.classList.add('hidden');
    elMenu.classList.remove('d-flex');
    elMenu.classList.add('hidden');
    footerMenu.classList.remove('d-flex');
    footerMenu.classList.add('hidden');
  }
}


const myHome = document.querySelector('.nav1');
myHome.addEventListener('click', homeSwitch);

const myMenu = document.querySelector('.nav2');
myMenu.addEventListener('click', menuSwitch);

const myContact = document.querySelector('.nav3');
myContact.addEventListener('click', contactSwitch);

// myHome.setAttribute("onclick", "homeSwitch()");
// myMenu.setAttribute("onclick", "menuSwitch()");
// myContact.setAttribute("onclick", "contactSwitch()");