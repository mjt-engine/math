import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { blend3 } from "./blend3";
import { blend2 } from "./blend2";
import { blend1 } from "./blend1";
import { blend0 } from "./blend0";
export function blendPoint(a, b, alpha) {
    if (isPoint3(a) && isPoint3(b) && isPoint3(alpha)) {
        return blend3(a, b, alpha);
    }
    if (isPoint2(a) && isPoint2(b) && isPoint2(alpha)) {
        return blend2(a, b, alpha);
    }
    if (isPoint1(a) && isPoint1(b) && isPoint1(alpha)) {
        return blend1(a, b, alpha);
    }
    if (isPoint0(a) && isPoint1(b) && isPoint0(alpha)) {
        return blend0(a, b, alpha);
    }
    throw new Error("blendPoint: unsupported point types");
}
//# sourceMappingURL=blendPoint.js.map