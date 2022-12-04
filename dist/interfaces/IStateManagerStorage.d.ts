export default interface IStateManagerStorage {
    IStateManagerStorage: symbol;
    SetState(scope: string | null, key: string, value: string | null): Promise<void>;
    GetState(scope: string | null, key: string): Promise<string | null>;
}
export declare const IStateManagerStorageIdentifier: unique symbol;
export declare function IsIStateManagerStorage(instance: any): instance is IStateManagerStorage;
//# sourceMappingURL=IStateManagerStorage.d.ts.map