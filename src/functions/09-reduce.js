// Reduce
// Pode fazer qulauqer coisa com um array

// Exemplo 1 - Somar todos os itens do carrinho

const cart = [
  { name: "Caneta", quantity: 10, price: 7.99 },
  { name: "Impressora", quantity: 0, price: 649.5 },
  { name: "Caderno", quantity: 4, price: 27.1 },
  { name: "Lapis", quantity: 3, price: 5.82 },
  { name: "Tesoura", quantity: 1, price: 19.2 },
];

const getTotal = (item) => item.quantity * item.price;
const sumTotalItems = (acc, el) => acc + el;

const totalItens = cart.map(getTotal);
console.log(totalItens);

const totalCart = totalItens.reduce(sumTotalItems);
console.log(totalCart);
