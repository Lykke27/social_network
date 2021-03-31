import {ActionsTypes, FollowActionType, SetUsersActionType, UnfollowActionType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";

let initialState = {
    users: [] as Array<UserType>
};

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        default:
            return state;
    }
}


type InitialStateType = typeof initialState;
type UsersPageType = {
    users: Array<UserType>
}

// type UserType = typeof Users можно попробовать так

export type UserType = {
    id: number
    photoUrl: string
    fullName: string
    status: string
    followed: boolean
    location:
        {
            city: string,
            country: string
        }
}

export const followAC = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number): UnfollowActionType => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})

export default usersReducer;
