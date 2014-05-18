var messages = {};
messages["someMessage"] = {};
messages["anotherMessage"] = {
    subscribe: function (callback) {
        return Math.random();
    },
    unSubscribe: function (id) {
    },
    notify: function (payload) {
    }
};
messages["anotherMessage"].unSubscribe(2);
//# sourceMappingURL=04ArrayTypes.js.map
