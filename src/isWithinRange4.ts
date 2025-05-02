import { Point3 } from "./type/Point";
import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";


export const isWithinRange4 = (
  a: Point3,
  b: Point3,
  range: number
): boolean => {
  const dx = xOf(a) - xOf(b);
  const dy = yOf(a) - yOf(b);
  const dz = zOf(a) - zOf(b);
  const dw = wOf(a) - wOf(b);
  return dx * dx + dy * dy + dz * dz + dw * dw <= range * range;
};
