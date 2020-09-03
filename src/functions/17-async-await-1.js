// Usando Async/Await para executar funcoes assincronas

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(tempo), tempo);
  });
}

// Mesmo código acima escrito de uma maneira mais simples
// da mesma forma retornará uma promisse

async function esperarPorAsync(tempo = 2000) {
  setTimeout(() => {
    return tempo;
  }, tempo);
}

// esperarPor(2000)
//   .then(() => console.log('Executando promise 1...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 2...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 3...'));

async function executar() {
  await esperarPor(2000);
  console.log('Async/Await 1...');

  await esperarPor(2000);
  console.log('Async/Await 2...');

  await esperarPor(2000);
  console.log('Async/Await 3...');
}

executar();
