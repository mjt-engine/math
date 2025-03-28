import { isPoint2 } from "./isPoint2";
import { isPointObject2 } from "./isPointObject2";
export function yOf(point) {
    if (isPoint2(point)) {
        return isPointObject2(point) ? point.y : point[1];
    }
    throw new Error("yOf: point is not Point2");
}
//# sourceMappingURL=yOf.js.map