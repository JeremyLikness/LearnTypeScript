interface IHaveAnId {
    id: number;
}

// intellisense and restriction
function getId(objWithId: IHaveAnId): number {
    return objWithId.id;
}

var id = getId({ name: 'Jeremy' });
var id2 = getId({ id: 2, name: 'Jeremy' });

interface IMightHaveAName extends IHaveAnId {
    name?: string;
}

function show(obj: IMightHaveAName): void {
    console.log(obj.id);
    if (obj.name) {
        console.log(obj.name);
    }
}

show({ id: 1 }); 
show({ id: 2, name: 'Jeremy' }); 
show({ name: 'Jeremy' }); 

var objWithName: IMightHaveAName = { id: 3, name: 'Jeremy' };
var myName = objWithName.namme; 

interface IHaveWidth {
    width: number;
}

interface IHaveHeight {
    height: number;
}

interface IAm2Dimensional extends IHaveWidth, IHaveHeight { }

var thing: IAm2Dimensional = { width: 5, height: 4 };