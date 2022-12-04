export default interface IStateManagerStorage
{
    IStateManagerStorage: symbol;

    SetState(scope: string | null, key: string, value: string | null): Promise<void>;

    GetState(scope: string | null, key: string): Promise<string | null>;    
}

export const IStateManagerStorageIdentifier = Symbol("IStateManagerStorage");

export function IsIStateManagerStorage(instance: any): instance is IStateManagerStorage
{ 
    return instance?.IStateManagerStorage === IStateManagerStorageIdentifier;
}