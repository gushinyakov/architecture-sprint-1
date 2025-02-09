
export default class NomorepartiesAuthApi extends AppAuthApi {
    constructor({
        address,
    }) {
        this._address = address
    }

    async register(email, password) {
        const res = await fetch(`${this._address}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        return this._getResponse(res);
    };

    async login(email, password) {
        return fetch(`${BASE_URL}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(this._getResponse)
            .then((data) => {
                // this._storage.setItem('jwt', data.token)
                return data;
            })
    }

    async checkToken(token) {
        return fetch(`${BASE_URL}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._getResponse)
    }

    _getResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }
}
