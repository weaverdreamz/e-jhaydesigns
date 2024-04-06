import { DISPLAYCART_ACTION_TYPES } from "./cart.type";

const INITIAL_STATE = {
    showCart:false,
    
}


export const displayCartReducer = (state=INITIAL_STATE, action={})=>{

    const {type, payload} = action;

    switch(type){
        case DISPLAYCART_ACTION_TYPES.DISPLAY_CART:
            return{
                ...state,
                showCart:payload,
            }
        default:
            return state;
    }

}