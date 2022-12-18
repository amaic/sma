import IStateKeyScope, { IStateKeyScopeIdentitfier } from "../interfaces/IStateKeyScope";

export default class StateKeyScope implements IStateKeyScope
{
    readonly IStateKeyScope: symbol = IStateKeyScopeIdentitfier;

    constructor(scope: string)
    {
        this._scope = scope;
    }

    private _scope: string;
    public get Scope(): string
    {
        return this._scope;
    }
}