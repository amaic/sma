"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIStateKeyScope = exports.IStateKeyScopeIdentitfier = void 0;
/** Unique identifier of IStateKeyScope. */
exports.IStateKeyScopeIdentitfier = Symbol("IStateKeyScope");
/**
 * Test if a object implements IStateKeyScope.
 * @param instance test object
 * @returns if implements IStateKeyScope then true else false
 */
function IsIStateKeyScope(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IStateKeyScope) === exports.IStateKeyScopeIdentitfier;
}
exports.IsIStateKeyScope = IsIStateKeyScope;
//# sourceMappingURL=IStateKeyScope.js.map