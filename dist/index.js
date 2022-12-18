"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManagerLocationStorageType = exports.StateManagerLocationStorage = exports.StateManagerLocalStorageType = exports.StateManagerLocalStorage = exports.IStateManagerStorageIdentifier = exports.IStateKeyIdentifier = exports.StateKey = exports.IStateManagerIdentifier = exports.StateManager = void 0;
const StateManager_1 = __importDefault(require("./classes/StateManager"));
exports.StateManager = StateManager_1.default;
const StateManagerLocalStorage_1 = __importStar(require("./storages/StateManagerLocalStorage"));
exports.StateManagerLocalStorage = StateManagerLocalStorage_1.default;
Object.defineProperty(exports, "StateManagerLocalStorageType", { enumerable: true, get: function () { return StateManagerLocalStorage_1.StateManagerLocalStorageType; } });
const IStateManager_1 = require("./interfaces/IStateManager");
Object.defineProperty(exports, "IStateManagerIdentifier", { enumerable: true, get: function () { return IStateManager_1.IStateManagerIdentifier; } });
const IStateManagerStorage_1 = require("./interfaces/IStateManagerStorage");
Object.defineProperty(exports, "IStateManagerStorageIdentifier", { enumerable: true, get: function () { return IStateManagerStorage_1.IStateManagerStorageIdentifier; } });
const StateKey_1 = __importDefault(require("./classes/StateKey"));
exports.StateKey = StateKey_1.default;
const IStateKey_1 = require("./interfaces/IStateKey");
Object.defineProperty(exports, "IStateKeyIdentifier", { enumerable: true, get: function () { return IStateKey_1.IStateKeyIdentifier; } });
const StateManagerLocationStorage_1 = __importStar(require("./storages/StateManagerLocationStorage"));
exports.StateManagerLocationStorage = StateManagerLocationStorage_1.default;
Object.defineProperty(exports, "StateManagerLocationStorageType", { enumerable: true, get: function () { return StateManagerLocationStorage_1.StateManagerLocationStorageType; } });
//# sourceMappingURL=index.js.map