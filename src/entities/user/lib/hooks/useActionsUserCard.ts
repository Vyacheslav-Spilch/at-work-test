import { Routers } from '@/app/routers/app.routers';
import { IDropDownMenuItems } from '@/shared/ui/drop.down.menu/types/types';
import { useAppDispatch } from '@/store/hooks';
import { deleteUser, moveToArchive, removeFromArchive } from '@/store/slices/users/usersSlice';
import { useNavigate } from 'react-router-dom';
import { UsersStatus } from '../../types/types';

export const useActionsUserCard = (status: UsersStatus) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const actionsUserCardActive: IDropDownMenuItems[] = [
    {
      actionName: 'Редактировать',
      actionFunc: (id: number) => {
        navigate(`${Routers.USER}/${id}`);
      },
    },
    {
      actionName: 'Архивировать',
      actionFunc: (id: number) => {
        dispatch(moveToArchive({ id }));
      },
    },
    {
      actionName: 'Скрыть',
      actionFunc: (id: number) => {
        dispatch(deleteUser({ id }));
      },
    },
  ];

  const actionsUserCardArchive: IDropDownMenuItems[] = [
    {
      actionName: 'Активировать',
      actionFunc: (id: number) => {
        dispatch(removeFromArchive({ id }));
      },
    },
  ];
  const userActionsList = status === 'active' ? actionsUserCardActive : actionsUserCardArchive;

  return { userActionsList };
};
