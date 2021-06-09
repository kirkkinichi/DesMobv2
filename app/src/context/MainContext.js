import React, {createContext, useReducer} from 'react'
import {initialState, MainReducer} from '../reducers/MainReducer'


export const UsersContext = createContext();

export default ({children}) => {
    const [state, dispatch] = useReducer(MainReducer, initialState);
    return(
        <UsersContext.Provider value={{state, dispatch}}>
            {children}
        </UsersContext.Provider>
    );
}