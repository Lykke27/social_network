import React from "react";
import style from './News.module.css'

const News = () => {
    return (
        <div className={style.newsPage}>
            {/*Для разработки приложения используется API с сайта <a href="https://social-network.samuraijs.com/">https://social-network.samuraijs.com/</a>.*/}
            {/*Данные с API доступны только для зарегистрированных пользователей, поэтому на данный момент на GitHub-pages вкладки Profile и Find Users в бесконечной загрузке.*/}
            {/*Скоро добавится функция регистрации и все будет в порядке, stay tuned!*/}
        </div>
    )
}

export default News;