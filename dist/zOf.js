import { isPoint3 } from "./isPoint3";
import { isPointObject3 } from "./isPointObject3";
export function zOf(point) {
    if (isPoint3(point)) {
        return isPointObject3(point) ? point.z : point[2];
    }
    throw new Error("zOf: point is not Point3");
}
//# sourceMappingURL=zOf.js.map