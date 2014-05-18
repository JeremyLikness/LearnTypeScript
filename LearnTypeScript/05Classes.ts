interface IAmCallback {
    (payload?: any): void;
}

interface ISub {
    (callback: IAmCallback): number;
}

interface ISubscription {
    id: number;
    callback: IAmCallback;
}

interface IMsg {
    sub: ISub;
    unSub(id: number): void;
    pub(payload?: any): void;
}

class Subscription implements ISubscription {
    constructor(public id: number, public callback: IAmCallback) { }
}

// comment out property to show intellisense
class Message implements IMsg {

    private subscriptionList: Subscription[];
    private nextId: number;

    constructor(public messageName: string) {
        this.subscriptionList = [];
        this.nextId = 0;
    }

    public sub(callback: ICallback): number {
        var sub: Subscription;
        this.nextId += 1;
        sub = new Subscription(this.nextId, callback);
        this.subscriptionList[sub.id] = sub;
        return sub.id;
    }

    public unSub(id: number): void {
        this.subscriptionList[id] = undefined;
    }

    public pub(payload?: any) {
        var index: number;
        for (index = 0; index < this.subscriptionList.length; index += 1) {
            if (this.subscriptionList[index]) {
                this.subscriptionList[index].callback(payload);
            }
        }
    }
}

var message = new Message("notify"); 
var subId = message.sub(payload => console.log(payload));
message.pub({ a: 1, b: 2, error: 'hereItIs' });
message.unSub(subId); 

class BasicShape {
    constructor(public sides: number) { }    
}

// ES5
class SquareShape extends BasicShape {
    constructor(private lenOfSide: number) {
        super(4);
    }
    get lengthOfSide(): number {
        return this.lenOfSide;
    }

    set lengthOfSide(len: number) {
        if (len <= 0) {
            throw "Must have a positive length for a side";
        }
        this.lenOfSide = len;
    }
}

var square = new SquareShape(4); 
square.lengthOfSide = -1; // error 

// read-only
class RectangleShape extends BasicShape {
    constructor(public width: number, public height: number) {
        super(4);
    }
    get area(): number {
        return this.width * this.height;
    }
}

