export default interface IStateKeyScope
{
    IStateKeyScope: symbol;

    get Scope(): string;
}

export const IStateKeyScopeIdentitfier = Symbol("IStateKeyScope");

export function IsIStateKeyScope(instance: any): instance is IStateKeyScope
{
    return instance?.IStateKeyScope === IStateKeyScopeIdentitfier;
}