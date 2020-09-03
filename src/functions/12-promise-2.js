// Exemplo do Famoso Callback Hell

setTimeout(() => {
  console.log("Executando callback 1...");

  setTimeout(() => {
    console.log("Executando callback 2...");

    setTimeout(() => {
      console.log("Executando callback 3...");
    }, 2000);
  }, 2000);
}, 2000);

// Resolvendo o problema do Callback Hell com promises

const esperarPor = (tempo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve();
    }, tempo);
  });
};

esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor)
    .then(esperarPor);
