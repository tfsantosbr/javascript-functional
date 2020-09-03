// Exemplo executando multiplas promises e retornando os dados
// quando todas estiverem resolvidas

const gerarNumeroAleatorio = (min, max, tempo) => {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio);
    }, tempo);
  });
};

const gerarVariosNumeros = () => {
  return Promise.all([
    gerarNumeroAleatorio(1, 60, 4000),
    gerarNumeroAleatorio(1, 60, 1000),
    gerarNumeroAleatorio(1, 60, 3000),
    gerarNumeroAleatorio(1, 60, 2000),
    gerarNumeroAleatorio(1, 60, 500),
  ]);
};

gerarVariosNumeros().then(console.log);
