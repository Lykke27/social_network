import React from "react";
import {MapDispatchPropsType, MapStatePropsType} from "./UsersContainer";
import styles from "./Users.module.css"

type UsersPropsType = MapDispatchPropsType & MapStatePropsType;

const Users = (props: UsersPropsType) => {
    if (props.users.length===0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
                followed: false, fullName: "Kirill", status: 'Hello!', location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 2,
                photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
                followed: true,
                fullName: "Andrew",
                status: "It's my first status",
                location: {city: "SPB", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
                followed: false, fullName: "Sasha", status: "What's up?", location: {city: "Kiev", country: "Ukraine"}
            },
            {
                id: 4,
                photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
                followed: false, fullName: "Sveta", status: "Hello there", location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 5,
                photoUrl: "https://i.pinimg.com/474x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg",
                followed: true,
                fullName: "Alex",
                status: "Here is the status",
                location: {city: "Moscow", country: "Russia"}
            },
        ])
    }

    return (
        <div className={styles.users}>
            {props.users.map(user =>
                    <div key={Math.random()} className={styles.userInfo}>
                        <div>
                            <div className={styles.avaAndButtonBlock}>
                            <img className={styles.userAvatar} src={user.photoUrl} alt="profile picture"/>
                                {user.followed
                                    ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                            </div>
                        </div>

                        <div className={styles.userContent}>

                           <div className={styles.userNameAndStatus}>
                               <div className={styles.userName}>{user.fullName}</div>
                               <div className={styles.userStatus}>{user.status}</div>
                           </div>

                            <div>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </div>

                        </div>
                    </div>
                    )
            }
        </div>

    )
}

export default Users;