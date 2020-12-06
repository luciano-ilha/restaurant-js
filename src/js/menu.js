import { mainContent } from '../js/home';
import hot from '../assets/crispyhot.png';
import mix from '../assets/crispymix.png';
import meal from '../assets/crispymeal.png';
import master from '../assets/crispymaster.png';
import jumbo from '../assets/crispyjumbo.png';
import burguer1 from '../assets/crispyburguer1.png';
import burguer2 from '../assets/crispyburguer2.png';
import burguer3 from '../assets/crispyburguer3.png';
import insta from '../assets/instagram-icon.png';
import face from '../assets/facebook-icon.png';
import twitter from '../assets/twitter-icon.png';
import mail from '../assets/email-icon.png';

const elMenu = document.createElement('div');
const menuFooter = document.querySelector('.menu-footer');
export { elMenu, menuFooter };

const menu = () => {
  elMenu.classList.add('menu', 'hidden');
  mainContent.appendChild(elMenu);

  const menuBox = document.createElement('div');
  menuBox.classList.add('menu-box');
  elMenu.appendChild(menuBox);

  const boxItem1 = document.createElement('div');
  boxItem1.classList.add('menu-box-item1', 'd-flex');
  menuBox.appendChild(boxItem1);
  const item1Img = new Image();
  item1Img.src = hot;
  item1Img.classList.add('menu-box-item1-img');
  boxItem1.appendChild(item1Img);
  const item1Title = document.createElement('h3');
  item1Title.classList.add('menu-box-item1-title');
  item1Title.innerHTML = 'Andale Crispy Hot';
  boxItem1.appendChild(item1Title);
  const item1Price = document.createElement('h3');
  item1Price.classList.add('menu-box-item1-price');
  item1Price.innerHTML = '$10';
  boxItem1.appendChild(item1Price);

  const boxItem2 = document.createElement('div');
  boxItem2.classList.add('menu-box-item2', 'd-flex');
  menuBox.appendChild(boxItem2);
  const item2Img = new Image();
  item2Img.src = mix;
  item2Img.classList.add('menu-box-item2-img');
  boxItem2.appendChild(item2Img);
  const item2Title = document.createElement('h3');
  item2Title.classList.add('menu-box-item2-title');
  item2Title.innerHTML = 'Hermano Crispy Mix';
  boxItem2.appendChild(item2Title);
  const item2Price = document.createElement('h3');
  item2Price.classList.add('menu-box-item2-price');
  item2Price.innerHTML = '$18';
  boxItem2.appendChild(item2Price);

  const boxItem3 = document.createElement('div');
  boxItem3.classList.add('menu-box-item3', 'd-flex');
  menuBox.appendChild(boxItem3);
  const item3Img = new Image();
  item3Img.src = meal;
  item3Img.classList.add('menu-box-item3-img');
  boxItem3.appendChild(item3Img);
  const item3Title = document.createElement('h3');
  item3Title.classList.add('menu-box-item3-title');
  item3Title.innerHTML = 'Sombrero Crispy Meal';
  boxItem3.appendChild(item3Title);
  const item3Price = document.createElement('h3');
  item3Price.classList.add('menu-box-item3-price');
  item3Price.innerHTML = '$23';
  boxItem3.appendChild(item3Price);

  const boxItem4 = document.createElement('div');
  boxItem4.classList.add('menu-box-item4', 'd-flex');
  menuBox.appendChild(boxItem4);
  const item4Img = new Image();
  item4Img.src = master;
  item4Img.classList.add('menu-box-item4-img');
  boxItem4.appendChild(item4Img);
  const item4Title = document.createElement('h3');
  item4Title.classList.add('menu-box-item4-title');
  item4Title.innerHTML = 'Esfomeado Crispy Master Pollo';
  boxItem4.appendChild(item4Title);
  const item4Price = document.createElement('h3');
  item4Price.classList.add('menu-box-item4-price');
  item4Price.innerHTML = '$30';
  boxItem4.appendChild(item4Price);

  const boxItem5 = document.createElement('div');
  boxItem5.classList.add('menu-box-item5', 'd-flex');
  menuBox.appendChild(boxItem5);
  const item5Img = new Image();
  item5Img.src = jumbo;
  item5Img.classList.add('menu-box-item5-img');
  boxItem5.appendChild(item5Img);
  const item5Title = document.createElement('h3');
  item5Title.classList.add('menu-box-item5-title');
  item5Title.innerHTML = "Hermano's Crispy Family Jumbo";
  boxItem5.appendChild(item5Title);
  const item5Price = document.createElement('h3');
  item5Price.classList.add('menu-box-item5-price');
  item5Price.innerHTML = '$38';
  boxItem5.appendChild(item5Price);

  const boxItem6 = document.createElement('div');
  boxItem6.classList.add('menu-box-item6', 'd-flex');
  menuBox.appendChild(boxItem6);
  const item6Img = new Image();
  item6Img.src = burguer1;
  item6Img.classList.add('menu-box-item6-img');
  boxItem6.appendChild(item6Img);
  const item6Title = document.createElement('h3');
  item6Title.classList.add('menu-box-item6-title');
  item6Title.innerHTML = 'Pollos Hermanos Crispy Burguer';
  boxItem6.appendChild(item6Title);
  const item6Price = document.createElement('h3');
  item6Price.classList.add('menu-box-item6-price');
  item6Price.innerHTML = '$10';
  boxItem6.appendChild(item6Price);

  const boxItem7 = document.createElement('div');
  boxItem7.classList.add('menu-box-item7', 'd-flex');
  menuBox.appendChild(boxItem7);
  const item7Img = new Image();
  item7Img.src = burguer2;
  item7Img.classList.add('menu-box-item7-img');
  boxItem7.appendChild(item7Img);
  const item7Title = document.createElement('h3');
  item7Title.classList.add('menu-box-item7-title');
  item7Title.innerHTML = 'Pollos Hermanos Crazy Burguer';
  boxItem7.appendChild(item7Title);
  const item7Price = document.createElement('h3');
  item7Price.classList.add('menu-box-item7-price');
  item7Price.innerHTML = '$13';
  boxItem7.appendChild(item7Price);

  const boxItem8 = document.createElement('div');
  boxItem8.classList.add('menu-box-item8', 'd-flex');
  menuBox.appendChild(boxItem8);
  const item8Img = new Image();
  item8Img.src = burguer3;
  item8Img.classList.add('menu-box-item8-img');
  boxItem8.appendChild(item8Img);
  const item8Title = document.createElement('h3');
  item8Title.classList.add('menu-box-item8-title');
  item8Title.innerHTML = 'Pollos Hermanos Double Crispy Burguer';
  boxItem8.appendChild(item8Title);
  const item8Price = document.createElement('h3');
  item8Price.classList.add('menu-box-item8-price');
  item8Price.innerHTML = '$17';
  boxItem8.appendChild(item8Price);
}

const footer = () => {
  const elFooter = document.createElement('div');
  elFooter.classList.add('footer', 'menu-footer','hidden');
  mainContent.appendChild(elFooter);

  const footerBox = document.createElement('div');
  footerBox.classList.add('footer-box', 'd-flex');
  elFooter.appendChild(footerBox);

  const boxItem1 = new Image();
  boxItem1.src = insta;
  boxItem1.classList.add('footer-box-item');
  footerBox.appendChild(boxItem1);

  const boxItem2 = new Image();
  boxItem2.src = face;
  boxItem2.classList.add('footer-box-item2');
  footerBox.appendChild(boxItem2);

  const boxItem3 = new Image();
  boxItem3.src = twitter;
  boxItem3.classList.add('footer-box-item2');
  footerBox.appendChild(boxItem3);

  const boxItem4 = new Image();
  boxItem4.src = mail;
  boxItem4.classList.add('footer-box-item');
  footerBox.appendChild(boxItem4);
}

menu();
footer();