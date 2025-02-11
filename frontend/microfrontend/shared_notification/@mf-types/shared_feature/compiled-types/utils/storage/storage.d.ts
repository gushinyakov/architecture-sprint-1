export declare abstract class AppStorage {
    abstract setItem(key: string, value: any): void;
    abstract getItem(key: string): string | null;
    abstract removeItem(key: string): void;
}
declare const storage: AppStorage;
export default storage;
