import React, {createContext, useReducer} from 'react'
import users from '../data/users'

const UsersContext = createContext ({})
const initialState = {users}
const actions = {
    deleteUser(state, action) {
        const user = action.payload
        return{
            ...state,
            users: state.users.filter(x => x.id !== user.id)
        }
    },
    createUser(state, action){
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user]
        }
    },
    updateUser(state, action){
        const user = action.payload
        return{
            ...state,
            users: state.users.map(x => x.id === user.id ? user:x)
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action){
        const y = actions[action.type]
        return y ? y(state, action):state
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <UsersContext.Provider value={{state, dispatch}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext