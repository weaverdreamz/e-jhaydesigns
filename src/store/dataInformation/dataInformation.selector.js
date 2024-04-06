import { createSelector } from "reselect";

const cartInformationSlice = (state)=>state.stored;

export const storedSelector = createSelector(
    [cartInformationSlice],
    (storedOutput)=>storedOutput.cartStore
)

export const counterSelector = createSelector(
    [cartInformationSlice],
    (countOutput)=>countOutput.count
)

export const totalSelector = createSelector(
    [cartInformationSlice],
    (totalOutput)=>totalOutput.total
)