import { combineReducers } from "redux";
import { displayCartReducer } from "./cartRedux/cart.reducer";
import { mobileReducer } from "./mobilemenu/mobilemenu.reducer";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { dataInformationReducer } from "./dataInformation/dataInformation.reducer";

export const rootReducer = combineReducers({
    cart:displayCartReducer,
    mobileMenu:mobileReducer,
    users:userReducer,
    categories:categoriesReducer,
    stored:dataInformationReducer,
      
})