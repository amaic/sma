import IStateManagerStorage from "../interfaces/IStateManagerStorage";
export default class StateManagerLocalStorage implements IStateManagerStorage {
    IStateManagerStorage: symbol;
    constructor();
    get StorageType(): symbol;
    private _getFullQualifiedKey;
    SetState(scope: string | null, key: string, value: string | null): Promise<void>;
    GetState(scope: string | null, key: string): Promise<string | null>;
}
export declare const StateManagerLocalStorageType: unique symbol;
//# sourceMappingURL=StateManagerLocalStorage.d.ts.map