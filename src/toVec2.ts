import { Point2 } from "./type/Point";
import { Vec2 } from "./type/Vec";
import { xOf } from "./xOf";
import { yOf } from "./yOf";

export function toVec2(point: Point2): Vec2 {
  return [xOf(point), yOf(point)];
}
