import { createSelector } from "reselect"

const mobileSlice = (state)=>state.mobileMenu;

export const mobileSelector = createSelector(
    [mobileSlice],
    (mobile)=>mobile.displayMobileMenu
)