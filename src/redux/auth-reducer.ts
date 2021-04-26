import {ActionsTypes, SetAuthUserDataActionType} from "./redux-store";
import {authAPI} from "../api/api";
import {Dispatch} from "react";

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
const setAuthUserData = (data: InitialStateType): SetAuthUserDataActionType => ({
    type: SET_USER_DATA, data
})

export const getAuthUserData = () => (dispatch: Dispatch<any>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data))
            }
        });
}

export default authReducer;