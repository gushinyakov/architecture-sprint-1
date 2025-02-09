export declare abstract class AppAuthApi {
    abstract register(email: string, password: string): Promise<unknown>;
    abstract login(email: string, password: string): Promise<{
        token: string;
    }>;
    abstract checkToken(token: string): Promise<{
        data: {
            email: string;
        };
    }>;
}
declare class NomorepartiesAuthApi extends AppAuthApi {
    private _address;
    constructor({ address }: {
        address: string;
    });
    register(email: string, password: string): Promise<unknown>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
    checkToken(token: string): Promise<{
        data: {
            email: string;
        };
    }>;
    _getResponse(res: any): Promise<any>;
}
declare const apiAuth: NomorepartiesAuthApi;
export default apiAuth;
