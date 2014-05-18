function applyMath(a, b, operation) {
    return operation(a, b);
}

var adder = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
var divide = function (a, b) {
    return a / b;
};

var sum = adder(1, 2);
var diff = subtract(2, 1);
var bad = multiply(1, 2);

var $;
$(function () {
});
$.ready(function () {
});
//# sourceMappingURL=03FunctionTypes.js.map
