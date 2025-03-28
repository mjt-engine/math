export const add = (a: number, b: number): number => {
  if (a === undefined) throw new Error("add: a is undefined");
  if (b === undefined) throw new Error("add: b is undefined");
  return a + b;
};
