import React, {createContext, useReducer} from 'react'
import {initialState, MainReducer} from '../reducers/MainReducer'


export const MainContext = createContext();

export default ({children}) => {
    const [state, dispatch] = useReducer(MainReducer, initialState);
    return(
        <MainContext.Provider value={{state, dispatch}}>
            {children}
        </MainContext.Provider>
    );
}