import { ServiceCollection } from "@amaic/dijs";
import "@amaic/dijs-extensions-registration";
import { IStateManager, IStateManagerIdentifier, IStateManagerStorage, IStateManagerStorageIdentifier, StateKey, StateManager, StateManagerLocationStorage, StateManagerLocationStorageType } from "../src";


describe("StateManagerLocationStorage", () =>
{
    test("set and get state", async () =>
    {
        let searchValue = "";

        delete (window as any).location;

        (window as any).location =
        {
            get search(): string { return searchValue },
            set search(value: string) { searchValue = value }
        }

        const serviceCollection = new ServiceCollection();

        serviceCollection.AddTransientClass<IStateManager, typeof StateManager>(IStateManagerIdentifier, StateManager,
            (classType, serviceProvider) => new classType(serviceProvider.GetRequiredServices(IStateManagerStorageIdentifier)));

        serviceCollection.AddTransientClass<IStateManagerStorage, typeof StateManagerLocationStorage>(IStateManagerStorageIdentifier, StateManagerLocationStorage);

        const serviceProvider = serviceCollection.CreateServiceProvider();

        const stateManager = serviceProvider.GetRequiredService<IStateManager>(IStateManagerIdentifier);

        const skTest = new StateKey(StateManagerLocationStorageType, "test");

        const skTestValue_original = "hello world!";

        await stateManager.SetState(skTest, skTestValue_original);

        const skTestValue = await stateManager.GetState(skTest);

        expect(skTestValue).toBe(skTestValue_original);
    });

});