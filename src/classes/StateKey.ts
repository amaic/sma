import IStateKey, { IStateKeyIdentifier } from "../interfaces/IStateKey";
import { StateType } from "../types/StateType";

export default class StateKey implements IStateKey
{
    IStateKey: symbol = IStateKeyIdentifier;

    constructor(stateType: StateType, key: string)
    {
        this._stateType = stateType;
        this._key = key;
    }

    private _stateType: StateType;
    public get StateType(): StateType { return this._stateType }

    private _key: string;
    public get Key(): string { return this._key }
}
