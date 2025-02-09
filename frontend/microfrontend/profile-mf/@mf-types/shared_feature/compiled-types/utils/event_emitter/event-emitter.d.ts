export declare abstract class AppEventEmitter {
    dispatch(key: string, value: any): void;
    subscribe(key: string, callback: (value: any) => void): void;
    unsubscribe(key: string, callback: (value: any) => void): void;
}
declare const eventEmitter: AppEventEmitter;
export default eventEmitter;
