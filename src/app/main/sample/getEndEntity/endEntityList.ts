import {CAs} from "./CAs";
import {CPs} from "./CPs";

export interface EndEntityList {
    name: string;
    id: number;
    cAsList: CAs[];
    cPsList: CPs[];
}