import { mainContent } from '../js/home';
import insta from '../assets/instagram-icon.png';
import face from '../assets/facebook-icon.png';
import twitter from '../assets/twitter-icon.png';
import mail from '../assets/email-icon.png';

const elContact = document.createElement('div');
const contactFooter = document.querySelector('.contact-footer');
export { elContact, contactFooter };

const contact = () => {
  elContact.classList.add('contact', 'hidden');
  mainContent.appendChild(elContact);

  const contactBox = document.createElement('div');
  contactBox.classList.add('contact-box');
  elContact.appendChild(contactBox);

  const boxForm = document.createElement('form');
  boxForm.classList.add('contact-box-form', 'd-flex');
  contactBox.appendChild(boxForm);

  const formFirstNameLabel = document.createElement('label');
  formFirstNameLabel.classList.add('contact-box-form-label');
  formFirstNameLabel.setAttribute("for", "fname");
  formFirstNameLabel.innerHTML = 'First Name:'
  boxForm.appendChild(formFirstNameLabel);

  const formFirstNameInput = document.createElement('input');
  formFirstNameInput.classList.add('contact-box-form-input');
  formFirstNameInput.setAttribute("type", "text");
  formFirstNameInput.setAttribute("name", "fname");
  formFirstNameInput.setAttribute("placeholder", "Your first name");
  boxForm.appendChild(formFirstNameInput);

  const formLastNameLabel = document.createElement('label');
  formLastNameLabel.classList.add('contact-box-form-label');
  formLastNameLabel.setAttribute("for", "lname");
  formLastNameLabel.innerHTML = 'Last Name:'
  boxForm.appendChild(formLastNameLabel);

  const formLastNameInput = document.createElement('input');
  formLastNameInput.classList.add('contact-box-form-input');
  formLastNameInput.setAttribute("type", "text");
  formLastNameInput.setAttribute("name", "lname");
  formLastNameInput.setAttribute("placeholder", "Your last name");
  boxForm.appendChild(formLastNameInput);

  const formTextArea = document.createElement('textarea');
  formTextArea.classList.add('contact-box-form-text');
  formTextArea.setAttribute("name", "message");
  formTextArea.setAttribute("placeholder", "Your message here");
  boxForm.appendChild(formTextArea);

  const formSubmitBtn = document.createElement('input');
  formSubmitBtn.classList.add('contact-box-form-btn');
  formSubmitBtn.setAttribute("type", "submit");
  formSubmitBtn.setAttribute("value", "Submit");
  boxForm.appendChild(formSubmitBtn);
}

const footer = () => {
  const elFooter = document.createElement('div');
  elFooter.classList.add('footer', 'contact-footer','hidden');
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

contact();
footer();