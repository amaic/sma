/**
 * Storage where states can be stored.
 */
export default interface IStateManagerStorage {
    IStateManagerStorage: symbol;
    /**
     * StateManager calls this method to store state.
     * @param scope unique identifier of scope; can be null
     * @param key unique identifier of state
     * @param value the value to store
     */
    SetState(scope: string | null, key: string, value: string | null): Promise<void>;
    /**
     * StateManager calls this method to retrieve state.
     * @param scope unique identifier of scope; can be null
     * @param key unique identifier of state
     * @returns value of state or null if state is not stored
     */
    GetState(scope: string | null, key: string): Promise<string | null>;
}
export declare const IStateManagerStorageIdentifier: unique symbol;
export declare function IsIStateManagerStorage(instance: any): instance is IStateManagerStorage;
//# sourceMappingURL=IStateManagerStorage.d.ts.map