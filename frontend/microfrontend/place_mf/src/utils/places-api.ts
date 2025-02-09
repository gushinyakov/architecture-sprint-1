import { PlaceCard } from "../models/place";

class PlaceApi {
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

    getCardList(): Promise<PlaceCard[]> {
        return fetch(`${this._address}/${this._groupId}/cards`, {
            headers: {
                authorization: this._token,
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

    addCard({ name, link }: Pick<PlaceCard, 'name' | 'link'>) {
        return fetch(`${this._address}/${this._groupId}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                link,
            }),
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

    removeCard(cardID: string) {
        return fetch(`${this._address}/${this._groupId}/cards/${cardID}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

    changeLikeCardStatus(cardID: string, like: boolean) {
        // Обычная реализация: 2 разных метода для удаления и постановки лайка.
        return fetch(`${this._address}/${this._groupId}/cards/like/${cardID}`, {
            method: like ? 'PUT' : 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }
}

const placeApi = new PlaceApi({
    address: 'https://nomoreparties.co',
    groupId: `cohort0`,
    token: `80a75492-21c5-4330-a02f-308029e94b63`,
});

export default placeApi;
