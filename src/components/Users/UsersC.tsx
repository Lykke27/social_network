import React from "react";
import {MapDispatchPropsType, MapStatePropsType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg"
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = MapDispatchPropsType & MapStatePropsType

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div className={styles.users}>
            {this.props.users.map(user =>
                <div key={Math.random()} className={styles.userInfo}>
                    <div>
                        <div className={styles.avaAndButtonBlock}>
                            <img className={styles.userAvatar}
                                 src={user.photos.small != null ? user.photos.small : userPhoto}
                                 alt="profile picture"/>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
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
}

export default Users;