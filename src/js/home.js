import img from '../assets/lph_logo.png';
import insta from '../assets/instagram-icon.png';
import face from '../assets/facebook-icon.png';
import twitter from '../assets/twitter-icon.png';
import mail from '../assets/email-icon.png';

const mainContent = document.getElementById('content');
const navMenu = document.createElement('div');
const menuHome = document.createElement('span');
const menuMenu = document.createElement('span');
const menuContact = document.createElement('span');
const elAbout = document.createElement('div');
export { mainContent, elAbout };


const content = () => {
  mainContent.classList.add('d-flex');
}

const navigation = () => {
  const elNav = document.createElement('div');
  elNav.classList.add('nav', 'd-flex');
  mainContent.appendChild(elNav);
  const imgEl = new Image();
  imgEl.src = img;
  elNav.appendChild(imgEl);
  navMenu.classList.add('nav-menu', 'd-flex');
  elNav.appendChild(navMenu);
  menuHome.classList.add('nav-menu-item');
  menuHome.innerHTML = "HOME";
  navMenu.appendChild(menuHome);
  menuMenu.classList.add('nav-menu-item');
  menuMenu.innerHTML = "MENU";
  navMenu.appendChild(menuMenu)
  menuContact.classList.add('nav-menu-item');
  menuContact.innerHTML = "CONTACT";
  navMenu.appendChild(menuContact);
}

const about = () => {
  elAbout.classList.add('home', 'd-flex');
  elAbout.style.backgroundImage = "url('home-banner.png')";
  mainContent.appendChild(elAbout);
  
  const aboutMask = document.createElement('div');
  aboutMask.classList.add('mask', 'd-flex');
  elAbout.appendChild(aboutMask);

  const aboutContent = document.createElement('div');
  aboutContent.classList.add('mask-content', 'd-flex');
  aboutMask.appendChild(aboutContent);

  const contentTitle = document.createElement('h1');
  contentTitle.innerHTML = 'Chicken at its best!'
  contentTitle.classList.add('mask-content-title');
  aboutContent.appendChild(contentTitle);

  const contentText = document.createElement('p');
  contentText.innerHTML = "In 1890, back in South Valley, Gus Frings was born. An ordinary boy, with an extraordinary future ahead of him. Gus, until the age of 40, lived a simple life: he worked as an insurance, tire and light seller, piloted tour boats and even delivered! Until, in 1930, he decided to buy a store at a gas station on the side of the road, which would change his path forever. It was there that he discovered the pleasure of serving travelers delicious and comforting food: he prepared, with all the affection, the same fried chicken that he ate in his childhood. For 10 years, the Hermano was perfecting the recipe until in 1940 he arrived at what he considered perfection. The chicken was so successful that it brought more and more people to the gas station restaurant. And the Hermano wanted to expand his business: he patented the name Los Pollos Hermanos and went around the country looking for franchisees. In 1952, he got his first one, in Albuquerque, New Mexico. In 1957, the idea came to serve the chicken in a bucket, a package that would become an icon of the brand. And the success was so great that, in 1964, the Hermano received the title and became known as the creator of the recipe for the Best Chicken in the World, which is successful worldwide and is served by millions and millions of people , every day. 10 years after the first restaurant, Los Pollos Hermanos already had 600 stores. And 60 years later, there are more than 5,000 stores in 120 countries, with 14 million customers per day. What was a meth secret recipe for a little dreamer has become one of the biggest secrets in the universe of brands. And from this secret, the most delicious chicken in the world emerged."
  contentText.classList.add('mask-content-text');
  aboutContent.appendChild(contentText);
}

const footer = () => {
  const elFooter = document.createElement('div');
  elFooter.classList.add('footer', 'd-flex');
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

content();
navigation();
about();
footer();