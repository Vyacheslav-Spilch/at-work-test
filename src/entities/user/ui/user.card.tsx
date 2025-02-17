import { useState } from 'react';
import { MoreIcon } from '@/shared/icons/more';
import imageUser from '@/assets/userImage.jpeg';
import s from './style.module.css';
import { DropDownMenu } from '@/shared/ui/drop.down.menu/ui/drop.down.menu';
import { shortenText } from '@/shared/lib/utils/shorten.text';
import { useActionsUserCard } from '../hooks/useActionsUserCard';

interface UserCardProps {
  id: number;
  archive: boolean;
  username: string;
  city: string;
  companyName: string;
}

export const UserCard = ({ id, archive, username, city, companyName }: UserCardProps) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { userActionsList } = useActionsUserCard(archive);

  const onHandleOpenDropMenu = () => {
    setIsOpenDropDown((prev) => !prev);
  };

  return (
    <main className={`${s.container} ${archive && s.archive}`}>
      <img className={s.image} src={imageUser} alt={`Пользователь ${username}`} />
      <section className={s.box_info}>
        <div className={s.box_top}>
          <div className={s.box_username}>
            <h3>{shortenText(username)}</h3>
            <MoreIcon onClick={onHandleOpenDropMenu} className={s.more} />
            <DropDownMenu id={id} isOpenDropDown={isOpenDropDown} itemsMenu={userActionsList} />
          </div>
          <div className={s.box_company}>
            <span>{companyName}</span>
          </div>
        </div>
        <div className={s.box_city}>
          <span>{city}</span>
        </div>
      </section>
    </main>
  );
};
