import { Point3 } from "./type/Point";

export function jsonToPoint3(json: string): Point3 {
  return JSON.parse(json);
}
