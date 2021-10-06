import React from "react";
import style from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/redux-store";

type PropsType = {
    profile: UserProfileType
}

const ProfileInfo = (props: PropsType) => {

    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt="Man with a camera"
                    className={style.backgroundImage}/>
            </div>
            <div className={style.avaAndDescriptionBlock}>
                <div>
                    <img className={style.avatar} src={props.profile.photos.large} alt={"User avatar"}/>
                </div>
                {console.log(props.profile)}
                <div className={style.description}>
                    <span><b> {props.profile.fullName}</b></span>
                    <span>ID: {props.profile.userId}</span>
                    <span>Looking For A Job: {props.profile.lookingForAJobDescription}</span>
                </div>
                    <div>
                        <ul>My contacts:
                            <li>GitHub: <a href={''}>{props.profile.contacts.github}</a>
                            </li>
                            <li>VK: <a href={''}>{props.profile.contacts.vk}</a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div className={style.aboutMeBlock}>
                <div> <b>About Me:</b> {props.profile.aboutMe}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;