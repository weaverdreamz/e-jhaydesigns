import { USER_ACTION_TYPES } from "./user.type";

const INITIAL_STATE = {
    user:null
}

export const userReducer = (state=INITIAL_STATE, action={})=>{
    const {type, payload} = action;

    switch(type){

        case USER_ACTION_TYPES.CURRENT_USER:
            return{
                ...state,
                user:payload

            }
            
            default:
                return state;
            
    }

}