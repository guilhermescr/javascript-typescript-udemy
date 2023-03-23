// Abstração
export class Pessoa {
  private name: string;
  private surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
}

// Encapsulamento
export class RemoteControl {
  constructor(private powerStatus = false) {}

  public turnOn(): void {
    this.powerStatus = true;
  }

  public turnOff(): void {
    this.powerStatus = false;
  }

  public getStatus(): boolean {
    return this.powerStatus;
  }
}

const remote_control = new RemoteControl(true);

console.log(remote_control.getStatus());

// Herança
export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} is making ROOF ROOF...`);
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} is making MEOW...`);
  }
}

new Cat('Litten').makeNoise();

// Polimorfismo
class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise();
  }
}

const dog = new Dog('Bolt');
const cat = new Dog('Susu');
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog);
animalSounds.playSound(cat);
