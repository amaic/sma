import IStateManagerStorage from "../interfaces/IStateManagerStorage";
export default class StateManagerLocationStorage implements IStateManagerStorage {
    readonly IStateManagerStorage: symbol;
    constructor();
    get StorageType(): symbol;
    private _getFullQualifiedKey;
    SetState(scope: string | null, key: string, value: string | null): Promise<void>;
    GetState(scope: string | null, key: string): Promise<string | null>;
}
export declare const StateManagerLocationStorageType: unique symbol;
//# sourceMappingURL=StateManagerLocationStorage.d.ts.map