"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValueObject_1 = require("../../../shared/domain/ValueObject");
class Health extends ValueObject_1.ValueObject {
    get current() {
        return this.props.current;
    }
    get max() {
        return this.props.max;
    }
    static create(max) {
        return new Health({ max, current: max });
    }
}
exports.Health = Health;
//# sourceMappingURL=health.js.map