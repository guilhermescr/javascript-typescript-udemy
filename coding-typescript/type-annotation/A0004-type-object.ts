const objectA: {
  readonly keyA: string;
  keyB: string;
} = {
  keyA: 'A',
  keyB: 'B',
};

objectA.keyB = 'b';

console.log(objectA);
