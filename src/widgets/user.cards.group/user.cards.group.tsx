import {  useMemo } from "react"
import { UserCard } from "../../entities/index"
import { Spinner } from "../../shared/icons/spinner"
import * as usersSelector from "../../store/slices/users/selectors.users"
import s from "./style.module.css"
import { IUser } from "./../../entities/user/types/types"
import { useAppSelector } from "../../store/hooks"


interface UserCardsGroupProps {
    users: IUser[]
}

export const UserCardsGroup = ({ users }: UserCardsGroupProps) => {
    const loading = useAppSelector(usersSelector.selectIsLoading)
    const memoUsers = useMemo(() => users, [users])

    return (
        <div className={s.container}>
            {loading === "succeeded" ? memoUsers.map((user) => (
                <UserCard
                    key={user.id}
                    id={user.id} 
                    archive={user.archive}
                    username={user.username}
                    companyName={user.company}
                    city={user.city}
                />
            )) 
            : <Spinner />
            }
        </div>
    )
}