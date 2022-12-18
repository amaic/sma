"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManagerLocationStorageType = void 0;
const IStateManagerStorage_1 = require("../interfaces/IStateManagerStorage");
class StateManagerLocationStorage {
    constructor() {
        this.IStateManagerStorage = IStateManagerStorage_1.IStateManagerStorageIdentifier;
    }
    get StorageType() {
        return exports.StateManagerLocationStorageType;
    }
    _getFullQualifiedKey(scope, key) {
        return scope == null ? key : `${scope}-${key}`;
    }
    SetState(scope, key, value) {
        const fullQualifiedKey = this._getFullQualifiedKey(scope, key);
        const searchParams = new URLSearchParams(window.location.search);
        if (value == null) {
            searchParams.delete(fullQualifiedKey);
        }
        else {
            searchParams.set(fullQualifiedKey, value);
        }
        window.location.search = searchParams.toString();
        return Promise.resolve();
    }
    GetState(scope, key) {
        const fullQualifiedKey = this._getFullQualifiedKey(scope, key);
        const searchParams = new URLSearchParams(window.location.search);
        const value = searchParams.get(fullQualifiedKey);
        return Promise.resolve(value);
    }
}
exports.default = StateManagerLocationStorage;
exports.StateManagerLocationStorageType = Symbol("StateManagerLocationStorage");
//# sourceMappingURL=StateManagerLocationStorage.js.map