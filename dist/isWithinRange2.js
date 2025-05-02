import { xOf } from "./xOf";
import { yOf } from "./yOf";
export const isWithinRange2 = (a, b, range) => {
    const dx = xOf(a) - xOf(b);
    const dy = yOf(a) - yOf(b);
    return dx * dx + dy * dy <= range * range;
};
//# sourceMappingURL=isWithinRange2.js.map