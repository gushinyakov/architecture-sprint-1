import { PlaceCard } from "../models/place";
declare class PlaceApi {
    private _token;
    private _groupId;
    private _address;
    constructor({ token, groupId, address, }: {
        token: string;
        groupId: string;
        address: string;
    });
    getCardList(): Promise<PlaceCard[]>;
    addCard({ name, link }: Pick<PlaceCard, 'name' | 'link'>): Promise<any>;
    removeCard(cardID: string): Promise<any>;
    changeLikeCardStatus(cardID: string, like: boolean): Promise<any>;
}
declare const placeApi: PlaceApi;
export default placeApi;
