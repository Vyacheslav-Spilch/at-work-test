import { LogoIcon, FavoriteIcon, NotificationIcon } from '@/shared/icons/index';
import s from './style.module.css';
import imageUser from '@/assets/userImage.jpeg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={s.header}>
      <Link to={'/'}>
        <LogoIcon />
      </Link>
      <div className={s.register_menu}>
        <div className={s.box_icon}>
          <FavoriteIcon />
          <NotificationIcon />
        </div>
        <div className={s.box_user_icon}>
          <img className={s.image} src={imageUser} alt="Пользователь" />
          <span>Ivan 1234</span>
        </div>
      </div>
    </header>
  );
};
