import { isIndexable } from "@mjt-engine/object";
import { Vec0 } from "./type/Vec";

export function isVec0(maybe: unknown): maybe is Vec0 {
  return isIndexable(maybe);
}
