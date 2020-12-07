import insta from '../assets/instagram-icon.png';
import face from '../assets/facebook-icon.png';
import twitter from '../assets/twitter-icon.png';
import mail from '../assets/email-icon.png';
import { mainContent } from './home';

export default () => {
  const elFooter = document.createElement('div');
  elFooter.classList.add('home-footer', 'd-flex');
  mainContent.appendChild(elFooter);

  const footerBox = document.createElement('div');
  footerBox.classList.add('home-footer-box', 'd-flex');
  elFooter.appendChild(footerBox);

  const boxItem1 = new Image();
  boxItem1.src = insta;
  boxItem1.classList.add('home-footer-box-item');
  footerBox.appendChild(boxItem1);

  const boxItem2 = new Image();
  boxItem2.src = face;
  boxItem2.classList.add('home-footer-box-item2');
  footerBox.appendChild(boxItem2);

  const boxItem3 = new Image();
  boxItem3.src = twitter;
  boxItem3.classList.add('home-footer-box-item2');
  footerBox.appendChild(boxItem3);

  const boxItem4 = new Image();
  boxItem4.src = mail;
  boxItem4.classList.add('home-footer-box-item');
  footerBox.appendChild(boxItem4);
};