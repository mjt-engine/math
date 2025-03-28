import { Point } from "./type/Point";
import { Vec4 } from "./type/Vec";
import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";

export function toVec4(source: Point): Vec4 {
  return [xOf(source), yOf(source), zOf(source), wOf(source)];
}
