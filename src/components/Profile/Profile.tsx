import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type PropsProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Profile:React.FC<PropsProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;
