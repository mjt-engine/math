import { Point2 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";


export const isWithinRange2 = (
  a: Point2,
  b: Point2,
  range: number
): boolean => {
  const dx = xOf(a) - xOf(b);
  const dy = yOf(a) - yOf(b);
  return dx * dx + dy * dy <= range * range;
};
