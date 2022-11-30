"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIStateManager = exports.IStateManagerIdentifier = void 0;
exports.IStateManagerIdentifier = Symbol("IStateMananger");
function IsIStateManager(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IStateManager) === exports.IStateManagerIdentifier;
}
exports.IsIStateManager = IsIStateManager;
//# sourceMappingURL=IStateManager.js.map