import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let MyPostsContainer = connect(mapStateToProps, {
    updateNewPostText,
    addPost
})(MyPosts);

export default MyPostsContainer;