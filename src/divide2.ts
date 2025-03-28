import { Point2 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { contains } from "./contains";

export function divide2(a: Point2, b: Point2): Point2 {
  if (b === undefined || contains(b, 0)) {
    throw new Error("divide2: cannot divide by zero");
  }
  if (a === undefined) {
    throw new Error("divide2: numerator is undefined");
  }
  return [xOf(a) / xOf(b), yOf(a) / yOf(b)];
}
