
export abstract class AppAuthApi {

    abstract register(email: string, password: string): Promise<unknown>

    abstract login(email: string, password: string): Promise<{ token: string }>

    abstract checkToken(token: string): Promise<{ data: { email: string } }>
}

class NomorepartiesAuthApi extends AppAuthApi {
    private _address: string;

    constructor({
        address
    }: {
        address: string;
    }) {
        super();
        this._address = address
    }

    async register(email: string, password: string): Promise<unknown> {
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

    async login(email: string, password: string): Promise<{ token: string }> {
        return fetch(`${this._address}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(this._getResponse)
    }

    async checkToken(token: string): Promise<{ data: { email: string } }> {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._getResponse)
    }

    _getResponse(res: any): Promise<any> {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }
}


const inject = (impl: string) => {
    switch (impl) {
        case 'nomoreparties':
            return new NomorepartiesAuthApi({
                address: 'https://auth.nomoreparties.co'
            });
        default:
            throw new ReferenceError(`Ошибка при инициализации auth-api: неизвестная имплементаци ${impl}`)
    }
}

// TODO: где лучще делать inject?
const apiAuth = inject('nomoreparties')

export default apiAuth