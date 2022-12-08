import IStateKeyScope from "./IStateKeyScope";
/**
 * A unique identifier(in combination with scope) for a certain state.
 */
export default interface IStateKey {
    IStateKey: symbol;
    /** Unique identifier for a storage the state is stored. */
    get StorageType(): symbol;
    /** Unique identifier within a scope. */
    get Key(): string;
    /** Scope the key is within; comparable with a namespace. */
    get Scope(): IStateKeyScope | null;
    /** Returns a combination of key and scope. */
    get FullQualifiedName(): string;
}
/** Unique identifier of IStateKey. */
export declare const IStateKeyIdentifier: unique symbol;
/**
 * Test if a object implements IStateKey.
 * @param instance test object
 * @returns if implements IStateKey then true else false
 */
export declare function IsIStateKey(instance: any): instance is IStateKey;
//# sourceMappingURL=IStateKey.d.ts.map