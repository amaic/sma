import IStateKeyScope from "../interfaces/IStateKeyScope";
export default class StateKeyScope implements IStateKeyScope {
    readonly IStateKeyScope: symbol;
    constructor(scope: string);
    private _scope;
    get Scope(): string;
}
//# sourceMappingURL=StateKeyScope.d.ts.map