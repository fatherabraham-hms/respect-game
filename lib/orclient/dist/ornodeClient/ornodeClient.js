export const jsonEndpoints = { "post /v1/putProposal": true, "post /v1/getProposal": true, "post /v1/getProposals": true, "get /v1/getPeriodNum": true, "post /v1/getToken": true, "post /v1/getAward": true, "post /v1/getRespectMetadata": true, "post /v1/getRespectContractMt": true, "get /v1/respectContractMetadata": true, "get /v1/token/:tokenId": true, "post /v1/getAwards": true, "post /v1/getVotes": true };
export const endpointTags = { "post /v1/putProposal": [], "post /v1/getProposal": [], "post /v1/getProposals": [], "get /v1/getPeriodNum": [], "post /v1/getToken": [], "post /v1/getAward": [], "post /v1/getRespectMetadata": [], "post /v1/getRespectContractMt": [], "get /v1/respectContractMetadata": [], "get /v1/token/:tokenId": [], "post /v1/getAwards": [], "post /v1/getVotes": [] };
export class ExpressZodAPIClient {
    constructor(implementation) {
        this.implementation = implementation;
        this.provide = async (method, path, params) => this.implementation(method, Object.keys(params).reduce((acc, key) => acc.replace(`:${key}`, params[key]), path), Object.keys(params).reduce((acc, key) => path.indexOf(`:${key}`) >= 0 ? acc : { ...acc, [key]: params[key] }, {}));
    }
}
// Usage example:
/*
export const exampleImplementation: Implementation = async (method, path, params) => { const hasBody = !["get", "delete"].includes(method); const searchParams = hasBody ? "" : `?${new URLSearchParams(params)}`; const response = await fetch(`https://example.com${path}${searchParams}`, { method: method.toUpperCase(), headers: hasBody ? { "Content-Type": "application/json" } : undefined, body: hasBody ? JSON.stringify(params) : undefined }); if (`${method} ${path}` in jsonEndpoints) {
    return response.json();
} return response.text(); };
const client = new ExpressZodAPIClient(exampleImplementation);
client.provide("get", "/v1/user/retrieve", { id: "10" });*/ 
