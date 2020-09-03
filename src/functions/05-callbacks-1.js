// callbacks

const exec = (cb, a, b) => cb(a, b);

const sumOnTerminal = (a, b) => console.log(a + b);
const subtractOnTerminal = (a, b) => console.log(a - b);

exec(sumOnTerminal, 10, 20);
exec(subtractOnTerminal, 10, 20);

// setTimeout with callback

const cbResult = () => console.log("Executou depois de 5 segundos...");
setTimeout(cbResult, 5000);
