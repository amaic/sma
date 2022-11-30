export default class InvalidStateType extends Error
{
    constructor(message: string = "Invalid state type.")
    {
        super(message);
    }
}