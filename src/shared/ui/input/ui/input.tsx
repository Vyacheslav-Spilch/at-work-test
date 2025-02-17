import { InputHTMLAttributes } from 'react';
import s from './style.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = ({ error = false, ...props }: InputProps) => {
  return <input className={`${s.input} ${error && s.error}`} {...props} />;
};
