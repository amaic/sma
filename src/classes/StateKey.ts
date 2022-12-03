import IStateKey, { IStateKeyIdentifier } from "../interfaces/IStateKey";
import IStateKeyScope from "../interfaces/IStateKeyScope";
import { StateType } from "../types/StateType";

export default class StateKey implements IStateKey
{
    IStateKey: symbol = IStateKeyIdentifier;

    constructor(stateType: StateType, key: string, scope?: IStateKeyScope)
    {
        this._stateType = stateType;
        this._key = key;
        this._scope = scope == undefined ? null : scope;
    }

    private _stateType: StateType;
    public get StateType(): StateType { return this._stateType }

    private _key: string;
    public get Key(): string { return this._key }

    private _scope: IStateKeyScope | null;
    public get Scope(): IStateKeyScope | null { return this._scope; }

    public get FullQualifiedName(): string 
    {
        return this._scope == null ? this._key : `${ this._scope }-${ this._key }`;
    }
}
