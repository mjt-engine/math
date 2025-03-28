import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
import { contains } from "./contains";
export function divide4(a, b) {
    if (b === undefined || contains(b, 0)) {
        throw new Error("divide4: cannot divide by zero");
    }
    if (a === undefined) {
        throw new Error("divide4: numerator is undefined");
    }
    return [xOf(a) / xOf(b), yOf(a) / yOf(b), zOf(a) / zOf(b), wOf(a) / wOf(b)];
}
//# sourceMappingURL=divide4.js.map