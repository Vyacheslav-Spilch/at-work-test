import { FavoriteIcon } from "../../shared/icons/favorite"
import { Logo } from "../../shared/icons/logo"
import { NotificationIcon } from "../../shared/icons/notification"
import s from "./style.module.css"
import imageUser from "./../../assets/userImage.jpeg"

export const Header = () => {
    return (
        <header className={s.header}>
            <Logo />
            <div className={s.register_menu}>  
                <div className={s.box_icon}> 
                    <FavoriteIcon />
                    <NotificationIcon />
                </div>
                <div className={s.box_user_icon}>
                    <img className={s.image} src={imageUser} alt="Пользователь"/>
                    <span>Ivan 1234</span>
                </div>
            </div>
        </header>
    )
}