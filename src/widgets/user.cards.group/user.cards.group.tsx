import { useMemo } from 'react';
import { UserCard } from '@/entities/index';
import { Spinner } from '@/shared/icons/spinner';
import { selectUserIsLoading } from '@/store/selectors/users/usersSelectors';
import s from './style.module.css';
import { IUser } from '@/entities/user/types/types';
import { useAppSelector } from '@/store/hooks';

interface UserCardsGroupProps {
  users: IUser[];
}

export const UserCardsGroup = ({ users }: UserCardsGroupProps) => {
  const isLoading = useAppSelector(selectUserIsLoading);
  const memoUsers = useMemo(() => users, [users]);

  return (
    <div className={s.container}>
      {isLoading === 'succeeded' ? (
        memoUsers.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            isArchive={user.isArchive}
            username={user.username}
            companyName={user.company}
            city={user.city}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};
