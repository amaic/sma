import { ServiceCollection } from "@amaic/dijs";
import "@amaic/dijs-extensions-registration";
import { IStateManager, IStateManagerIdentifier, IStateManagerStorageIdentifier, StateManager, StateManagerLocalStorage, StateManagerLocalStorageType } from "../src";

describe("StateManager", () =>
{
    test("create", () =>
    {
        const services = new ServiceCollection();

        services.AddTransientClass<IStateManager, typeof StateManager>(IStateManagerIdentifier, StateManager,
            (classType, serviceProvider) => new classType(serviceProvider.GetRequiredServices(IStateManagerStorageIdentifier)));

        services.AddTransientClass(IStateManagerStorageIdentifier, StateManagerLocalStorage);

        const serviceProvider = services.CreateServiceProvider();

        const stateManager = serviceProvider.GetRequiredService<IStateManager>(IStateManagerIdentifier);

        const registeredStorageTypes = stateManager.GetRegisteredStorageTypes();

        expect(stateManager).toBeInstanceOf(StateManager);

        expect(registeredStorageTypes.length).toBe(1);

        expect(registeredStorageTypes).toContain(StateManagerLocalStorageType);
    });
});