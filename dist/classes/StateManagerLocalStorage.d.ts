import IStateManagerStorage from "../interfaces/IStateManagerStorage";
export default class StateManagerLocalStorage implements IStateManagerStorage {
    IStateManagerStorage: symbol;
    constructor();
    private _getFullQualifiedKey;
    SetState(scope: string | null, key: string, value: string | null): Promise<void>;
    GetState(scope: string | null, key: string): Promise<string | null>;
}
//# sourceMappingURL=StateManagerLocalStorage.d.ts.map