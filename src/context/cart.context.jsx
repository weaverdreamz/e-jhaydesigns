import {createContext, useReducer} from 'react';

export const CartContext = createContext({
    displayCart:false,
    setDisplayCart:()=>{

    }
})

export const CART_ACTION_TYPES = {
    DISPLAY_CART:'DISPLAY_CART',
}

const cartReducer = (state, action)=>{

    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.DISPLAY_CART:
            return{
                ...state,
                displayCart:payload
            }
        default:
            throw new Error(`Undefined type ${type} in cartContext`)

    }

}

const INITIAL_STATE = {
    displayCart:false
}

export const CartProvider = ({children})=>{
   
    const [{displayCart}, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const setDisplayCart = (cart)=>{
        dispatch({type:CART_ACTION_TYPES.DISPLAY_CART, payload:cart})

    }
    const value ={displayCart, setDisplayCart};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}