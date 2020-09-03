// Exemplo 1

const promise = new Promise((resolve) => {
  resolve(3);
});

promise.then((value) => console.log(value));

// Exemplo 2 - Multiplos Thens

const promise2 = new Promise((resolve) => {
  resolve(["Ana", "Bia", "Bruna"]);
});

promise2
  .then((array) => array[0])
  .then((firstElement) => firstElement[0])
  .then((firstLetter) => firstLetter.toLowerCase())
  .then((lowerCaseLetter) => console.log(lowerCaseLetter));

// Exemplo 3 - Multiplos Thens (Simplificado)

const promise3 = new Promise((resolve) => {
  resolve(["Ana", "Bia", "Bruna"]);
});

const firstElement = (value) => value[0];
const lowerCaseLetter = (firstLetter) => firstLetter.toLowerCase();
const primeitoElemento = (array) => array[0];

promise3
  .then(firstElement) // primeiro elemento do array
  .then(firstElement) // primeiro elemento da palavra
  .then(lowerCaseLetter)
  .then(console.log);
