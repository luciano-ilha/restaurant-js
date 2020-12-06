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
  }

  if (footerHome.classList.contains('hidden')) {
    footerHome.classList.remove('hidden');
    footerHome.classList.add('d-flex');
  }

  if (elMenu.classList.contains('d-flex')) {
    elMenu.classList.remove('d-flex');
    elMenu.classList.add('hidden');
  }
  
  if (footerMenu.classList.contains('d-flex')) {
    footerMenu.classList.remove('d-flex');
    footerMenu.classList.add('hidden');
  }

  if (elContact.classList.contains('d-flex')) {
    elContact.classList.remove('d-flex');
    elContact.classList.add('hidden');
  }

  if (footerContact.classList.contains('d-flex')) {
    footerContact.classList.remove('d-flex');
    footerContact.classList.add('hidden');
  }
}

const myMenu = document.querySelector('.nav1');
myMenu.addEventListener('click', homeSwitch);
console.log(myMenu);