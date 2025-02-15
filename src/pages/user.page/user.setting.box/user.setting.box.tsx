import s from './style.module.css';
import imageUser from './../../../assets/userImage.jpeg';
import { IUser } from '../../../shared/lib/api/api';

export const UserSettingBox = ({ user }: { user: IUser }) => {
  const categoriesList = [
    'Данные профиля',
    'Рабочее пространство',
    'Приватность',
    'Безопасность',
  ];

  return (
    <section className={s.container_setting}>
      <img
        className={s.image}
        src={imageUser}
        alt={`Пользователь ${user.id}`}
      />
      <div className={s.box_categories}>
        {categoriesList.map((category) => (
          <div key={category} className={s.category}>
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};
