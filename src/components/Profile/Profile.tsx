import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type PropsProfileType = {
    profilePage: ProfilePageType
    dispatch: any
    newPostText: string
}

const Profile:React.FC<PropsProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}

            />
        </div>
    );
}

export default Profile;
