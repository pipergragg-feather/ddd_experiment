"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValueObject_1 = require("../../../shared/domain/ValueObject");
class Health extends ValueObject_1.ValueObject {
    get currentHp() {
        return this.props.currentHp;
    }
    get maxHp() {
        return this.props.maxHp;
    }
    static isValidHp(maxHp) {
        return maxHp > 0;
    }
    static create(maxHp) {
        if (this.isValidHp(maxHp)) {
            return new Health({ maxHp, currentHp: maxHp });
        }
        return new Error('Invalid max hp');
    }
}
exports.Health = Health;
//# sourceMappingURL=health.js.map