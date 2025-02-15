import s from "./style.module.css"

export const Wrapper = ({children}: any) => {
    return (
        <main className={s.wrapper}>
            {children}
        </main>
    )
}