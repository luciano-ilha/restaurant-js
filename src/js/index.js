const textElement = () => {
  const elH1 = document.createElement('h1');
  elH1.innerHTML = 'Hello World!';
  return elH1;
}

document.body.appendChild(textElement());