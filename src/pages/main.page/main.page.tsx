import { Title } from '../../shared/ui/title/title';
import { useAppSelector } from '../../store/hooks';
import { UserCardsGroup } from '../../widgets/index';
import * as usersSelector from '../../store/slices/users/selectors.users';

export const MainPage = () => {
  const usersActive = useAppSelector(usersSelector.selectUsersActive);
  const usersArchive = useAppSelector(usersSelector.selectUsersArchive);

  return (
    <>
      <Title text="Активные" />
      <UserCardsGroup users={usersActive} />
      <Title text="Архив" />
      <UserCardsGroup users={usersArchive} />
    </>
  );
};
