/**
 * Scope keys are within; comparable with a namespace.
 */
export default interface IStateKeyScope {
    IStateKeyScope: symbol;
    /** Unique identifier of the scope. */
    get Scope(): string;
}
/** Unique identifier of IStateKeyScope. */
export declare const IStateKeyScopeIdentitfier: unique symbol;
/**
 * Test if a object implements IStateKeyScope.
 * @param instance test object
 * @returns if implements IStateKeyScope then true else false
 */
export declare function IsIStateKeyScope(instance: any): instance is IStateKeyScope;
//# sourceMappingURL=IStateKeyScope.d.ts.map