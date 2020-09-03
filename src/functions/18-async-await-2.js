// Async Await Tratamento de Erro

const gerarNumeroAleatorio = (min, max, numerosProibidos) => {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject('Número Repetido');
    } else {
      resolve(aleatorio);
    }
  });
};

const gerarMegaSena = async (quantidadeNumeros) => {
  try {
    const numeros = [];
    for (let _ of Array(quantidadeNumeros).fill()) {
      numeros.push(await gerarNumeroAleatorio(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    throw `Erro ao tentar gerar os números: ${e}`;
  }
};

gerarMegaSena(8).then(console.log).catch(console.log);
