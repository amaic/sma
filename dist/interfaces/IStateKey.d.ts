import { StateType } from "../types/StateType";
import IStateKeyScope from "./IStateKeyScope";
export default interface IStateKey {
    IStateKey: symbol;
    get StateType(): StateType;
    get Key(): string;
    get Scope(): IStateKeyScope | null;
    get FullQualifiedName(): string;
}
export declare const IStateKeyIdentifier: unique symbol;
export declare function IsIStateKey(instance: any): instance is IStateKey;
//# sourceMappingURL=IStateKey.d.ts.map