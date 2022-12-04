"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIStateManagerStorage = exports.IStateManagerStorageIdentifier = void 0;
exports.IStateManagerStorageIdentifier = Symbol("IStateManagerStorage");
function IsIStateManagerStorage(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IStateManagerStorage) === exports.IStateManagerStorageIdentifier;
}
exports.IsIStateManagerStorage = IsIStateManagerStorage;
//# sourceMappingURL=IStateManagerStorage.js.map