import { useState } from 'react';
import { MoreIcon } from '@/assets/icons/more';
import imageUser from '@/assets/userImage.jpeg';
import s from './style.module.css';
import { DropDownMenu } from '@/shared/ui/drop.down.menu/ui/drop.down.menu';
import { shortenText } from '@/shared/lib/utils/shorten.text';
import { useActionsUserCard } from '../../lib/hooks/useActionsUserCard';
import { UsersStatus } from '../../types/types';

interface UserCardProps {
  id: number;
  username: string;
  city: string;
  company: string;
  status: UsersStatus;
}

export const UserCard = ({ id, username, status, city, company }: UserCardProps) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { userActionsList } = useActionsUserCard(status);

  const onHandleOpenDropMenu = () => {
    setIsOpenDropDown(prev => !prev);
  };

  return (
    <main className={`${s.container} ${status === 'archive' && s.archive}`}>
      <img className={s.image} src={imageUser} alt={`Пользователь ${username}`} />
      <section className={s.box_info}>
        <div className={s.box_top}>
          <div className={s.box_username}>
            <h3>{shortenText(username)}</h3>
            <MoreIcon onClick={onHandleOpenDropMenu} className={s.more} />
            <DropDownMenu id={id} isOpenDropDown={isOpenDropDown} itemsMenu={userActionsList} />
          </div>
          <div className={s.box_company}>
            <span>{company}</span>
          </div>
        </div>
        <div className={s.box_city}>
          <span>{city}</span>
        </div>
      </section>
    </main>
  );
};
