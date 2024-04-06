import { DATAINFORMATION_ACTION_TYPES } from "./dataInformation.type";

const INITIAL_STATE = {
    count:0,
    total:0,
    cartStore:[]
}

export const dataInformationReducer = (state=INITIAL_STATE, action={})=>{

    const {type, payload} = action;

    switch(type){
        case DATAINFORMATION_ACTION_TYPES.SET_DATAINFORMATION:
            return{
                ...state,
                ...payload,
            }
        
            default:
                return state
    }

}