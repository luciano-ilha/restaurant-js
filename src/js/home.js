import img from '../assets/lph_logo.png';

const mainContent = document.getElementById('content');
const menuEl = document.createElement('div');
const elHome = document.createElement('span');
const elMenu = document.createElement('span');
const elContact = document.createElement('span');

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
  menuEl.classList.add('nav-menu', 'd-flex');
  navEl.appendChild(menuEl);
  elHome.classList.add('nav-menu-item');
  elHome.innerHTML = "HOME";
  menuEl.appendChild(elHome);
  elMenu.classList.add('nav-menu-item');
  elMenu.innerHTML = "MENU";
  menuEl.appendChild(elMenu)
  elContact.classList.add('nav-menu-item');
  elContact.innerHTML = "CONTACT";
  menuEl.appendChild(elContact)
}

const homeBanner = () => {
  const homeBanner = document.createElement('div');
  homeBanner.classList.add('home', 'd-flex');
  homeBanner.style.backgroundImage = "url('home-banner.png')";
  mainContent.appendChild(homeBanner);
  
  const bannerMask = document.createElement('div');
  bannerMask.classList.add('mask', 'd-flex');
  homeBanner.appendChild(bannerMask);

  const bannerContent = document.createElement('div');
  bannerContent.classList.add('mask-content', 'd-flex');
  bannerMask.appendChild(bannerContent);

  const bannerTitle = document.createElement('h1');
  bannerTitle.innerHTML = 'Chicken at its best!'
  bannerTitle.classList.add('mask-content-title');
  bannerContent.appendChild(bannerTitle);

  const bannerText = document.createElement('p');
  bannerText.innerHTML = "In 1890, back in South Valley, Gus Frings was born. An ordinary boy, with an extraordinary future ahead of him. Gus, until the age of 40, lived a simple life: he worked as an insurance, tire and light seller, piloted tour boats and even delivered! Until, in 1930, he decided to buy a store at a gas station on the side of the road, which would change his path forever. It was there that he discovered the pleasure of serving travelers delicious and comforting food: he prepared, with all the affection, the same fried chicken that he ate in his childhood. For 10 years, the Hermano was perfecting the recipe until in 1940 he arrived at what he considered perfection. The chicken was so successful that it brought more and more people to the gas station restaurant. And the Hermano wanted to expand his business: he patented the name Los Pollos Hermanos and went around the country looking for franchisees. In 1952, he got his first one, in Albuquerque, New Mexico. In 1957, the idea came to serve the chicken in a bucket, a package that would become an icon of the brand. And the success was so great that, in 1964, the Hermano received the title and became known as the creator of the recipe for the Best Chicken in the World, which is successful worldwide and is served by millions and millions of people , every day. 10 years after the first restaurant, Los Pollos Hermanos already had 600 stores. And 60 years later, there are more than 5,000 stores in 120 countries, with 14 million customers per day. What was a meth secret recipe for a little dreamer has become one of the biggest secrets in the universe of brands. And from this secret, the most delicious chicken in the world emerged."
  bannerText.classList.add('mask-content-text');
  bannerContent.appendChild(bannerText);
}

content();
navigation();
homeBanner();