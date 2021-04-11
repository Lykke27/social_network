import React from "react";
import styles from "./Preloader.module.css";
import preloader from "../../../assets/images/giphy.gif";


let Preloader = () => {
    return (
        <div>
            <img className={styles.preloader} src={preloader}/>
        </div>
    )
}

export default Preloader;