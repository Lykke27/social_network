import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType, UserProfileType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router";

type PathParamType = {
    userId: string
}
type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    profile: null | UserProfileType
}
type MapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    getUserProfile: Function
}
type UsersProfilePropsType = MapDispatchPropsType & MapStatePropsType
type CommonUsersProfilePropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType

class ProfileContainer extends React.Component<CommonUsersProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId);
    }
    render() {
        return (
            this.props.profile
                ? <Profile {...this.props} profile={this.props.profile}/>
                : <Preloader/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);