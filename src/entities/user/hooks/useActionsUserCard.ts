import { Routers } from '@/app/routers/app.routers';
import { IDropDownMenuItems } from '@/shared/ui/drop.down.menu/types/types';
import { useAppDispatch } from '@/store/hooks';
import { deleteUser, moveToArchive, removeFromArchive } from '@/store/slices/users/usersSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useActionsUserCard = (archive: boolean) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [userActionsList, setUserActionsList] = useState<IDropDownMenuItems[]>([]);

  useEffect(() => {
    const actions = archive
      ? [
          {
            actionName: 'Активировать',
            actionFunc: (id: number) => {
              dispatch(removeFromArchive({ id }));
            },
          },
        ]
      : [
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

    setUserActionsList((prevList) => [...prevList, ...actions]);
  }, [archive, dispatch, navigate]);

  return { userActionsList };
};
