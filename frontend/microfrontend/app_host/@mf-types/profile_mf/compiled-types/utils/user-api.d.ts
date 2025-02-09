import { User } from "../models";
declare class UserApi {
    private _token;
    private _groupId;
    private _address;
    constructor({ token, groupId, address, }: {
        token: string;
        groupId: string;
        address: string;
    });
    getUserInfo(): Promise<User>;
    setUserInfo({ name, about }: Pick<User, 'name' | 'about'>): Promise<any>;
    setUserAvatar({ avatar }: Pick<User, 'avatar'>): Promise<any>;
}
declare const userApi: UserApi;
export default userApi;
