import { CART_ACTION_TYPES } from "../../context/cart.context"

export const setDisplayCart = (display)=>{
    return({type:CART_ACTION_TYPES.DISPLAY_CART, payload:display})
}

