import React from "react";
import s from './Header.module.css';

const Header = () => {
    return(
        <div className={s.header}>
           <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png'></img>
        </div>
    );
}
export default Header;