// Map
// Transforma os dados de um array para outro array

// Exemplo 1

const numbers = [1, 2, 3, 4, 5];
const double = (n) => n * 2;

const duplicatedNumbers = numbers.map(double);
console.log(duplicatedNumbers);

// Exemplo 2

const names = ["Ana", "Bia", "Gui", "Rafa"];
const firstLetter = (text) => text[0];
const firstLettersNames = names.map(firstLetter);
console.log(firstLettersNames);

// Exemplo 3

const cart = [
  { name: "Caneta", quantity: 10, price: 7.99 },
  { name: "Impressora", quantity: 0, price: 649.5 },
  { name: "Caderno", quantity: 4, price: 27.1 },
  { name: "Lapis", quantity: 3, price: 5.82 },
  { name: "Tesoura", quantity: 1, price: 19.2 },
];

const getNamesAndPrices = (item) => ({ name: item.name, price: item.price });
const getNamesAndPricesSimplified = ({ name, price }) => ({ name, price });
const getTotal = (item) => item.price * item.quantity;

console.log(cart.map(getNamesAndPrices));
console.log(cart.map(getNamesAndPricesSimplified));
console.log(cart.map(getTotal));
