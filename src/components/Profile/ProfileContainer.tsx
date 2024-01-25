import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import Profile from "./Profile";
import { RootState } from "../../redux/redux-store";

const mapStateToProps = (state: RootState) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = {
  getUserProfile,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileContainer: React.FC<PropsFromRedux> = ({
  profile,
  getUserProfile,
}) => {
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    if (!userId) {
      getUserProfile("2");
    } else {
      getUserProfile(userId);
    }
  }, [userId, getUserProfile]);

  return profile ? <Profile profile={profile} /> : <Preloader />;
};

export default connector(ProfileContainer);
