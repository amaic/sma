import { ServiceCollection } from "@amaic/dijs";
import "@amaic/dijs-extensions-registration";
import { IStateManager, IStateManagerIdentifier, IStateManagerStorage, IStateManagerStorageIdentifier, StateManager, StateManagerLocalStorage, StateManagerLocalStorageType } from "../src";
import StateKey from "../src/classes/StateKey";

describe("StateManager", () =>
{
    test("create manager, set and get state", async () =>
    {
        const serviceCollection = new ServiceCollection();

        serviceCollection.AddTransientClass<IStateManager, typeof StateManager>(IStateManagerIdentifier, StateManager,
            (classType, serviceProvider) => new classType(serviceProvider.GetRequiredServices(IStateManagerStorageIdentifier)));

        serviceCollection.AddTransientClass<IStateManagerStorage, typeof StateManagerLocalStorage>(IStateManagerStorageIdentifier, StateManagerLocalStorage);

        const serviceProvider = serviceCollection.CreateServiceProvider();

        const stateManager = serviceProvider.GetRequiredService<IStateManager>(IStateManagerIdentifier);

        const registeredStorageTypes = stateManager.GetRegisteredStorageTypes();

        expect(stateManager).toBeInstanceOf(StateManager);

        expect(registeredStorageTypes.length).toBe(1);

        expect(registeredStorageTypes).toContain(StateManagerLocalStorageType);

        const skTest = new StateKey(StateManagerLocalStorageType, "test");

        const skTestValue_original = "hello world!";

        await stateManager.SetState(skTest, skTestValue_original);

        const skTestValue = await stateManager.GetState(skTest);

        expect(skTestValue).toBe(skTestValue_original);
    });

});