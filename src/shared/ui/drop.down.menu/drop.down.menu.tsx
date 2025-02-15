import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks"
import { deleteUser, moveToArchive, removeFromArchive } from "../../../store/slices/users/usersSlice"
import s from "./style.module.css"

interface DropDownMenuProps {
    id: number
    openDropDown: boolean
    archive: boolean
}

export const DropDownMenu = ({ id, openDropDown, archive }: DropDownMenuProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const onHandleRemoveFromArchive = () => {
        dispatch(removeFromArchive({id}))
    }

    const onHandleMoveToArchive = () => {
        dispatch(moveToArchive({id}))
    }

    const onHandleDeleteUser = () => {
        dispatch(deleteUser({id}))
    }

    const onHandleNavigation = () => {
        navigate(`/user/${id}`)
    }

    return (
        <section className={`${s.container_drop} ${openDropDown && s.visible}`}>
            {archive ? 
                <button onClick={onHandleRemoveFromArchive} className={s.btn_point}>
                    Активировать
                </button>
            : 
               <>
                <button onClick={onHandleNavigation} className={s.btn_point}>
                    Редактировать
                </button>
                <button onClick={onHandleMoveToArchive} className={s.btn_point}>
                    Архивировать
                </button>
                <button onClick={onHandleDeleteUser} className={s.btn_point}>
                    Скрыть
                </button>
               </>
            }
        </section>
    )
}