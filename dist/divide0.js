import { xOf } from "./xOf";
import { contains } from "./contains";
export function divide0(a, b) {
    if (b === undefined || contains(b, 0)) {
        throw new Error("divide0: cannot divide by zero");
    }
    if (a === undefined) {
        throw new Error("divide0: numerator is undefined");
    }
    return xOf(a) / xOf(b);
}
//# sourceMappingURL=divide0.js.map