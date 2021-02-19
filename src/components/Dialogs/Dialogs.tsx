import React from "react";
import style from './Dialogs.module.css'

const Dialogs = (props: any) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog}>
                    Вася
                </div>
                <div className={style.dialog}>
                    Петя
                </div>
                <div className={style.dialog}>
                    Серега
                </div>

            </div>
            <div className={style.messages}>
                <div className="message">Здарова</div>
                <div className="message">Че как?</div>
                <div className="message">йоу бро))</div>
            </div>
        </div>
    )
}

export default Dialogs;