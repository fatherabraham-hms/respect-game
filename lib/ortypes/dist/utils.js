import { Result } from "ethers";
import { z } from "zod";
export function resultArrayToObj(val, baseZObj) {
    if (Array.isArray(val)) {
        const keys = Object.keys(baseZObj.keyof().Values);
        const res = Result.fromItems(val, keys);
        return res.toObject();
    }
    else {
        return val;
    }
}
export function preprocessResultOrObj(baseZObj) {
    return z.preprocess(val => resultArrayToObj(val, baseZObj), baseZObj);
}
