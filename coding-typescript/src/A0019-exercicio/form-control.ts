import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const FORM = document.getElementById('form') as HTMLFormElement;
const USERNAME = document.getElementById('username') as HTMLInputElement;
const EMAIL = document.getElementById('email') as HTMLInputElement;
const PASSWORD = document.getElementById('password') as HTMLInputElement;
const PASSWORD2 = document.getElementById('password2') as HTMLInputElement;

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const FORM_FIELDS = input.parentElement as HTMLDivElement;
  const ERROR_MESSAGE = FORM_FIELDS.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  ERROR_MESSAGE.innerText = msg;
  FORM_FIELDS.classList.add(SHOW_ERROR_MESSAGES);
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach((form_element) => {
    form_element.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'This field cannot be empty.');
    }
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) {
    showErrorMessage(input, 'Invalid email.');
  }
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Password and Repeat Password are not equal.');
    showErrorMessage(password2, 'Password and Repeat Password are not equal.');
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;

  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach(() => (send = false));

  return send;
}

function handleSubmit(form: HTMLFormElement): void {
  hideErrorMessages(form);
  checkForEmptyFields(USERNAME, EMAIL, PASSWORD, PASSWORD2);
  checkEmail(EMAIL);
  checkEqualPasswords(PASSWORD, PASSWORD2);
  if (shouldSendForm(form)) {
    console.log('Form submitted!');
  }
}

FORM.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  handleSubmit(FORM);
});
