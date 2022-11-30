"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IStateKey_1 = require("../interfaces/IStateKey");
class StateKey {
    constructor(stateType, key) {
        this.IStateKey = IStateKey_1.IStateKeyIdentifier;
        this._stateType = stateType;
        this._key = key;
    }
    get StateType() { return this._stateType; }
    get Key() { return this._key; }
}
exports.default = StateKey;
//# sourceMappingURL=StateKey.js.map