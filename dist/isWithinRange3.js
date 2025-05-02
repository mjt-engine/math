import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
export const isWithinRange3 = (a, b, range) => {
    const dx = xOf(a) - xOf(b);
    const dy = yOf(a) - yOf(b);
    const dz = zOf(a) - zOf(b);
    return dx * dx + dy * dy + dz * dz <= range * range;
};
//# sourceMappingURL=isWithinRange3.js.map