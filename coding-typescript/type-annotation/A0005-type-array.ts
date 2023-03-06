/* eslint-disable */

// Array<T> - T[]
type List = {
  amount: number;
  item1: string;
  item2: string;
  item3: string;
};

function multiplyItems(obj: List, times: number): List[] {
  let arr: List[] = [];
  for (let time = 0; time < times; time++) {
    arr.push(obj);
  }
  return arr;
}

const list: List[] = multiplyItems(
  {
    amount: 3,
    item1: 'Grape',
    item2: 'Strawberry',
    item3: 'Cake',
  },
  5,
);
console.log(list);
