import { StateType } from "../types/StateType";

export default interface IStateKey
{
    IStateKey: symbol;

    get StateType(): StateType;

    get Key(): string;
}

export const IStateKeyIdentifier = Symbol("IStateKey");

export function IsIStateKey(instance: any): instance is IStateKey
{
    return instance?.IStateKey === IStateKeyIdentifier;
}
