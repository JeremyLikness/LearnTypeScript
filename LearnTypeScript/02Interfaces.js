// intellisense and restriction
function getId(objWithId) {
    return objWithId.id;
}

var id = getId({ name: 'Jeremy' });
var id2 = getId({ id: 2, name: 'Jeremy' });

function show(obj) {
    console.log(obj.id);
    if (obj.name) {
        console.log(obj.name);
    }
}

show({ id: 1 });
show({ id: 2, name: 'Jeremy' });
show({ name: 'Jeremy' });

var objWithName = { id: 3, name: 'Jeremy' };
var myName = objWithName.namme;

var thing = { width: 5, height: 4 };
//# sourceMappingURL=02Interfaces.js.map
