import { lengthOf } from "@mjt-engine/object";
import { Vec2 } from "./type/Vec";

export function isVec2(maybe: unknown): maybe is Vec2 {
  return lengthOf(maybe) > 1;
}
