interface IDoMath {
    (a: number, b: number): number;
}

function applyMath(a: number, b: number, operation: IDoMath): number {
    return operation(a, b);
}

var adder: IDoMath = (a, b) => a + b;
var subtract: IDoMath = (a, b) => a - b;
var multiply: IDoMath = (a, b) => a * b;
var divide: IDoMath = (a, b) => a / b;

var sum = adder(1, 2);
var diff = subtract(2, 1); 
var bad: string = multiply(1, 2);

interface IJQuery {
    (fn: () => void): void;
    ready(fn: () => void): void;
}

var $: IJQuery;
$(() => { });
$.ready(() => { });


