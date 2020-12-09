const elContact = document.createElement('div');
export const contactFragment = document.createDocumentFragment();

const contact = () => {
  elContact.classList.add('contact', 'hidden');
  contactFragment.appendChild(elContact);
  const contactBox = document.createElement('div');
  contactBox.classList.add('contact-box');
  elContact.appendChild(contactBox);
  const boxForm = document.createElement('form');
  boxForm.classList.add('contact-box-form', 'd-flex');
  contactBox.appendChild(boxForm);
  const formFirstNameLabel = document.createElement('label');
  formFirstNameLabel.classList.add('contact-box-form-label');
  formFirstNameLabel.setAttribute('for', 'fname');
  formFirstNameLabel.innerHTML = 'First Name:';
  boxForm.appendChild(formFirstNameLabel);
  const formFirstNameInput = document.createElement('input');
  formFirstNameInput.classList.add('contact-box-form-input');
  formFirstNameInput.setAttribute('type', 'text');
  formFirstNameInput.setAttribute('name', 'fname');
  formFirstNameInput.setAttribute('placeholder', 'Your first name');
  boxForm.appendChild(formFirstNameInput);
  const formLastNameLabel = document.createElement('label');
  formLastNameLabel.classList.add('contact-box-form-label');
  formLastNameLabel.setAttribute('for', 'lname');
  formLastNameLabel.innerHTML = 'Last Name:';
  boxForm.appendChild(formLastNameLabel);
  const formLastNameInput = document.createElement('input');
  formLastNameInput.classList.add('contact-box-form-input');
  formLastNameInput.setAttribute('type', 'text');
  formLastNameInput.setAttribute('name', 'lname');
  formLastNameInput.setAttribute('placeholder', 'Your last name');
  boxForm.appendChild(formLastNameInput);
  const formTextArea = document.createElement('textarea');
  formTextArea.classList.add('contact-box-form-text');
  formTextArea.setAttribute('name', 'message');
  formTextArea.setAttribute('placeholder', 'Your message here');
  boxForm.appendChild(formTextArea);
  const formSubmitBtn = document.createElement('input');
  formSubmitBtn.classList.add('contact-box-form-btn');
  formSubmitBtn.setAttribute('type', 'submit');
  formSubmitBtn.setAttribute('value', 'Submit');
  boxForm.appendChild(formSubmitBtn);
};

contact();

export { elContact };