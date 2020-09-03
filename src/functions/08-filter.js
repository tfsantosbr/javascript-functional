// Filter
// Filtra os dados de um array em um novo array

// Exemplo 1

const numbers = [3, 6, 8, 10, 7];
const greaterThanSeven = (n) => n > 6;
console.log(numbers.filter(greaterThanSeven));

// Exemplo 2

const cart = [
  { name: "Caneta", quantity: 10, price: 7.99 },
  { name: "Impressora", quantity: 0, price: 649.5 },
  { name: "Caderno", quantity: 4, price: 27.1 },
  { name: "Lapis", quantity: 3, price: 5.82 },
  { name: "Tesoura", quantity: 1, price: 19.2 },
];

const quantityGreaterThanTwo = (n) => n.quantity > 2;
const getName = (n) => n.name;

const validItens = cart
    .filter(quantityGreaterThanTwo)
    .map(getName);

console.log(validItens);
