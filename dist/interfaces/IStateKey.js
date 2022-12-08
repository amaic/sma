"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIStateKey = exports.IStateKeyIdentifier = void 0;
/** Unique identifier of IStateKey. */
exports.IStateKeyIdentifier = Symbol("IStateKey");
/**
 * Test if a object implements IStateKey.
 * @param instance test object
 * @returns if implements IStateKey then true else false
 */
function IsIStateKey(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IStateKey) === exports.IStateKeyIdentifier;
}
exports.IsIStateKey = IsIStateKey;
//# sourceMappingURL=IStateKey.js.map