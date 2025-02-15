import s from './style.module.css';

interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <div className={s.container}>
      <h2>{text}</h2>
    </div>
  );
};
