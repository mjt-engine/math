import { isIndexable } from "@mjt-engine/object";
import { Vec } from "./type/Vec";

export function isVec(maybe: unknown): maybe is Vec {
  return isIndexable(maybe);
}
