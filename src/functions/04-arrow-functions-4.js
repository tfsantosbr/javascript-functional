// arrow functions

const anonima = () => console.log("Funcao anonima");

anonima();

// arrow functions with parametters

const completeName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(completeName("Tiago", "Santos"));

// arrow functions rest parameters

const sum = (...numbers) => {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
};

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
