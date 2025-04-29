import { lengthOf } from "@mjt-engine/object";
import { Vec4 } from "./type/Vec";

export function isVec4(maybe: unknown): maybe is Vec4 {
  return lengthOf(maybe) > 3;
}
