import { Orec__factory } from "orec/typechain-types";
import { z } from "zod";
import { zBytes, zBytes32, zBytesLike, zEthAddress, zUint8 } from "./eth.js";
import { preprocessResultOrObj } from "./utils.js";
import { hexlify, toUtf8Bytes, toUtf8String } from "ethers";
export { Orec__factory };
export const OrecFactory = Orec__factory;
export * from "orec/typechain-types/common.js";
export var Stage;
(function (Stage) {
    Stage[Stage["Voting"] = 0] = "Voting";
    Stage[Stage["Veto"] = 1] = "Veto";
    Stage[Stage["Execution"] = 2] = "Execution";
    Stage[Stage["Expired"] = 3] = "Expired";
})(Stage || (Stage = {}));
export const zStage = z.preprocess(val => zUint8.parse(val), z.nativeEnum(Stage));
export var VoteStatus;
(function (VoteStatus) {
    VoteStatus[VoteStatus["Passing"] = 0] = "Passing";
    VoteStatus[VoteStatus["Failing"] = 1] = "Failing";
    VoteStatus[VoteStatus["Passed"] = 2] = "Passed";
    VoteStatus[VoteStatus["Failed"] = 3] = "Failed";
})(VoteStatus || (VoteStatus = {}));
export const zVoteStatus = z.preprocess(val => zUint8.parse(val), z.nativeEnum(VoteStatus));
export var ExecStatus;
(function (ExecStatus) {
    ExecStatus[ExecStatus["NotExecuted"] = 0] = "NotExecuted";
    ExecStatus[ExecStatus["Executed"] = 1] = "Executed";
    ExecStatus[ExecStatus["ExecutionFailed"] = 2] = "ExecutionFailed";
})(ExecStatus || (ExecStatus = {}));
const zExecStatusEnum = z.nativeEnum(ExecStatus);
export const zExecStatus = z.preprocess(val => zUint8.parse(val), zExecStatusEnum);
export const zExecStatusStr = z.enum(["NotExecuted", "Executed", "ExecutionFailed"]);
export const execStatusMap = {
    [ExecStatus.Executed]: "Executed",
    [ExecStatus.ExecutionFailed]: "ExecutionFailed",
    [ExecStatus.NotExecuted]: "NotExecuted"
};
export const zExecStatusToStr = zExecStatus.transform((s) => {
    return execStatusMap[s];
}).pipe(zExecStatusStr);
export const zPropId = zBytes32;
export var VoteType;
(function (VoteType) {
    VoteType[VoteType["None"] = 0] = "None";
    VoteType[VoteType["Yes"] = 1] = "Yes";
    VoteType[VoteType["No"] = 2] = "No";
})(VoteType || (VoteType = {}));
export const zVoteType = z.preprocess(val => zUint8.parse(val), z.nativeEnum(VoteType));
export const zVoteTypeStr = z.enum(["None", "Yes", "No"]);
export const zValidVoteTypeStr = z.enum(["Yes", "No"]);
export const voteTypeMap = {
    [VoteType.Yes]: "Yes",
    [VoteType.No]: "No",
    [VoteType.None]: "None"
};
export const zVoteTypeToStr = zVoteType.transform((vt) => {
    return voteTypeMap[vt];
}).pipe(zVoteTypeStr);
export const strToVtMap = {
    Yes: VoteType.Yes,
    No: VoteType.No,
    None: VoteType.None
};
export const zStrToVoteType = zVoteTypeStr.transform((vt) => {
    return strToVtMap[vt];
}).pipe(zVoteType);
export var KnownSignalTypes;
(function (KnownSignalTypes) {
    KnownSignalTypes[KnownSignalTypes["Tick"] = 0] = "Tick";
})(KnownSignalTypes || (KnownSignalTypes = {}));
;
export const zKnownSignalTypes = z.preprocess(val => zUint8.parse(val), z.nativeEnum(KnownSignalTypes));
export const zSignalType = zUint8;
export const zCustomSignalType = zSignalType.gt(0);
export const zTickSignalType = z.literal(Number(zKnownSignalTypes.innerType().enum.Tick));
export const zBytesToVoteMemo = zBytes.transform(val => {
    return decodeVoteMemo(val);
}).pipe(z.string());
export const zMemoToBytes = z.string().transform(val => {
    return encodeVoteMemo(val);
}).pipe(zBytes);
export function encodeVoteMemo(memo) {
    return memo !== undefined && memo != ""
        ? hexlify(toUtf8Bytes(memo))
        : "0x";
}
export function decodeVoteMemo(memoBytes) {
    const str = toUtf8String(memoBytes);
    return str;
}
export const zVoteWeight = z.coerce.bigint().gte(0n);
export const zVoteBase = z.object({
    vtype: zVoteType,
    weight: zVoteWeight
});
export const zVote = preprocessResultOrObj(zVoteBase);
const voteVerify = zVote.refine((val) => {
    const cvote = {
        vtype: BigInt(val.vtype),
        weight: val.weight
    };
    return true;
});
export const zSignalArgsBase = z.object({
    signalType: zUint8,
    data: zBytesLike
});
export const zSignalArgs = preprocessResultOrObj(zSignalArgsBase);
const customSignalVerify = zSignalArgs.refine((val) => {
    const args = [
        val.signalType,
        val.data
    ];
    return true;
});
export const zPropStateBase = z.object({
    createTime: z.bigint().gt(0n),
    yesWeight: z.bigint(),
    noWeight: z.bigint(),
});
export const zProposalState = preprocessResultOrObj(zPropStateBase);
const zPropStateVerify = zProposalState.refine(val => {
    const cprop = {
        createTime: val.createTime,
        yesWeight: val.yesWeight,
        noWeight: val.noWeight,
    };
    return true;
}, "Zod type does not match type from contract interface");
export const zProposedMsgBase = z.object({
    addr: zEthAddress,
    cdata: zBytesLike,
    memo: zBytesLike
});
export const zProposedMsg = preprocessResultOrObj(zProposedMsgBase);
const zProposedMsgVerify = zProposedMsg.refine(val => {
    const msg = val;
    return true;
});
export const zOnchainProp = zPropStateBase.extend({
    id: zPropId,
    stage: zStage,
    voteStatus: zVoteStatus,
    createTime: z.date()
});
export { MIN_1, HOUR_1, DAY_1, DAY_6, WEEK_1, propId } from "orec/utils";
