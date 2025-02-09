export default class AppEventEmitter {
    constructor() {
        if (this.constructor == AppEventEmitter) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    dispatch(key, value) {
        throw new Error("Abstract classes can't be instantiated.");
    }

    listen(key, callback) {
        throw new Error("Abstract classes can't be instantiated.");
    }

    unsubscribe() {
        throw new Error("Abstract classes can't be instantiated.");
    }
}