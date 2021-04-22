import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setCurrentPage,
    setFollowingInProgress,
    unfollow,
    UsersPageType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

export type MapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    follow: Function
    unfollow: Function
    setCurrentPage: (pageNumber: number) => void
    setFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: Function
}

export type UsersPropsType = MapDispatchPropsType & UsersPageType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanging = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null
                }
                <Users
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanging={this.onPageChanging}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>)
    }
}

let mapStateToProps = (state: AppStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setFollowingInProgress,
    getUsers
})(UsersContainer);