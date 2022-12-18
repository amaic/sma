import IStateManager from "../interfaces/IStateManager";
import IStateManagerStorage from "../interfaces/IStateManagerStorage";
import StateKey from "./StateKey";
export default class StateManager implements IStateManager {
    readonly IStateManager: symbol;
    constructor(storages: IStateManagerStorage[]);
    private _storages;
    private _getStorage;
    SetState(stateKey: StateKey, value: string | null): Promise<void>;
    GetState(stateKey: StateKey): Promise<string | null>;
    GetRegisteredStorageTypes(): symbol[];
}
//# sourceMappingURL=StateManager.d.ts.map