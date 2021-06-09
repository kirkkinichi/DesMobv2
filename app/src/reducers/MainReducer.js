import { DefaultTheme } from "@react-navigation/native";

export const initialState = {
    avatar: '',
    favorites: [],
    appointments: []
};

export const MainReducer = (state, action) => {
    switch(action.type){
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar};
            break;
        default:
            return state;
    }
}