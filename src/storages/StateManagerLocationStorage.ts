import IStateManagerStorage, { IStateManagerStorageIdentifier } from "../interfaces/IStateManagerStorage";

export default class StateManagerLocationStorage implements IStateManagerStorage
{
    readonly IStateManagerStorage: symbol = IStateManagerStorageIdentifier;

    constructor() { }

    public get StorageType(): symbol
    {
        return StateManagerLocationStorageType;
    }

    private _getFullQualifiedKey(scope: string | null, key: string): string
    {
        return scope == null ? key : `${ scope }-${ key }`;
    }

    public SetState(scope: string | null, key: string, value: string | null): Promise<void>
    {
        const fullQualifiedKey = this._getFullQualifiedKey(scope, key);

        const searchParams = new URLSearchParams(window.location.search);

        if (value == null)
        {
            searchParams.delete(fullQualifiedKey);
        }
        else
        {
            searchParams.set(fullQualifiedKey, value);
        }

        window.location.search = searchParams.toString();

        return Promise.resolve();
    }

    public GetState(scope: string | null, key: string): Promise<string | null>
    {
        const fullQualifiedKey = this._getFullQualifiedKey(scope, key);

        const searchParams = new URLSearchParams(window.location.search);

        const value = searchParams.get(fullQualifiedKey);

        return Promise.resolve(value);
    }
}

export const StateManagerLocationStorageType = Symbol("StateManagerLocationStorage");