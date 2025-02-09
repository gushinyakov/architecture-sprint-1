export default class AppStorage {
    constructor() {
        if (this.constructor == AppStorage) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    setItem(key, value) {
        throw new Error("Abstract classes can't be instantiated.");
    }

    getItem(key) {
        throw new Error("Abstract classes can't be instantiated.");
    }
}