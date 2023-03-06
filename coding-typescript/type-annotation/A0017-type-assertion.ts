/* Recommended */
// Conditional
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = 'red';

// HTML Element
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Not Recommended */
// Type assertion
const body4 = document.querySelector('body') as unknown as number; // eslint-disable-line

// Non-null assertion (!)
const body2 = document.querySelector('body')!; //eslint-disable-line
body2.style.backgroundColor = 'red';
