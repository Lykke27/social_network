import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsTypes, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";

type PropsType = {
    // posts: Array<PostType>
    // newPostText: string
    // dispatch: (action: any) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    store: StoreType
}


const MyPostsContainer = (props: PropsType) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }


    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost} posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    dispatch={props.store.dispatch}/>
}

export default MyPostsContainer;