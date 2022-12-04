import StorageTypeAlreadyRegistered from "../errors/StorageTypeAlreadyRegistered";
import StorageTypeNotRegistered from "../errors/StorageTypeNotRegistered";
import IStateMananger, { IStateManagerIdentifier } from "../interfaces/IStateManager";
import IStateManagerStorage from "../interfaces/IStateManagerStorage";
import StateKey from "./StateKey";

export default class StateManager implements IStateMananger
{
    IStateManager: symbol = IStateManagerIdentifier;

    constructor()
    {

    }

    private _storages: { [storageType: symbol]: IStateManagerStorage } = {};
    private _getStorage(storageType: symbol): IStateManagerStorage
    {
        const storage = this._storages[storageType];

        if (storage == undefined)
            throw new StorageTypeNotRegistered();

        return storage;
    }

    public RegisterStorage(storageType: symbol, storage: IStateManagerStorage): void
    {
        if (this._storages[storageType] != undefined)
            throw new StorageTypeAlreadyRegistered();

        this._storages[storageType] = storage;
    }

    public async SetState(stateKey: StateKey, value: string | null): Promise<void>
    {
        const storage = this._getStorage(stateKey.StorageType);

        storage.SetState(stateKey.Scope?.Scope ?? null, stateKey.Key, value);

        // switch (stateKey.StorageType)
        // {
        //     case StateType.Local:

        //         if (value == null)
        //         {
        //             sessionStorage.removeItem(stateKey.FullQualifiedName);
        //         }
        //         else
        //         {
        //             sessionStorage.setItem(stateKey.FullQualifiedName, value);
        //         }
        //         break;

        //     case StateType.Navigate:

        //         const queryParameters = new URLSearchParams(window.location.search);
        //         if (value == null)
        //         {
        //             if (queryParameters.has(stateKey.FullQualifiedName))
        //             {
        //                 queryParameters.delete(stateKey.FullQualifiedName);
        //             }
        //         }
        //         else
        //         {
        //             queryParameters.set(stateKey.FullQualifiedName, value);
        //         }
        //         window.location.search = queryParameters.toString();
        //         break;

        //     default:
        //         throw new InvalidStateType();
        // }
    }

    public async GetState(stateKey: StateKey): Promise<string | null>
    {
        const storage = this._getStorage(stateKey.StorageType);

        return await storage.GetState(stateKey.Scope?.Scope ?? null, stateKey.Key);

        // switch (stateKey.StorageType)
        // {
        //     case StateType.Local:

        //         return sessionStorage.getItem(stateKey.FullQualifiedName);

        //     case StateType.Navigate:

        //         const queryParameters = new URLSearchParams(window.location.search);
        //         if (queryParameters.has(stateKey.FullQualifiedName))
        //         {
        //             return queryParameters.get(stateKey.FullQualifiedName);
        //         }
        //         else
        //         {
        //             return null;
        //         }

        //     default:
        //         throw new InvalidStateType();
        // }
    }
}