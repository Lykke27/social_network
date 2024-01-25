import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

type PropsType = {
  isAuth: boolean;
  login: string | null;
};

const Header: React.FC<PropsType> = (props: PropsType) => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarLinks}>
        <NavLink to="/profile" className={style.navItem}>
          Profile
        </NavLink>

        <NavLink to="/news" className={style.navItem}>
          News
        </NavLink>

        <NavLink to="/dialogs" className={style.navItem}>
          Dialogs
        </NavLink>

        <NavLink to="/friends" className={style.navItem}>
          Friends
        </NavLink>

        <NavLink to="/music" className={style.navItem}>
          Music
        </NavLink>

        <NavLink to="/users" className={style.navItem}>
          Find Users
        </NavLink>

        <NavLink to="/settings" className={style.navItem}>
          Settings
        </NavLink>
      </div>
      {props.isAuth ? (
        <NavLink to="/profile" className={`${style.navItem} ${style.login}`}>
          {props.login}
        </NavLink>
      ) : (
        <NavLink to="/login" className={`${style.navItem} ${style.login}`}>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Header;
