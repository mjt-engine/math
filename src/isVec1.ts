import { lengthOf } from "@mjt-engine/object";
import { Vec1 } from "./type/Vec";

export function isVec1(maybe: unknown): maybe is Vec1 {
  return lengthOf(maybe) > 0;
}
