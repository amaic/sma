/**
 * Scope keys are within; comparable with a namespace.
 */
export default interface IStateKeyScope
{
    IStateKeyScope: symbol;

    /** Unique identifier of the scope. */
    get Scope(): string;
}

/** Unique identifier of IStateKeyScope. */
export const IStateKeyScopeIdentitfier = Symbol("IStateKeyScope");

/**
 * Test if a object implements IStateKeyScope.  
 * @param instance test object
 * @returns if implements IStateKeyScope then true else false
 */
export function IsIStateKeyScope(instance: any): instance is IStateKeyScope
{
    return instance?.IStateKeyScope === IStateKeyScopeIdentitfier;
}