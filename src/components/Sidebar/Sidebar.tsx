import React from "react";
import {NavLink} from "react-router-dom";
import style from './Sidebar.module.css'
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import {SidebarType} from "../../redux/store";

type PropsType = {
    sidebar: SidebarType
}

const Sidebar: React.FC<PropsType> = (props) => {
    return (
        <div className={style.sidebar}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/friends" activeClassName={style.activeLink}>Friends</NavLink>
            </div>
            <div className={style.friendsBlock}>
                {/*let friendsBlockElements = props.state.friendsData.map((d: { name: string; id: number; avatar: string}) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);*/}
                <div className={style.friendItem}><img
                    src={props.sidebar.sidebarFriends[0].avatar}/> {props.sidebar.sidebarFriends[0].name}</div>
                <div className={style.friendItem}><img
                    src={props.sidebar.sidebarFriends[1].avatar}/> {props.sidebar.sidebarFriends[1].name}</div>
                <div className={style.friendItem}><img
                    src={props.sidebar.sidebarFriends[2].avatar}/> {props.sidebar.sidebarFriends[2].name}</div>
            </div>

        </div>
    )
}

export default Sidebar;