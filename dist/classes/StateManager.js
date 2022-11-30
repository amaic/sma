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
const InvalidStateType_1 = __importDefault(require("../errors/InvalidStateType"));
const IStateManager_1 = require("../interfaces/IStateManager");
const StateType_1 = require("../types/StateType");
class StateManager {
    constructor() {
        this.IStateManager = IStateManager_1.IStateManagerIdentifier;
    }
    SetState(stateKey, value) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (stateKey.StateType) {
                case StateType_1.StateType.Local:
                    if (value == null) {
                        sessionStorage.removeItem(stateKey.Key);
                    }
                    else {
                        sessionStorage.setItem(stateKey.Key, value);
                    }
                    break;
                default:
                    throw new InvalidStateType_1.default();
            }
        });
    }
    GetState(stateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (stateKey.StateType) {
                case StateType_1.StateType.Local:
                    return sessionStorage.getItem(stateKey.Key);
                default:
                    throw new InvalidStateType_1.default();
            }
        });
    }
}
exports.default = StateManager;
//# sourceMappingURL=StateManager.js.map