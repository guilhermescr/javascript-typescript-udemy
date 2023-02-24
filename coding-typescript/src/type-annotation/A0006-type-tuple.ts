/* eslint-disable */
const items: any[] = [
  'One',
  'Two',
  ['Three', 'Four', ['Five', 'Six', ['Seven', 'Eight', ['Nine', 'Ten']]]],
];

function lookUpAllTheItems(arr: any[]): void {
  arr.map((item) => {
    if (typeof item === 'object' && item.length) {
      lookUpAllTheItems(item);
      return;
    }
    console.log(item);
  });
}
lookUpAllTheItems(items);

const clientData: [number, string, string[]?] = [1, 'Guiga'];
console.log(clientData);

clientData[0] = 20;
clientData[2] = ['Inside', 'Outside'];
