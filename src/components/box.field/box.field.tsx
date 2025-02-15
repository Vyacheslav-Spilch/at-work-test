import { UseFormRegister } from "react-hook-form"
import { Input } from "../../shared/ui/index"
import s from "./style.module.css"
import { FieldsKey, UserFormType, FieldLabel } from "./../../pages/user.page/user.form.fields/validation/validation"
import { CloseIcon } from "../../shared/icons/close"


interface BoxFieldProps {
    label: FieldLabel
    register: UseFormRegister<UserFormType>
    defaultValue: UserFormType[keyof UserFormType]
    fieldName: FieldsKey 
    error: boolean
    setValue: (key: FieldsKey, value: UserFormType[keyof UserFormType]) => void,
}

export const BoxField = ({ 
    label, 
    register, 
    defaultValue,
    fieldName, 
    error,  
    setValue,
}: BoxFieldProps) => {
    
  
    return (
        <div className={s.box_field}>
            <span className={s.label}>{label}</span>
            <Input 
                error={error} 
                defaultValue={defaultValue}
                {...register(fieldName)} 
            />
                <CloseIcon 
                className={s.clean_input}
                onClick={() => setValue(fieldName, "")}
            />
        </div>
    )
}