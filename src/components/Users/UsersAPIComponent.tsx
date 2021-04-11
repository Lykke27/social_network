import React from "react";
import {MapDispatchPropsType} from "./UsersContainer";
import axios from "axios";
import {UsersPageType} from "../../redux/users-reducer";
import Users from "./Users";

export type UsersPropsType = MapDispatchPropsType & UsersPageType

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanging = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanging={this.onPageChanging}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />)
    }
}

export default UsersAPIComponent;