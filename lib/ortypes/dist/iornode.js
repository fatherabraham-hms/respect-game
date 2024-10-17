import { stringify } from "ts-utils";
import { zErrorType, } from "./ornode.js";
export class ProposalNotFound extends Error {
    constructor(propId) {
        const msg = `Proposal with id ${propId} does not exist`;
        super(msg);
        this.name = zErrorType.enum.ProposalNotFound;
        this.statusCode = 400;
    }
}
export class ProposalNotCreated extends Error {
    constructor(proposal) {
        const msg = `Proposal with id ${proposal.id} has not been created onchain yet. Proposal: ${stringify(proposal)}`;
        super(msg);
        this.name = zErrorType.enum.ProposalNotCreated;
    }
}
export class ProposalInvalid extends Error {
    constructor(proposal, cause) {
        const msg = `Proposal invalid. Proposal: ${stringify(proposal)}`;
        super(msg);
        this.name = zErrorType.enum.ProposalNotCreated;
        this.statusCode = 400;
        this.cause = cause;
    }
}
export class TokenNotFound extends Error {
    constructor(tokenId) {
        const msg = `Token with id ${tokenId} does not exist`;
        super(msg);
        this.name = zErrorType.enum.TokenNotFound;
        this.statusCode = 404;
    }
}
