import { Title } from '@/shared/ui/title/ui/title';
import { useAppSelector } from '@/store/hooks';
import { UserCardsGroup } from '@/widgets/index';
import { selectUsersIsActive, selectUsersIsArchive } from '@/store/selectors/users/usersSelectors';

export const MainPage = () => {
  const usersActive = useAppSelector(selectUsersIsActive);
  const usersArchive = useAppSelector(selectUsersIsArchive);

  return (
    <>
      <Title text="Активные" />
      <UserCardsGroup users={usersActive} />
      <Title text="Архив" />
      <UserCardsGroup users={usersArchive} />
    </>
  );
};
