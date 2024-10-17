import { zDecodedProposal, zRespectBreakout, zRespectAccount, zBurnRespect, zProposalMetadata, zCustomSignal, zTick, zVote, zCustomCall } from "../orclient.js";
import { zProposalValid as zNProposalFull, zRespectBreakoutAttachment, zRespectAccountAttachment, zBurnRespectAttachment, zCustomSignalAttachment, zPropAttachmentBase, zCustomCallAttachment, zTickAttachment, zVote as zNVote, } from "../ornode.js";
import { zBigNumberishToBigint, zBytesLikeToBytes, zBigIntToBytes32, } from "../eth.js";
import { OnchainPropNotFound } from "../orContext.js";
import { addCustomIssue } from "../zErrorHandling.js";
import { Factory as Respect1155Factory, zBurnRespectArgs, zMeetingNum, zMintRespectArgs, zTokenIdData } from "../respect1155.js";
import { Orec__factory as OrecFactory } from "orec/typechain-types";
import { zBreakoutMintRequest, zPropType } from "../fractal.js";
import { expect } from "chai";
import { unpackTokenId } from "respect1155-sc/utils/tokenId.js";
import { zCustomSignalType, zSignalArgs, zTickSignalType, Stage as NStage, VoteStatus as NVoteStatus, voteTypeMap, zVoteTypeToStr } from "../orec.js";
export const stageMap = {
    [NStage.Execution]: "Execution",
    [NStage.Expired]: "Expired",
    [NStage.Veto]: "Veto",
    [NStage.Voting]: "Voting"
};
export const voteStatusMap = {
    [NVoteStatus.Failed]: "Failed",
    [NVoteStatus.Failing]: "Failing",
    [NVoteStatus.Passed]: "Passed",
    [NVoteStatus.Passing]: "Passing"
};
export const zNAttachmentToMetadata = zPropAttachmentBase.transform((val, ctx) => {
    const r = {
        propTitle: val.propTitle,
        propDescription: val.propDescription
    };
    return r;
}).pipe(zProposalMetadata);
const respectInterface = Respect1155Factory.createInterface();
const orecInterface = OrecFactory.createInterface();
export const zMintArgsToRespectBreakout = zBreakoutMintRequest.transform((val, ctx) => {
    try {
        expect(val.mintRequests.length).to.be.greaterThanOrEqual(3).and.to.be.lessThanOrEqual(6);
        const rankings = [];
        let meetingNum;
        for (const [i, req] of val.mintRequests.entries()) {
            const tokenIdData = unpackTokenId(req.id);
            const periodNum = zBigNumberishToBigint.parse(tokenIdData.periodNumber);
            if (meetingNum === undefined) {
                meetingNum = zMeetingNum.parse(periodNum + 1n);
            }
            else {
                expect(periodNum + 1n).to.be.equal(BigInt(meetingNum));
            }
            rankings.push(tokenIdData.owner);
        }
        if (meetingNum !== undefined) {
            const r = {
                propType: zPropType.Enum.respectBreakout,
                meetingNum: meetingNum,
                rankings,
                mintData: zBytesLikeToBytes.parse(val.data),
                metadata: {}
            };
            return r;
        }
    }
    catch (err) {
        addCustomIssue(val, ctx, err, "Exception in zMintArgsToRespectBreakout");
    }
}).pipe(zRespectBreakout.partial({ groupNum: true }));
function mkzNProposalToRespectBreakout(orctx) {
    return zNProposalFull.transform(async (val, ctx) => {
        try {
            const attachment = zRespectBreakoutAttachment.parse(val.attachment);
            expect(val.content.addr).to.be.equal(await orctx.getNewRespectAddr(), "respect breakout message expected to be addressed to newRespectAddr");
            const data = zBytesLikeToBytes.parse(val.content.cdata);
            const tx = respectInterface.parseTransaction({ data });
            expect(tx?.name).to.be.equal(respectInterface.getFunction('mintRespectGroup').name, "expected mintRespectGroup function to be called");
            const respectBreakout = zMintArgsToRespectBreakout.parse(tx?.args);
            respectBreakout.groupNum = attachment.groupNum;
            respectBreakout.metadata = zNAttachmentToMetadata.parse(attachment);
            return respectBreakout;
        }
        catch (err) {
            addCustomIssue(val, ctx, err, "Exception in zNProposalToRespectBreakout");
        }
    }).pipe(zRespectBreakout);
}
function mkzNProposalToRespectAccount(orctx) {
    return zNProposalFull.transform(async (val, ctx) => {
        try {
            const attachment = zRespectAccountAttachment.parse(val.attachment);
            expect(val.content.addr).to.be.equal(await orctx.getNewRespectAddr(), "respect breakout message expected to be addressed to newRespectAddr");
            const data = zBytesLikeToBytes.parse(val.content.cdata);
            const tx = respectInterface.parseTransaction({ data });
            expect(tx?.name).to.be.equal(respectInterface.getFunction('mintRespect').name, "expected mintRespect function to be called");
            const args = zMintRespectArgs.parse(tx?.args);
            const tdata = zTokenIdData.parse(unpackTokenId(args.request.id));
            const r = {
                propType: zPropType.Enum.respectAccount,
                meetingNum: tdata.periodNumber + 1,
                mintType: tdata.mintType,
                account: tdata.owner,
                value: args.request.value,
                title: attachment.mintTitle,
                reason: attachment.mintReason,
                metadata: zNAttachmentToMetadata.parse(attachment),
                tokenId: zBigIntToBytes32.parse(args.request.id)
            };
            if (attachment.groupNum !== undefined) {
                r.groupNum = attachment.groupNum;
            }
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, err, "Exception in zNProposalToRespectAccount");
        }
    }).pipe(zRespectAccount);
}
function mkzNProposalToBurnRespect(orctx) {
    return zNProposalFull.transform(async (val, ctx) => {
        try {
            const attachment = zBurnRespectAttachment.parse(val.attachment);
            expect(val.content.addr).to.be.equal(await orctx.getNewRespectAddr(), "respect account message expected to be addressed to newRespectAddr");
            const data = zBytesLikeToBytes.parse(val.content.cdata);
            const tx = respectInterface.parseTransaction({ data });
            expect(tx?.name).to.be.equal(respectInterface.getFunction('burnRespect').name, "expected burnRespect function to be called");
            const args = zBurnRespectArgs.parse(tx?.args);
            const tdata = zTokenIdData.parse(unpackTokenId(args.tokenId));
            const r = {
                propType: zPropType.Enum.burnRespect,
                tokenId: zBigIntToBytes32.parse(args.tokenId),
                reason: attachment.burnReason,
                metadata: zNAttachmentToMetadata.parse(attachment)
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, err, "Exception in zProposalToBurnRespect");
        }
    }).pipe(zBurnRespect);
}
function mkzNProposalToCustomSignal(orctx) {
    return zNProposalFull.transform(async (val, ctx) => {
        try {
            const attachment = zCustomSignalAttachment.parse(val.attachment);
            expect(val.content.addr).to.be.equal(await orctx.getOrecAddr(), "custom signal supposed to be addressed to orec");
            const data = zBytesLikeToBytes.parse(val.content.cdata);
            const tx = orecInterface.parseTransaction({ data });
            expect(tx?.name).to.be.equal(orecInterface.getFunction('signal').name, "expected signal function to be called");
            const args = zSignalArgs.parse(tx?.args);
            // Throws if it is a tick signal
            const signalType = zCustomSignalType.parse(args.signalType);
            const r = {
                propType: zPropType.Enum.customSignal,
                data: zBytesLikeToBytes.parse(args.data),
                link: attachment.link,
                signalType,
                metadata: zNAttachmentToMetadata.parse(attachment)
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, err, "Exception in zNProposalToCustomSignal");
        }
    }).pipe(zCustomSignal);
}
function mkzNProposalToTick(orctx) {
    return zNProposalFull.transform(async (val, ctx) => {
        try {
            const attachment = zTickAttachment.parse(val.attachment);
            expect(val.content.addr).to.be.equal(await orctx.getOrecAddr(), "custom signal supposed to be addressed to orec");
            const data = zBytesLikeToBytes.parse(val.content.cdata);
            const tx = orecInterface.parseTransaction({ data });
            expect(tx?.name).to.be.equal(orecInterface.getFunction('signal').name, "expected signal function to be called");
            const args = zSignalArgs.parse(tx?.args);
            // Throws if it is not a tick signal
            zTickSignalType.parse(args.signalType);
            const r = {
                propType: zPropType.Enum.tick,
                data: zBytesLikeToBytes.parse(args.data),
                link: attachment.link,
                metadata: zNAttachmentToMetadata.parse(attachment)
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, err, "Exception in zNProposalToTick");
        }
    }).pipe(zTick);
}
function mkzNProposalToCustomCall(orctx) {
    return zNProposalFull.transform(async (val, ctx) => {
        try {
            const attachment = zCustomCallAttachment.parse(val.attachment);
            const r = {
                cdata: zBytesLikeToBytes.parse(val.content.cdata),
                address: val.content.addr,
                propType: zPropType.Enum.customCall,
                metadata: zNAttachmentToMetadata.parse(attachment)
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, err, "Exception in zNProposalToCustomCall");
        }
    }).pipe(zCustomCall);
}
function mkzNProposalToDecodedProp(orctx) {
    const zNProposalToRespectBreakout = mkzNProposalToRespectBreakout(orctx);
    const zNProposalToRespectAccount = mkzNProposalToRespectAccount(orctx);
    const zNProposalToBurnRespect = mkzNProposalToBurnRespect(orctx);
    const zNProposalToCustomSignal = mkzNProposalToCustomSignal(orctx);
    const zNProposalToCustomCall = mkzNProposalToCustomCall(orctx);
    const zNProposalToTick = mkzNProposalToTick(orctx);
    return zNProposalFull.transform(async (val, ctx) => {
        if (val.attachment !== undefined && val) {
            switch (val.attachment.propType) {
                case 'respectBreakout':
                    return await zNProposalToRespectBreakout.parseAsync(val);
                case 'respectAccount':
                    return await zNProposalToRespectAccount.parseAsync(val);
                case 'burnRespect':
                    return await zNProposalToBurnRespect.parseAsync(val);
                case 'customSignal':
                    return await zNProposalToCustomSignal.parseAsync(val);
                case 'customCall':
                    return await zNProposalToCustomCall.parseAsync(val);
                case 'tick':
                    return await zNProposalToTick.parseAsync(val);
                default: {
                    const exhaustiveCheck = val.attachment;
                    addCustomIssue(val, ctx, "Exhaustiveness check failed in zProposalToDecodedProp");
                    return;
                }
            }
        }
    }).pipe(zDecodedProposal);
}
export const orecToClientVTMap = voteTypeMap;
export const zNVoteTypeToClient = zVoteTypeToStr;
export const zNVoteToClient = zNVote.transform(val => {
    const vote = {
        ...val,
        date: val.ts ? new Date(val.ts * 1000) : undefined,
        weight: Number(val.weight),
    };
    return vote;
}).pipe(zVote);
// export const zNVoteToClient = zNVote.transform(val => {
//   const v: Vote = {
//     voteType: zNVoteTypeToClient.parse(val.vtype),
//     weight: Number(val.weight)
//   }
//   return v;
// }).pipe(zVote)
export class NodeToClientTransformer {
    constructor(context) {
        this._ctx = context;
        this._zNProposalToDecodedProp = mkzNProposalToDecodedProp(context);
    }
    async getExecStatus(nodeProp) {
        const status = nodeProp.status;
        const returnVal = { status };
        if (status === "ExecutionFailed" &&
            nodeProp.executeTxHash !== undefined &&
            this._ctx.runner.provider) {
            const receipt = await this._ctx.runner.provider.getTransactionReceipt(nodeProp.executeTxHash);
            if (receipt === null) {
                console.error("Could not find transaction referenced as executeTxHash in proposal retrieved from ornode");
                return returnVal;
            }
            const filter = this._ctx.orec.filters.ExecutionFailed(nodeProp.id);
            const events = await this._ctx.orec.queryFilter(filter, receipt.blockNumber, receipt.blockNumber);
            if (events.length !== 1) {
                console.error("Expected one ExecutionFailed event for proposal ", nodeProp.id, ". All proposals: ", JSON.stringify(events));
                return returnVal;
            }
            else {
                try {
                    const retVal = events[0].args.retVal;
                    const error = this._ctx.errorDecoder.decodeReturnData(retVal);
                    return { status, execError: error };
                }
                catch (err) {
                    console.error("Error decoding return data: ", err);
                    return returnVal;
                }
            }
        }
        else {
            return returnVal;
        }
    }
    async transformProp(nodeProp) {
        const propId = nodeProp.id;
        const onchainProp = await this._ctx.tryGetPropFromChain(propId);
        const { status, execError } = await this.getExecStatus(nodeProp);
        let rProp;
        if (onchainProp === undefined) {
            if (status === "NotExecuted") {
                throw new OnchainPropNotFound(nodeProp.id);
            }
            rProp = {
                id: nodeProp.id,
                status,
                execError,
                voteStatus: "Passed", // If execution happened, it was passed
                stage: "Expired", // If execution happened it is expired
                createTime: new Date(nodeProp.createTs)
            };
        }
        else {
            rProp = {
                ...onchainProp,
                status: status,
                execError,
                stage: stageMap[onchainProp.stage],
                voteStatus: voteStatusMap[onchainProp.voteStatus],
            };
        }
        rProp.createTxHash = nodeProp.createTxHash;
        rProp.executeTxHash = nodeProp.executeTxHash;
        if (nodeProp.content !== undefined) {
            rProp.addr = nodeProp.content.addr;
            rProp.cdata = nodeProp.content.cdata;
            rProp.memo = nodeProp.content.memo;
            if (nodeProp.attachment !== undefined) {
                rProp.decoded = await this._zNProposalToDecodedProp.parseAsync(nodeProp);
            }
        }
        return rProp;
    }
}
