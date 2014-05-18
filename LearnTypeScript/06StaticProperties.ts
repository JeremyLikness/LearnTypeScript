class Counter {
    private static nextNumber: number = 1; 

    public getNumber(): number {
        var result = Counter.nextNumber;
        Counter.nextNumber += 1;
        return result;
    }

    public static resetNumber(): void {
        Counter.nextNumber = 1;
    }
}

var counter1 = new Counter(); 
var counter2 = new Counter(); 
var curCount1: number = counter1.getNumber(); // 1 
var curCount2: number = counter2.getNumber(); // 2 
Counter.resetNumber(); 
curCount1 = counter1.getNumber(); // 1 