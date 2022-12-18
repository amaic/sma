import StateKey from "../classes/StateKey";
/**
 * The StateManager is the place where different storages can be registered,
 * states saved or retrieved.
 */
export default interface IStateManager {
    IStateManager: symbol;
    /**
     * Save a certain state value or delete it by using null.
     * @param stateKey unique identifier of state
     * @param value value to store or null to delete
     */
    SetState(stateKey: StateKey, value: string | null): Promise<void>;
    /**
     * Retrieve a certain state by StateKey.
     * @param stateKey the stored state or null if no state is available
     */
    GetState(stateKey: StateKey): Promise<string | null>;
    /**
     * Get list of registered storage types.
     */
    GetRegisteredStorageTypes(): symbol[];
}
/** Unique identifier of IStateManager */
export declare const IStateManagerIdentifier: unique symbol;
/**
 * Test if a object implements IStateManager.
 * @param instance test object
 * @returns if implements IStateManager then true else false
 */
export declare function IsIStateManager(instance: any): instance is IStateManager;
//# sourceMappingURL=IStateManager.d.ts.map