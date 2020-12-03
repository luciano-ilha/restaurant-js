import '../css/styles.scss';
import img from '../assets/rpsscreenshot.png';

const textElement = () => {
  const elH1 = document.createElement('h1');
  elH1.innerHTML = 'Hello World!';
  elH1.classList.add('title');
  return elH1;
}

const imgComponent = () => {
  const elmImg = new Image(300, 150);
  elmImg.src = img;
  return elmImg;
}

document.body.appendChild(textElement());
document.body.appendChild(imgComponent());