import IStateKey from "../interfaces/IStateKey";
import IStateKeyScope from "../interfaces/IStateKeyScope";
import { StateType } from "../types/StateType";
export default class StateKey implements IStateKey {
    IStateKey: symbol;
    constructor(stateType: StateType, key: string, scope?: IStateKeyScope);
    private _stateType;
    get StateType(): StateType;
    private _key;
    get Key(): string;
    private _scope;
    get Scope(): IStateKeyScope | null;
    get FullQualifiedName(): string;
}
//# sourceMappingURL=StateKey.d.ts.map