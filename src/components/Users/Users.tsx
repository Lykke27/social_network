import React from "react";
import {MapDispatchPropsType, MapStatePropsType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg"

type UsersPropsType = MapDispatchPropsType & MapStatePropsType;

const Users = (props: UsersPropsType) => {
    if (props.users.length===0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div className={styles.users}>
            {props.users.map(user =>
                    <div key={Math.random()} className={styles.userInfo}>
                        <div>
                            <div className={styles.avaAndButtonBlock}>
                            <img className={styles.userAvatar} src={user.photos.small != null ?user.photos.small : userPhoto} alt="profile picture"/>
                                {user.followed
                                    ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                            </div>
                        </div>

                        <div className={styles.userContent}>

                           <div className={styles.userNameAndStatus}>
                               <div className={styles.userName}>{user.name}</div>
                               <div className={styles.userStatus}>{user.status}</div>
                           </div>

                            <div>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </div>

                        </div>
                    </div>
                    )
            }
        </div>

    )
}

export default Users;