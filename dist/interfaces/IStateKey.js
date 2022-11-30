"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIStateKey = exports.IStateKeyIdentifier = void 0;
exports.IStateKeyIdentifier = Symbol("IStateKey");
function IsIStateKey(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IStateKey) === exports.IStateKeyIdentifier;
}
exports.IsIStateKey = IsIStateKey;
//# sourceMappingURL=IStateKey.js.map