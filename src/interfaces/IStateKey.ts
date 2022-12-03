import { StateType } from "../types/StateType";
import IStateKeyScope from "./IStateKeyScope";

export default interface IStateKey
{
    IStateKey: symbol;

    get StateType(): StateType;

    get Key(): string;

    get Scope(): IStateKeyScope | null;

    get FullQualifiedName(): string;
}

export const IStateKeyIdentifier = Symbol("IStateKey");

export function IsIStateKey(instance: any): instance is IStateKey
{
    return instance?.IStateKey === IStateKeyIdentifier;
}
