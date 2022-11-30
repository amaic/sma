import IStateKey from "../interfaces/IStateKey";
import { StateType } from "../types/StateType";
export default class StateKey implements IStateKey {
    IStateKey: symbol;
    constructor(stateType: StateType, key: string);
    private _stateType;
    get StateType(): StateType;
    private _key;
    get Key(): string;
}
//# sourceMappingURL=StateKey.d.ts.map