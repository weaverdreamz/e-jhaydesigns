import {createContext, useReducer} from 'react';

export const MobilemenuContext = createContext({
    displayMenu:false,
    setDisplayMenu:()=>{

    }
})

export const MENU_ACTION_TYPES = {
    MENU_DISPLAY:'MENU_DISPLAY'
};

const menuReducer = (state, action)=>{
    const {type, payload} = action;

    switch(type){
        case MENU_ACTION_TYPES.MENU_DISPLAY:
            return{
                ...state,
                displayMenu:payload,
            }
        default:
            throw new Error(`Undefined type ${type} in mobilemenu context`)
    }

};

const INITIAL_STATE = {
    displayMenu:false,
};

export const MobilemenuProvider = ({children})=>{
    const [{displayMenu}, dispatch] = useReducer(menuReducer, INITIAL_STATE);

    const setDisplayMenu = (menu)=>{
        dispatch({type:MENU_ACTION_TYPES.MENU_DISPLAY, payload:menu})

    };

    const value = {displayMenu, setDisplayMenu};

    return <MobilemenuContext.Provider value={value}>{children}</MobilemenuContext.Provider>
    
}