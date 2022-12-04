"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorageTypeNotRegistered extends Error {
    constructor(message = "Storage type not registered.") {
        super(message);
    }
}
exports.default = StorageTypeNotRegistered;
//# sourceMappingURL=StorageTypeNotRegistered.js.map