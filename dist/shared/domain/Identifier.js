"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Identifier {
    constructor(value) {
        this.value = value;
        this.value = value;
    }
    equals(id) {
        if (id === null || id === undefined) {
            return false;
        }
        if (!(id instanceof this.constructor)) {
            return false;
        }
        return id.value === this.value;
    }
}
exports.Identifier = Identifier;
//# sourceMappingURL=Identifier.js.map