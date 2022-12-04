export default class StorageTypeNotRegistered extends Error
{
    constructor(message: string = "Storage type not registered.")
    {
        super(message);
    }
}