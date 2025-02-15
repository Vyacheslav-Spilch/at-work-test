import { ButtonHTMLAttributes } from "react"
import s from "./style.module.css"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export const Button = ({
    text,
    ...props
}: ButtonProps) => {
    return (
        <button className={s.btn} {...props}>
            {text}
        </button>
    )
}