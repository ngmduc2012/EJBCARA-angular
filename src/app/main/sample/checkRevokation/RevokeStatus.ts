
export interface RevokeStatus {
    issuerDN: string;
    certificateSN: string;
    revocationDate: string;
    reason: number;
}