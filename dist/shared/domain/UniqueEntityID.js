"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const Identifier_1 = require("./Identifier");
class UniqueEntityID extends Identifier_1.Identifier {
    constructor(id) {
        super(id ? id : v4_1.default());
    }
}
exports.UniqueEntityID = UniqueEntityID;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pcXVlRW50aXR5SUQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL2RvbWFpbi9VbmlxdWVFbnRpdHlJRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlEQUEyQjtBQUMzQiw2Q0FBMEM7QUFFMUMsTUFBYSxjQUFlLFNBQVEsdUJBQTJCO0lBQzdELFlBQVksRUFBb0I7UUFDOUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQUpELHdDQUlDIn0=