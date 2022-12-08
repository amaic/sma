"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIStateManager = exports.IStateManagerIdentifier = void 0;
/** Unique identifier of IStateManager */
exports.IStateManagerIdentifier = Symbol("IStateManager");
/**
 * Test if a object implements IStateManager.
 * @param instance test object
 * @returns if implements IStateManager then true else false
 */
function IsIStateManager(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IStateManager) === exports.IStateManagerIdentifier;
}
exports.IsIStateManager = IsIStateManager;
//# sourceMappingURL=IStateManager.js.map