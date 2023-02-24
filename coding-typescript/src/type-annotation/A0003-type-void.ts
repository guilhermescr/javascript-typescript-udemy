/* eslint-disable */

function consoleLog(...args: number[]): void {
  console.log(...args);
}

const person = {
  $name: 'Gui',
  $surname: 'Rocha',

  showName(): void {
    console.log(this.$name, this.$surname);
  },
};

consoleLog(2, 5, 6, 9, 254);
console.log(person.showName());

export { person };
