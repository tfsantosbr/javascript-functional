// executing functions inside functions

function execFunction(fn){
    fn();
}

function hello(){
    console.log('Hello');
}

function goodNight(){
    console.log('Good Night!!!');
}

execFunction(hello);
execFunction(goodNight);

// return function inside another function

function pow(a){
    return function(b){
        return Math.pow(a,b);
    }
}

const powResult = pow(2);
const powResult28 = powResult(8);
console.log(powResult28);
console.log(pow(2)(8));