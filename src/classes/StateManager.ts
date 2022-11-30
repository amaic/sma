import InvalidStateType from "../errors/InvalidStateType";
import IStateMananger, { IStateManagerIdentifier } from "../interfaces/IStateManager";
import { StateType } from "../types/StateType";
import StateKey from "./StateKey";

export default class StateManager implements IStateMananger
{
    IStateManager: symbol = IStateManagerIdentifier;

    constructor()
    {

    }

    public async SetState(stateKey: StateKey, value: string | null): Promise<void>
    {
        switch (stateKey.StateType)
        {
            case StateType.Local:

                if (value == null)
                {
                    sessionStorage.removeItem(stateKey.Key);
                }
                else
                {
                    sessionStorage.setItem(stateKey.Key, value);
                }
                break;

            default:
                throw new InvalidStateType();
        }
    }

    public async GetState(stateKey: StateKey): Promise<string | null>
    {
        switch (stateKey.StateType)
        {
            case StateType.Local:

                return sessionStorage.getItem(stateKey.Key);

            default:
                throw new InvalidStateType();
        }
    }
}