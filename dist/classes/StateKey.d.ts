import IStateKey from "../interfaces/IStateKey";
import IStateKeyScope from "../interfaces/IStateKeyScope";
export default class StateKey implements IStateKey {
    readonly IStateKey: symbol;
    constructor(storageType: symbol, key: string, scope?: IStateKeyScope);
    private _storageType;
    get StorageType(): symbol;
    private _key;
    get Key(): string;
    private _scope;
    get Scope(): IStateKeyScope | null;
    get FullQualifiedName(): string;
}
//# sourceMappingURL=StateKey.d.ts.map