import StateKey from '../src/classes/StateKey';
import StateManager from '../src/classes/StateManager';
// import { StateType } from '../src/types/StateType';

describe("StateManager", () =>
{
    test("create", () =>
    {
        const dummyState = new StateKey(StateType.Local, "dummy");

        const stateManager = new StateManager();

        stateManager.SetState(dummyState, "hello world");

        stateManager.GetState(dummyState);

        
    });
});