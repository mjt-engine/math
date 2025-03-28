import { Point4 } from "./type/Point";
import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
import { contains } from "./contains";

export function divide4(a: Point4, b: Point4): Point4 {
  if (b === undefined || contains(b, 0)) {
    throw new Error("divide4: cannot divide by zero");
  }
  if (a === undefined) {
    throw new Error("divide4: numerator is undefined");
  }
  return [xOf(a) / xOf(b), yOf(a) / yOf(b), zOf(a) / zOf(b), wOf(a) / wOf(b)];
}
