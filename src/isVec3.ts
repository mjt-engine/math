import { lengthOf } from "@mjt-engine/object";
import { Vec3 } from "./type/Vec";

export function isVec3(maybe: unknown): maybe is Vec3 {
  return lengthOf(maybe) > 2;
}
