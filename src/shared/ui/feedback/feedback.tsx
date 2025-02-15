import s from "./style.module.css"
import { CloseIcon } from "../../icons/close"
import { DoneIcon } from "../../icons/done"

interface FeedBackProps {
    onClick: () => void
}

export const FeedBack = ({ onClick }: FeedBackProps) => {


    return (
        <div className={s.container}>
            <CloseIcon 
                className={s.close} 
                onClick={onClick}
            />
            <DoneIcon />
            <span className={s.message}>Изменения сохранены!</span>
        </div>
    )
}