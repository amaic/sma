import IStateManagerStorage, { IStateManagerStorageIdentifier } from "../interfaces/IStateManagerStorage";

export default class StateManagerLocalStorage implements IStateManagerStorage
{
    readonly IStateManagerStorage: symbol = IStateManagerStorageIdentifier;

    constructor() { }

    public get StorageType(): symbol
    {
        return StateManagerLocalStorageType;
    }

    private _getFullQualifiedKey(scope: string | null, key: string): string
    {
        return scope == null ? key : `${ scope }.${ key }`;
    }

    public async SetState(scope: string | null, key: string, value: string | null): Promise<void>
    {
        const fullQualifiedKey = this._getFullQualifiedKey(scope, key);

        if (value == null)
        {
            window.localStorage.removeItem(fullQualifiedKey);
        }
        else
        {
            window.localStorage.setItem(fullQualifiedKey, value);
        }
    }
    public async GetState(scope: string | null, key: string): Promise<string | null>
    {
        const fullQualifiedKey = this._getFullQualifiedKey(scope, key);

        return window.localStorage.getItem(fullQualifiedKey);
    }
}

export const StateManagerLocalStorageType = Symbol("StateManagerLocalStorage");