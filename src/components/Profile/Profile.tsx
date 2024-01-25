import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { UserProfileType } from "../../redux/redux-store";

type PropsType = {
  profile: UserProfileType;
};

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
