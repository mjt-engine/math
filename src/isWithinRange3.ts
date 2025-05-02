import { Point3 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";


export const isWithinRange3 = (
  a: Point3,
  b: Point3,
  range: number
): boolean => {
  const dx = xOf(a) - xOf(b);
  const dy = yOf(a) - yOf(b);
  const dz = zOf(a) - zOf(b);
  return dx * dx + dy * dy + dz * dz <= range * range;
};
