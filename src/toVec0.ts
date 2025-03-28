import { Point0 } from "./type/Point";
import { Vec0 } from "./type/Vec";
import { xOf } from "./xOf";

/**
 * Promotes number to array
 */
export function toVec0(point: Point0): Vec0 {
  return [xOf(point)];
}
