import { useMemo } from 'react';
import { UserCard } from '@/entities/user/ui/index';
import { Spinner } from '@/assets/icons/spinner';
import { selectUserIsLoading } from '@/store/selectors/users/usersSelectors';
import s from './style.module.css';
import { IUser, UsersStatus } from '@/entities/user/types/types';
import { useAppSelector } from '@/store/hooks';

interface UserCardsGroupProps {
  users: IUser[];
  status: UsersStatus;
}

export const UserCardsGroup = ({ users, status }: UserCardsGroupProps) => {
  const isLoading = useAppSelector(selectUserIsLoading);
  const memoUsers = useMemo(() => users, [users]);

  return (
    <div className={s.container}>
      {isLoading === 'pending' && <Spinner />}
      {isLoading === 'succeeded' &&
        memoUsers.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            status={status}
            username={user.username}
            company={user.company}
            city={user.city}
          />
        ))}
    </div>
  );
};
