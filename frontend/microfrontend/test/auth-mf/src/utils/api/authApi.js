export default class AppAuthApi {

    constructor() {
        if (this.constructor == AppAuthApi) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    async register(email, password) {
        throw new Error("Abstract classes can't be instantiated.");
    }

    async login(email, password) {
        throw new Error("Abstract classes can't be instantiated.");
    }

    async checkToken(token) {
        throw new Error("Abstract classes can't be instantiated.");
    }
}

// const storage = new LocalStorageImpl()

// const authApi = new NomorepartiesAuthApi({
//     address: 'https://auth.nomoreparties.co',
//     storage,
// })

// export default authApi;
