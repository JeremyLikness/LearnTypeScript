var a = [], b = {}, c = a + b, d = a - b;

// inferred types
console.log(c);
console.log(d);

// ------------------------------------------------
var a1 = [], b1 = {}, c1 = a1 + b1, d1 = a1 - b1;

// inferred types
console.log(c1);
console.log(d1);

// ------------------------------------------------
var flag = true;
flag = 1;

var age = 39;

var name = 'Jeremy';

var names = ['a', 'b'];
names.push(1);

var ages = [35, 36];
ages.push('Jeremy');

var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
var mySize = 0 /* Small */;

var Shape;
(function (Shape) {
    Shape[Shape["Square"] = 1] = "Square";
    Shape[Shape["Rectangle"] = 2] = "Rectangle";
    Shape[Shape["Circle"] = 4] = "Circle";
    Shape[Shape["Triangle"] = 8] = "Triangle";
})(Shape || (Shape = {}));
;
var myShape = 4 /* Circle */;
var myShapeName = Shape[1 /* Square */];

function add(a, b) {
    return a + b;
}

function log(msg) {
    console.log(msg);
}
//# sourceMappingURL=01BasicTypes.js.map
