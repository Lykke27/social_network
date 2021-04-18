import {ActionsTypes, setUserDataActionType} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
 switch (action.type){
     case SET_USER_DATA: {
         return {
             ...state,
             ...action.data
         }
     }
     default:
         return {...state}
 }
}

export type InitialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
}

export const setUserData = (userId: number, email: string, login: string):setUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
})

export default authReducer;