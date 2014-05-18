interface ICallback {
    (payload?: any): void;
}

interface ISubscribe {
    (callback: ICallback): number;
}

interface IMessage {
    subscribe: ISubscribe;
    unSubscribe(id: number): void;
    notify(payload?: any): void;
}

var messages: { [messageName: string]: IMessage; } = {}; 
messages["someMessage"] = {
};
messages["anotherMessage"] = {
    subscribe: (callback: ICallback) => Math.random(),
    unSubscribe: (id: number) => { },
    notify: (payload?: any) => { }
};
messages["anotherMessage"].unSubscribe(2);

