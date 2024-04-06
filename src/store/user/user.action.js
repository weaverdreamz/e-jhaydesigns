import { USER_ACTION_TYPES } from "./user.type";

export const setCurrentUser = (userr)=>{

    return({type:USER_ACTION_TYPES.CURRENT_USER, payload:userr})

}
