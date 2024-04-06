import { MOBILE_MENU_ACTION_TYPES } from "./mobilemenu.type";

export const setMobileMenu = (menu)=>{
    return({type:MOBILE_MENU_ACTION_TYPES.MOBILE_MENU, payload:menu})
}