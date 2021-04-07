import React from "react";
import {MapDispatchPropsType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg"
import {UsersPageType, UserType} from "../../redux/users-reducer";

type UsersPropsType = MapDispatchPropsType & UsersPageType

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        });
    }

    onPageChanging = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={styles.users}>
            <div className={styles.pageNavigation}>
                {pages.slice(0, 15).map(page => {
                    return <span className={this.props.currentPage === page ? styles.selectedPage : styles.pageNumber}
                                 onClick={(e) => this.onPageChanging(page)}>{page}</span>
                })}
            </div>
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