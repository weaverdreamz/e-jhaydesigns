import { createSelector } from "reselect";

const cartSlice = (state)=>state.cart;


export const cartSelector = createSelector(
    [cartSlice],
    (cartOutput)=>cartOutput.showCart
);



