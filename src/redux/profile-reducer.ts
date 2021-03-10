import {ActionsTypes, ProfilePageType} from "./store";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
        posts: [
            {id: 1, message: 'Hello!', likeCount: 5},
            {id: 2, message: "It's my first post", likeCount: 15},
            {id: 3, message: "It's my first post", likeCount: 15},
            {id: 4, message: "It's my first post", likeCount: 17},
            {id: 5, message: "It's my first post", likeCount: 0},
        ],
        newPostText: "HelloBoi"
    };

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;

