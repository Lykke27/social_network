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
            <div>
                <img className={style.avatar} src={props.profile.photos.small} alt={"User avatar"}/>
                <span>ava + description</span>
            </div>
        </div>
    )
}
export default ProfileInfo;