function where<T>(arr: T[], what: T): number {
    var idx: number;
    for (idx = 0; idx < arr.length; idx += 1) {
        if (arr[idx] === what) {
            return idx;
        }
    }

    return -1;
} 

var names: string[] = ['Jeremy', 'Jeff', 'John'];
var whereName = where(names, 'Jeremy');
var whereName2 = where(names, 2); 

interface IHaveLength {
    length: number;
}

function getLength<T extends IHaveLength>(item: T): number {
    return item.length;
}

var len1 = getLength('Jeremy');
var len2 = getLength(1);
var len3 = getLength({});
var len4 = getLength([1, 2, 3]);

interface IMakeNewThings {
    create(type: 'number'): number;
    create(type: 'string'): string;
    create(type: string): any;    
}

// definitions
var div = document.createElement('div');
var anchor = document.createElement('a');

// check out lib.d.ts 

