import {ActionsTypes, setAuthUserDataActionType} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";

export type InitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return {...state}
    }
}

export const setAuthUserData = (data: InitialStateType): setAuthUserDataActionType => ({
    type: SET_USER_DATA, data
})

export default authReducer;