import IStateKey, { IStateKeyIdentifier } from "../interfaces/IStateKey";
import IStateKeyScope from "../interfaces/IStateKeyScope";

export default class StateKey implements IStateKey
{
    IStateKey: symbol = IStateKeyIdentifier;

    constructor(storageType: symbol, key: string, scope?: IStateKeyScope)
    {
        this._storageType = storageType;
        this._key = key;
        this._scope = scope == undefined ? null : scope;
    }

    private _storageType: symbol;
    public get StorageType(): symbol { return this._storageType }

    private _key: string;
    public get Key(): string { return this._key }

    private _scope: IStateKeyScope | null;
    public get Scope(): IStateKeyScope | null { return this._scope; }

    public get FullQualifiedName(): string 
    {
        return this._scope == null ? this._key : `${ this._scope }-${ this._key }`;
    }
}
