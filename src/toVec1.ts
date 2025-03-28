import { Point1 } from "./type/Point";
import { Vec1 } from "./type/Vec";
import { xOf } from "./xOf";

export function toVec1(point: Point1): Vec1 {
  return [xOf(point)];
}
