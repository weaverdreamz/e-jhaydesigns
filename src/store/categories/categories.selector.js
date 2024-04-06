import { createSelector } from "reselect";

const categorySlice = (state)=>state.categories;

export const categorySelector = createSelector(
    [categorySlice],
    (categoryOutput)=>categoryOutput.categories.reduce((acc, category)=>{

        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    },{})
)

