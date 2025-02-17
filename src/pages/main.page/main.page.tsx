import { Title } from '@/shared/ui/title/ui/title';
import { useAppSelector } from '@/store/hooks';
import { UserCardsGroup } from '@/widgets/index';
import { selectUsersActive, selectUsersArchive } from '@/store/selectors/users/usersSelectors';

export const MainPage = () => {
  const usersActive = useAppSelector(selectUsersActive);
  const usersArchive = useAppSelector(selectUsersArchive);

  return (
    <>
      <Title text="Активные" />
      <UserCardsGroup users={usersActive} />
      <Title text="Архив" />
      <UserCardsGroup users={usersArchive} />
    </>
  );
};
