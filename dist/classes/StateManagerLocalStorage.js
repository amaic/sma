"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const IStateManagerStorage_1 = require("../interfaces/IStateManagerStorage");
class StateManagerLocalStorage {
    constructor() {
        this.IStateManagerStorage = IStateManagerStorage_1.IStateManagerStorageIdentifier;
    }
    _getFullQualifiedKey(scope, key) {
        return scope == null ? key : `${scope}.${key}`;
    }
    SetState(scope, key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullQualifiedKey = this._getFullQualifiedKey(scope, key);
            if (value == null) {
                window.localStorage.removeItem(fullQualifiedKey);
            }
            else {
                window.localStorage.setItem(fullQualifiedKey, value);
            }
        });
    }
    GetState(scope, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullQualifiedKey = this._getFullQualifiedKey(scope, key);
            return window.localStorage.getItem(fullQualifiedKey);
        });
    }
}
exports.default = StateManagerLocalStorage;
//# sourceMappingURL=StateManagerLocalStorage.js.map