import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType, UserProfileType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
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
    setUserProfile: (profile: UserProfileType) => void
}
type UsersProfilePropsType = MapDispatchPropsType & MapStatePropsType
type CommonUsersProfilePropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType

class ProfileContainer extends React.Component<CommonUsersProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
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

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);