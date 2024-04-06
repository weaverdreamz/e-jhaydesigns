import { DATAINFORMATION_ACTION_TYPES } from "./dataInformation.type";

export const setDataInformation = (cnt, tot, cst )=>{
    return({type:DATAINFORMATION_ACTION_TYPES.SET_DATAINFORMATION, payload:{count:cnt, total:tot, cartStore:cst}})
}