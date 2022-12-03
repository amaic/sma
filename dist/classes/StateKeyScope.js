"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IStateKeyScope_1 = require("../interfaces/IStateKeyScope");
class StateKeyScope {
    constructor(scope) {
        this.IStateKeyScope = IStateKeyScope_1.IStateKeyScopeIdentitfier;
        this._scope = scope;
    }
    get Scope() {
        return this._scope;
    }
}
exports.default = StateKeyScope;
//# sourceMappingURL=StateKeyScope.js.map