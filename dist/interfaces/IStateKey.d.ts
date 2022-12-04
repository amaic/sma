import IStateKeyScope from "./IStateKeyScope";
export default interface IStateKey {
    IStateKey: symbol;
    get StorageType(): symbol;
    get Key(): string;
    get Scope(): IStateKeyScope | null;
    get FullQualifiedName(): string;
}
export declare const IStateKeyIdentifier: unique symbol;
export declare function IsIStateKey(instance: any): instance is IStateKey;
//# sourceMappingURL=IStateKey.d.ts.map