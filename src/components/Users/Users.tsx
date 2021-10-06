import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    totalUsers: number,
    pageSize: number,
    currentPage: number,
    onPageChanging: (p: number) => void,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    unfollow: Function
    follow: Function
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
                                 alt="profile avatar"/>
                        </NavLink>
                        {user.followed

                            //------------UNFOLLOW-------------
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                            //------------FOLLOW-------------
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.follow(user.id)}}>Follow</button>
                        }
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