// somar(3)(4)(5)

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(somar(3)(4)(5));

// calcular(3)(7)(fn)

function calculate(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

console.log(calculate(3)(7)(sum));
console.log(calculate(3)(7)(subtract));
console.log(calculate(3)(7)(multiply));
