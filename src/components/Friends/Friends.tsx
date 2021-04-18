import React from "react";
import style from "./Friends.module.css"
import {FriendsPageType} from "../../redux/friends-reducer";

const Friends: React.FC<FriendsPageType> = () => {
    return (
        <div className={style.friendsPage}>
            Friends Page
        </div>
    )
}

export default Friends;