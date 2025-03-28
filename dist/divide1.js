import { xOf } from "./xOf";
import { contains } from "./contains";
export function divide1(a, b) {
    if (b === undefined || contains(b, 0)) {
        throw new Error("divide1: cannot divide by zero");
    }
    if (a === undefined) {
        throw new Error("divide1: numerator is undefined");
    }
    return [xOf(a) / xOf(b)];
}
//# sourceMappingURL=divide1.js.map