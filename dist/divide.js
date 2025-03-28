export function divide(a, b) {
    if (b === undefined || b === 0) {
        throw new Error("divide: b is undefined or zero");
    }
    if (a === undefined) {
        throw new Error("divide: a is undefined");
    }
    return a / b;
}
//# sourceMappingURL=divide.js.map