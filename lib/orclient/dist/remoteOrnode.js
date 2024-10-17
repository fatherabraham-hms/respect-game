import { ProposalInvalid, ProposalNotCreated, ProposalNotFound } from "ortypes";
import { zErrorType } from "ortypes/ornode.js";
import { createOrnodeClient } from "./ornodeClient/index.js";
import { stringify } from "ts-utils";
export class OrnodeUnknownErrResponse extends Error {
    constructor(msg, fullErr) {
        super(msg);
        this.fullErr = fullErr;
    }
}
export class OrnodeRequestFailed extends Error {
    constructor(msg, cause) {
        super(msg);
        this.cause = cause;
    }
}
export function discriminateError(error) {
    const msg = error.message ?? "";
    if (error.name !== undefined) {
        switch (error.name) {
            case zErrorType.Enum.ProposalNotFound: {
                return new ProposalNotFound(msg);
            }
            case zErrorType.Enum.ProposalNotCreated: {
                return new ProposalNotCreated(msg);
            }
            case zErrorType.Enum.ProposalInvalid: {
                return new ProposalInvalid(msg, error.cause);
            }
            default:
                return new OrnodeUnknownErrResponse(msg, error);
        }
    }
    else {
        return new OrnodeUnknownErrResponse(msg, error);
    }
}
export class RemoteOrnode {
    constructor(url) {
        this.ornodeClient = createOrnodeClient(url);
    }
    async putProposal(proposal) {
        const data = await this._makeOrnodeRequest("post", "/v1/putProposal", { proposal });
        return data.propStatus;
    }
    async getProposal(id) {
        const data = await this._makeOrnodeRequest("post", "/v1/getProposal", { propId: id });
        return data;
    }
    async getProposals(spec) {
        const data = await this._makeOrnodeRequest("post", "/v1/getProposals", { spec: spec ?? {} });
        return data.proposals;
    }
    async getPeriodNum() {
        const data = await this._makeOrnodeRequest("get", "/v1/getPeriodNum", {});
        return data.periodNum;
    }
    async getToken(tokenId) {
        const data = await this._makeOrnodeRequest("post", "/v1/getToken", { tokenId });
        return data;
    }
    async getAward(tokenId) {
        const data = await this._makeOrnodeRequest("post", "/v1/getAward", { tokenId });
        return data;
    }
    async getVotes(spec) {
        const d = await this._makeOrnodeRequest("post", "/v1/getVotes", { spec: spec ?? {} });
        return d.votes;
    }
    async getRespectMetadata() {
        const data = await this._makeOrnodeRequest("post", "/v1/getRespectMetadata", {});
        return data;
    }
    async getRespectContractMt() {
        const data = await this._makeOrnodeRequest("post", "/v1/getRespectContractMt", {});
        return data;
    }
    async getAwards(spec) {
        const data = await this._makeOrnodeRequest("post", "/v1/getAwards", { spec: spec ?? {} });
        return data.awards;
    }
    async _makeOrnodeRequest(method, path, params) {
        let data;
        let error;
        try {
            console.debug("request: ", method, " ", path, " ", params);
            const response = await this.ornodeClient.provide(method, path, params);
            if (response.status === 'error') {
                error = discriminateError(response.error);
            }
            else {
                console.debug("response: ", response);
                data = response;
            }
        }
        catch (err) {
            throw new OrnodeRequestFailed(`Request ${method} ${path} with params: ${stringify(params)} failed! Cause: ${stringify(err)}`, err);
        }
        if (error !== undefined) {
            throw error;
        }
        else {
            return data;
        }
    }
}
