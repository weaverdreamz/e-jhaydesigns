import { MOBILE_MENU_ACTION_TYPES } from "./mobilemenu.type";

const INITIAL_STATE={
    displayMobileMenu:false,
}
export const mobileReducer = (state=INITIAL_STATE, action={})=>{

    const {type, payload} = action;

    switch(type){
        case MOBILE_MENU_ACTION_TYPES.MOBILE_MENU:
            return{
                ...state,
                displayMobileMenu:payload
            }

            default:
                return state

    }

}