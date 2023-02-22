/* eslint-disable */
let $name: string = 'Gui';
let $age: number = 17;
let $isAdmin: boolean = false;
let $symbol: symbol = Symbol('qualquer');

// Arrays
// let numberArray: Array<number> = [1, 2, 3, 4];
// let stringArray: Array<string> = ['A', 'B', 'C'];
// let numberArray: number[] = [1, 2, 3, 4];
// let stringArray: string[] = ['A', 'B', 'C'];

let person: {username: string, id: number, isOnline: boolean, hasMoney?: boolean} = {
  username: 'Guiga',
  id: 1,
  isOnline: true
};

const concatenate: (user_name: string, surname: string) => string = (user_name, surname) => user_name + surname;
