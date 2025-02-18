import s from './style.module.css';
import imageUser from '@/assets/userImage.jpeg';
import { userSettingList } from '@/entities/user/constants/constants';
import { IUser } from '@/entities/user/types/types';

export const UserSettingBox = ({ user }: { user: IUser }) => {
  return (
    <section className={s.container_setting}>
      <img className={s.image} src={imageUser} alt={`Пользователь ${user.id}`} />
      <div className={s.box_categories}>
        {userSettingList.map((category) => (
          <div key={category} className={s.category}>
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};
