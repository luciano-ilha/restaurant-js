import '../css/styles.scss';

const textElement = () => {
  const elH1 = document.createElement('h1');
  elH1.innerHTML = 'Hello World!';
  elH1.classList.add('title');
  return elH1;
}

document.body.appendChild(textElement());