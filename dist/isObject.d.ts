export declare function isObject(maybe: unknown): maybe is {
    [k in string | number]: any;
};
