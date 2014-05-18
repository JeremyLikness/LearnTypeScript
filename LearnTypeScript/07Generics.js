function where(arr, what) {
    var idx;
    for (idx = 0; idx < arr.length; idx += 1) {
        if (arr[idx] === what) {
            return idx;
        }
    }

    return -1;
}

var names = ['Jeremy', 'Jeff', 'John'];
var whereName = where(names, 'Jeremy');
var whereName2 = where(names, 2);

function getLength(item) {
    return item.length;
}

var len1 = getLength('Jeremy');
var len2 = getLength(1);
var len3 = getLength({});
var len4 = getLength([1, 2, 3]);

// definitions
var div = document.createElement('div');
var anchor = document.createElement('a');
// check out lib.d.ts
//# sourceMappingURL=07Generics.js.map
