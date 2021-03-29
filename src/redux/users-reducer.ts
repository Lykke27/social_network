import {ActionsTypes} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1,
            photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
            followed: false, fullName: "Kirill", status: 'Hello!', location: {city: "Moscow", country: "Russia"}},
        {id: 2,
            photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
            followed: true, fullName: "Andrew", status: "It's my first status", location: {city: "SPB", country: "Russia"}},
        {id: 3,
            photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
            followed: false, fullName: "Sasha", status: "What's up?", location: {city: "Kiev", country: "Ukraine"}},
        {id: 4,
            photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
            followed: false, fullName: "Sveta", status: "Hello there", location: {city: "Minsk", country: "Belarus"}},
        {id: 5,
            photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
            followed: true, fullName: "Alex", status: "Here is the status", location: {city: "Moscow", country: "Russia"}},
    ] as Array<UserType>,
    newPostText: ""
};

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
           return {
               ...state,
               users: state.users.map(user => {
                   if(user.id === action.userID) {
                        return {...user, followed: true}
                   }
                 return user
               })
           }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS: {
            return {...state, users:[...state.users, ...action.users]}
        }

        default:
            return state;
    }
}


type InitialStateType = typeof initialState;
type UsersPageType = {
    users: Array<UserType>
}
// type UserType = typeof Users
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

export const followAC = (userID:number) => ({type: FOLLOW, userID})
export const unfollowAC = (userID:number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users:Array<UserType>) => ({type: SET_USERS, users})


export default usersReducer;
