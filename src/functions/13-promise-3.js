// Exemplo gerando uma promisse a partir de um código sincrono

const gerarNumeroAleatorio = (min, max) => {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    resolve(aleatorio);
  });
};

gerarNumeroAleatorio(1, 60)
  .then((num) => num * 10)
  .then((resultado) => `O número gerado foi ${resultado}`)
  .then(console.log);
