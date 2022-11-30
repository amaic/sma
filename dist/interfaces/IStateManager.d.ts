import StateKey from "../classes/StateKey";
export default interface IStateMananger {
    IStateManager: symbol;
    SetState(stateKey: StateKey, value: string | null): Promise<void>;
    GetState(stateKey: StateKey): Promise<string | null>;
}
export declare const IStateManagerIdentifier: unique symbol;
export declare function IsIStateManager(instance: any): instance is IStateMananger;
//# sourceMappingURL=IStateManager.d.ts.map