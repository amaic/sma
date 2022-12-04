import StateKey from "../classes/StateKey";
import IStateManagerStorage from "./IStateManagerStorage";

export default interface IStateMananger
{
    IStateManager: symbol;

    RegisterStorage(storageType: symbol, storage: IStateManagerStorage): void;

    SetState(stateKey: StateKey, value: string | null): Promise<void>;

    GetState(stateKey: StateKey): Promise<string | null>;
}

export const IStateManagerIdentifier = Symbol("IStateMananger")

export function IsIStateManager(instance: any): instance is IStateMananger
{
    return instance?.IStateManager === IStateManagerIdentifier;
}
