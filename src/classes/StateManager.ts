import StorageTypeNotRegistered from "../errors/StorageTypeNotRegistered";
import IStateManager, { IStateManagerIdentifier } from "../interfaces/IStateManager";
import IStateManagerStorage from "../interfaces/IStateManagerStorage";
import StateKey from "./StateKey";

export default class StateManager implements IStateManager
{
    readonly IStateManager: symbol = IStateManagerIdentifier;

    constructor(storages: IStateManagerStorage[])
    {
        for (const storage of storages)
        {
            this._storages[storage.StorageType] = storage;
        }
    }

    private _storages: { [storageType: symbol]: IStateManagerStorage } = {};

    private _getStorage(storageType: symbol): IStateManagerStorage
    {
        const storage = this._storages[storageType];

        if (storage == undefined)
            throw new StorageTypeNotRegistered();

        return storage;
    }

    public async SetState(stateKey: StateKey, value: string | null): Promise<void>
    {
        const storage = this._getStorage(stateKey.StorageType);

        storage.SetState(stateKey.Scope?.Scope ?? null, stateKey.Key, value);
    }

    public async GetState(stateKey: StateKey): Promise<string | null>
    {
        const storage = this._getStorage(stateKey.StorageType);

        return await storage.GetState(stateKey.Scope?.Scope ?? null, stateKey.Key);
    }

    public GetRegisteredStorageTypes(): symbol[]
    {
        return Object.getOwnPropertySymbols(this._storages);
    }
}