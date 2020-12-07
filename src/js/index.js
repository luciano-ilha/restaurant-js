import './home';
import './menu';
import './contact';
import footer from '../js/footer';
import '../css/reset.scss';
import '../css/styles.scss';
import { elAbout, content, navigation, about } from '../js/home';
import { elMenu, menu } from '../js/menu';
import { elContact, contact } from '../js/contact';

content();
navigation();
about();
menu();
contact();
footer();

const homeSwitch = () => {
  if (elAbout.classList.contains('hidden')) {
    elAbout.classList.remove('hidden');
    elAbout.classList.add('d-flex');
    elMenu.classList.remove('d-flex');
    elMenu.classList.add('hidden');
    elContact.classList.remove('d-flex');
    elContact.classList.add('hidden');
  }
}

const menuSwitch = () => {
  if (elMenu.classList.contains('hidden')) {
    elMenu.classList.remove('hidden');
    elMenu.classList.add('d-flex');
    elAbout.classList.remove('d-flex');
    elAbout.classList.add('hidden');
    elContact.classList.remove('d-flex');
    elContact.classList.add('hidden');
  }
}

const contactSwitch = () => {
  if (elContact.classList.contains('hidden')) {
    elContact.classList.remove('hidden');
    elContact.classList.add('d-flex');
    elAbout.classList.remove('d-flex');
    elAbout.classList.add('hidden');
    elMenu.classList.remove('d-flex');
    elMenu.classList.add('hidden');
  }
}

const myHome = document.querySelector('.nav1');
myHome.addEventListener('click', homeSwitch);
const myMenu = document.querySelector('.nav2');
myMenu.addEventListener('click', menuSwitch);
const myContact = document.querySelector('.nav3');
myContact.addEventListener('click', contactSwitch);