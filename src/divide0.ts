import { Point0 } from "./type/Point";
import { xOf } from "./xOf";
import { contains } from "./contains";

export function divide0(a: Point0, b: Point0): Point0 {
  if (b === undefined || contains(b, 0)) {
    throw new Error("divide0: cannot divide by zero");
  }
  if (a === undefined) {
    throw new Error("divide0: numerator is undefined");
  }
  return xOf(a) / xOf(b);
}
