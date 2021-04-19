import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    totalUsers: number,
    pageSize: number,
    currentPage: number,
    onPageChanging: (p: number) => void,
    users: Array<UserType>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}

let Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.users}>
        <div className={styles.pageNavigation}>
            {pages.slice(0, 15).map(page => {
                return <span className={props.currentPage === page ? styles.selectedPage : styles.pageNumber}
                             onClick={(e) =>
                                 props.onPageChanging(page)}>{page}</span>
            })}
        </div>
        {props.users.map(user =>
            <div key={Math.random()} className={styles.userInfo}>
                <div>
                    <div className={styles.avaAndButtonBlock}>
                        <NavLink to={"/profile/" + user.id}>
                            <img className={styles.userAvatar}
                                 src={user.photos.small != null ? user.photos.small : userPhoto}
                                 alt="profile picture"/>
                        </NavLink>
                        {user.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "2ed61e06-26ec-45be-9d39-940904ed6093"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                    });
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "2ed61e06-26ec-45be-9d39-940904ed6093"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    });
                            }}>Follow</button>}
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
}

export default Users;