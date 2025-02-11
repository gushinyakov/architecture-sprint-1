import { User } from "../models";

class UserApi {
    private _token: string;
    private _groupId: string;
    private _address: string;

    constructor({
        token,
        groupId,
        address,
    }: {
        token: string;
        groupId: string;
        address: string;
    }) {
        this._token = token;
        this._address = address;
        this._groupId = groupId;
    }

    getUserInfo(): Promise<User> {
        return fetch(`${this._address}/${this._groupId}/users/me`, {
            headers: {
                authorization: this._token,
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }


    setUserInfo({ name, about }: Pick<User, 'name' | 'about'>) {
        return fetch(`${this._address}/${this._groupId}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                about,
            }),
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

    setUserAvatar({ avatar }: Pick<User, 'avatar'>) {
        return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                avatar,
            }),
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }
}

const userApi = new UserApi({
    address: 'https://nomoreparties.co',
    groupId: `cohort0`,
    token: `80a75492-21c5-4330-a02f-308029e94b63`,
});

export default userApi;