import { Point1 } from "./type/Point";
import { xOf } from "./xOf";
import { contains } from "./contains";

export function divide1(a: Point1, b: Point1): Point1 {
  if (b === undefined || contains(b, 0)) {
    throw new Error("divide1: cannot divide by zero");
  }
  if (a === undefined) {
    throw new Error("divide1: numerator is undefined");
  }
  return [xOf(a) / xOf(b)];
}
