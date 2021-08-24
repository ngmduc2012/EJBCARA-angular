import {ExtendedInformationWS} from "./ExtendedInformationWS";
import {hexValue} from "./hexValue";

export interface UserDataVOWS {
    username: string;
    password: string;
    clearPwd: boolean;
    subjectDN :string;
    caName : string;
    subjectAltName :string;
    email :string;
    status: number;
    tokenType : string;
    sendNotification: boolean;
    keyRecoverable : boolean;
    endEntityProfileName : string;
    certificateProfileName :string;
    startTime : string;
    endTime : string;
    certificateSerialNumber : bigint;
    extendedInformation : ExtendedInformationWS[];
    cardNumber : string;
    type : hexValue;
}