import IStateMananger from "../interfaces/IStateManager";
import StateKey from "./StateKey";
export default class StateManager implements IStateMananger {
    IStateManager: symbol;
    constructor();
    SetState(stateKey: StateKey, value: string | null): Promise<void>;
    GetState(stateKey: StateKey): Promise<string | null>;
}
//# sourceMappingURL=StateManager.d.ts.map