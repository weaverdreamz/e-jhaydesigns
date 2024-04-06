import { createSelector } from "reselect";

const userSlice = (state)=>state.users;

export const userSelector = createSelector(
    [userSlice],
    (userOutput)=>userOutput.user
)