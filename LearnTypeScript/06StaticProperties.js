var Counter = (function () {
    function Counter() {
    }
    Counter.prototype.getNumber = function () {
        var result = Counter.nextNumber;
        Counter.nextNumber += 1;
        return result;
    };

    Counter.resetNumber = function () {
        Counter.nextNumber = 1;
    };
    Counter.nextNumber = 1;
    return Counter;
})();

var counter1 = new Counter();
var counter2 = new Counter();
var curCount1 = counter1.getNumber();
var curCount2 = counter2.getNumber();
Counter.resetNumber();
curCount1 = counter1.getNumber(); // 1
//# sourceMappingURL=06StaticProperties.js.map
