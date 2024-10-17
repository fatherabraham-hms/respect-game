import { z } from "zod";
// export type CustomIssueData = {
//   message?: string,
//   path?: string | number
// }
const customErrorMap = (issue, ctx) => {
    return { message: `Error parsing value: ${ctx.data}. Error: ${ctx.defaultError}` };
};
z.setErrorMap(customErrorMap);
export function addCustomIssue(parsedVal, ctx, causeOrCustomOrMsg, message) {
    let parsedValue;
    if (typeof parsedVal === 'object'
        && parsedVal !== null
        && 'ctx' in parsedVal
        && typeof parsedVal['ctx'] === 'object') {
        parsedValue = { ...parsedVal, ctx: undefined };
    }
    else {
        parsedValue = parsedVal;
    }
    if (typeof causeOrCustomOrMsg === 'object') {
        if (causeOrCustomOrMsg instanceof Error) {
            const issue = {
                code: z.ZodIssueCode.custom,
                params: {
                    cause: causeOrCustomOrMsg,
                    parsedValue
                },
                message,
                path: ctx.path
            };
            ctx.addIssue(issue);
        }
        else {
            const customIssue = causeOrCustomOrMsg;
            const issue = {
                ...causeOrCustomOrMsg,
                code: z.ZodIssueCode.custom,
                message: customIssue.message,
                params: {
                    cause: customIssue.cause,
                    parsedValue
                },
                path: customIssue.path ?? ctx.path,
                cause: undefined
            };
            ctx.addIssue(issue);
        }
    }
    else if (typeof causeOrCustomOrMsg === 'string') {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ctx.path,
            message: causeOrCustomOrMsg,
            params: {
                parsedValue
            }
        });
    }
    else {
        throw new Error("Invalid second argument for addCustomIssue");
    }
}
