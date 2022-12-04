export default class StorageTypeAlreadyRegistered extends Error
{
    constructor(message: string = "Storage type already registered.")
    {
        super(message);
    }
}