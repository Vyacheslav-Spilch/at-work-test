import React from 'react';
import s from './style.module.css';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className={s.wrapper}>{children}</main>;
};
