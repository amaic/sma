import StateKey from "../classes/StateKey";
import { StateType } from "../types/StateType";

export default interface IStateMananger
{
    IStateManager: symbol;

    SetState(stateKey: StateKey, value: string | null): Promise<void>;

    GetState(stateKey: StateKey): Promise<string | null>;
}

export const IStateManagerIdentifier = Symbol("IStateMananger")

export function IsIStateManager(instance: any): instance is IStateMananger
{
    return instance?.IStateManager === IStateManagerIdentifier;
}
