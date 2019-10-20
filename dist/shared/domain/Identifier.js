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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvZG9tYWluL0lkZW50aWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFhLFVBQVU7SUFDbkIsWUFBb0IsS0FBUTtRQUFSLFVBQUssR0FBTCxLQUFLLENBQUc7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU0sQ0FBQyxFQUFrQjtRQUNyQixJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBQztZQUNoQyxPQUFPLEtBQUssQ0FBQTtTQUNmO1FBQ0QsSUFBRyxDQUFDLENBQUMsRUFBRSxZQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQztZQUNqQyxPQUFPLEtBQUssQ0FBQTtTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQztDQUVKO0FBZEQsZ0NBY0MifQ==