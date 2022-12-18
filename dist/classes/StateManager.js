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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StorageTypeNotRegistered_1 = __importDefault(require("../errors/StorageTypeNotRegistered"));
const IStateManager_1 = require("../interfaces/IStateManager");
class StateManager {
    constructor(storages) {
        this.IStateManager = IStateManager_1.IStateManagerIdentifier;
        this._storages = {};
        for (const storage of storages) {
            this._storages[storage.StorageType] = storage;
        }
    }
    _getStorage(storageType) {
        const storage = this._storages[storageType];
        if (storage == undefined)
            throw new StorageTypeNotRegistered_1.default();
        return storage;
    }
    SetState(stateKey, value) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const storage = this._getStorage(stateKey.StorageType);
            storage.SetState((_b = (_a = stateKey.Scope) === null || _a === void 0 ? void 0 : _a.Scope) !== null && _b !== void 0 ? _b : null, stateKey.Key, value);
        });
    }
    GetState(stateKey) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const storage = this._getStorage(stateKey.StorageType);
            return yield storage.GetState((_b = (_a = stateKey.Scope) === null || _a === void 0 ? void 0 : _a.Scope) !== null && _b !== void 0 ? _b : null, stateKey.Key);
        });
    }
    GetRegisteredStorageTypes() {
        return Object.getOwnPropertySymbols(this._storages);
    }
}
exports.default = StateManager;
//# sourceMappingURL=StateManager.js.map