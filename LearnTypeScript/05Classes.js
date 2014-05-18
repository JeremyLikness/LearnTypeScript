var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Subscription = (function () {
    function Subscription(id, callback) {
        this.id = id;
        this.callback = callback;
    }
    return Subscription;
})();

// comment out property to show intellisense
var Message = (function () {
    function Message(messageName) {
        this.messageName = messageName;
        this.subscriptionList = [];
        this.nextId = 0;
    }
    Message.prototype.sub = function (callback) {
        var sub;
        this.nextId += 1;
        sub = new Subscription(this.nextId, callback);
        this.subscriptionList[sub.id] = sub;
        return sub.id;
    };

    Message.prototype.unSub = function (id) {
        this.subscriptionList[id] = undefined;
    };

    Message.prototype.pub = function (payload) {
        var index;
        for (index = 0; index < this.subscriptionList.length; index += 1) {
            if (this.subscriptionList[index]) {
                this.subscriptionList[index].callback(payload);
            }
        }
    };
    return Message;
})();

var message = new Message("notify");
var subId = message.sub(function (payload) {
    return console.log(payload);
});
message.pub({ a: 1, b: 2, error: 'hereItIs' });
message.unSub(subId);

var BasicShape = (function () {
    function BasicShape(sides) {
        this.sides = sides;
    }
    return BasicShape;
})();

// ES5
var SquareShape = (function (_super) {
    __extends(SquareShape, _super);
    function SquareShape(lenOfSide) {
        _super.call(this, 4);
        this.lenOfSide = lenOfSide;
    }
    Object.defineProperty(SquareShape.prototype, "lengthOfSide", {
        get: function () {
            return this.lenOfSide;
        },
        set: function (len) {
            if (len <= 0) {
                throw "Must have a positive length for a side";
            }
            this.lenOfSide = len;
        },
        enumerable: true,
        configurable: true
    });

    return SquareShape;
})(BasicShape);

var square = new SquareShape(4);
square.lengthOfSide = -1; // error

// read-only
var RectangleShape = (function (_super) {
    __extends(RectangleShape, _super);
    function RectangleShape(width, height) {
        _super.call(this, 4);
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(RectangleShape.prototype, "area", {
        get: function () {
            return this.width * this.height;
        },
        enumerable: true,
        configurable: true
    });
    return RectangleShape;
})(BasicShape);
//# sourceMappingURL=05Classes.js.map
