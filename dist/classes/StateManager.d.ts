import IStateManager from "../interfaces/IStateManager";
import IStateManagerStorage from "../interfaces/IStateManagerStorage";
import StateKey from "./StateKey";
export default class StateManager implements IStateManager {
    IStateManager: symbol;
    constructor();
    private _storages;
    private _getStorage;
    RegisterStorage(storageType: symbol, storage: IStateManagerStorage): void;
    SetState(stateKey: StateKey, value: string | null): Promise<void>;
    GetState(stateKey: StateKey): Promise<string | null>;
}
//# sourceMappingURL=StateManager.d.ts.map