import { isPoint4 } from "./isPoint4";
import { isPointObject4 } from "./isPointObject4";
export function wOf(point) {
    if (isPoint4(point)) {
        return isPointObject4(point) ? point.w : point[3];
    }
    throw new Error("wOf: point is not Point4");
}
//# sourceMappingURL=wOf.js.map