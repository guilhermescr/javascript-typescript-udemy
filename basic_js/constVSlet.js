const person = {
  personName: 'Guilherme',
  surname: 'Rocha',
  age: 17,
  weight: 47,
  heightInM: 1.65
};

// imc: weight / (height * height).
const { personName, surname, age, weight, heightInM } = person;

let bodyMassIndex = (weight / (heightInM * heightInM)).toFixed(2);
let birthYear = new Date().getFullYear() - age;

console.log(`
${personName} ${surname} is ${age} years old, his weight is ${weight}kg, his height is ${heightInM} meters and his Body Mass Index is ${bodyMassIndex}.
${personName} was born in ${birthYear}.
`);
