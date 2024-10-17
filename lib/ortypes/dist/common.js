import { z } from "zod";
export const zUrl = z.string().url();
export const zTimestamp = z.number();
export class InvalidArgumentError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidArgumentError';
    }
}
