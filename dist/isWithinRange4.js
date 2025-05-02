import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
export const isWithinRange4 = (a, b, range) => {
    const dx = xOf(a) - xOf(b);
    const dy = yOf(a) - yOf(b);
    const dz = zOf(a) - zOf(b);
    const dw = wOf(a) - wOf(b);
    return dx * dx + dy * dy + dz * dz + dw * dw <= range * range;
};
//# sourceMappingURL=isWithinRange4.js.map