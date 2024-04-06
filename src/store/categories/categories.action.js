import { CATEGORIES_ACTION_TYPES } from "./categories.type";

export const updateCategories = (cate)=>{

    return({type:CATEGORIES_ACTION_TYPES.SET_CATEGORIES, payload:cate})
}