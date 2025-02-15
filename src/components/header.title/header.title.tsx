import { Link } from "react-router-dom"
import { BackIcon } from "../../shared/icons/back"
import s from "./style.module.css"


interface HeaderTitleProps {
    id: string
    title: string
    path: string

}

export const HeaderTitle = ({ id, title, path}: HeaderTitleProps) => {
    return (
        <header className={s.header}>
            <Link className={s.link} to={path}>
                <div className={s.box_icon}>
                    <BackIcon className={s.back_icon} id={id}/>
                    <label className={s.label} htmlFor={id}>{title}</label>
                </div>
            </Link>
        </header>
    )
}