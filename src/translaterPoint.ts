import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { translater0 } from "./translater0";
import { translater1 } from "./translater1";
import { translater2 } from "./translater2";
import { translater3 } from "./translater3";
import { Point } from "./type/Point";

export const translaterPoint =
  (translatePoint: Point) =>
  (position: Point): Point | undefined => {
    if (isPoint3(translatePoint) && isPoint3(position)) {
      return translater3(translatePoint)(position);
    }
    if (isPoint2(translatePoint) && isPoint2(position)) {
      return translater2(translatePoint)(position);
    }
    if (isPoint1(translatePoint) && isPoint1(position)) {
      return translater1(translatePoint)(position);
    }
    if (isPoint0(translatePoint) && isPoint0(position)) {
      return translater0(translatePoint)(position);
    }
    throw new Error("translaterPoint: point is not Point0...Point3");
  };
