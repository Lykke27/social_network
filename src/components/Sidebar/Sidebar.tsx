import React from "react";
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="">News</a>
            </div>
            <div className={classes.item}>
                <a href="">Music</a>
            </div>
        </div>
    )
}

export default Sidebar;