class Api {
    constructor({ address }) {
        this._address = address
    }
}

const api = new Api({
    address: 'https://nomoreparties.co'
})

export default api;
