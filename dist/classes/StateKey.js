"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IStateKey_1 = require("../interfaces/IStateKey");
class StateKey {
    constructor(stateType, key, scope) {
        this.IStateKey = IStateKey_1.IStateKeyIdentifier;
        this._stateType = stateType;
        this._key = key;
        this._scope = scope == undefined ? null : scope;
    }
    get StateType() { return this._stateType; }
    get Key() { return this._key; }
    get Scope() { return this._scope; }
    get FullQualifiedName() {
        return this._scope == null ? this._key : `${this._scope}-${this._key}`;
    }
}
exports.default = StateKey;
//# sourceMappingURL=StateKey.js.map