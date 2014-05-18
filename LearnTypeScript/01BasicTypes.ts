var a = [], b = {}, c = a + b, d = a - b;

// inferred types 
console.log(c); 
console.log(d);

// ------------------------------------------------

var a1: any = [], b1: any = {}, c1 = a1 + b1, d1 = a1 - b1;

// inferred types 
console.log(c1);
console.log(d1);

// ------------------------------------------------

var flag: boolean = true;
flag = 1; 

var age: number = 39; 

var name: string = 'Jeremy'; 

var names: string[] = ['a', 'b'];
names.push(1); 

var ages: Array<number> = [35, 36];
ages.push('Jeremy');

enum Size { Small, Medium, Large };
var mySize = Size.Small; 

enum Shape { Square = 1, Rectangle = 2, Circle = 4, Triangle = 8 };
var myShape = Shape.Circle; 
var myShapeName = Shape[Shape.Square]; 

function add(a: number, b: number): number {
    return a + b;
}

function log(msg: string): void {
    console.log(msg);
}