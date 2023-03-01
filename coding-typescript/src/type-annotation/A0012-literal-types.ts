/* eslint-disable */

let test = 12 as const;

function chooseColor(color: 'Red' | 'Blue' | 'Yellow'): string {
  return `The color is: ${color}.`;
}
let msg = chooseColor('Yellow');
console.log(msg);
