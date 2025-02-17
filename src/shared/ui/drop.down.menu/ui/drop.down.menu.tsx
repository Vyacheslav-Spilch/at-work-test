import { IDropDownMenuItems } from '@/shared/ui/drop.down.menu/types/types';
import s from './style.module.css';

type DropDownMenuProps = {
  id: number;
  isOpenDropDown: boolean;
  itemsMenu: IDropDownMenuItems[];
};

export const DropDownMenu = ({ id, isOpenDropDown, itemsMenu }: DropDownMenuProps) => {
  return (
    <section className={`${s.container_drop} ${isOpenDropDown && s.visible}`}>
      {itemsMenu.map((action) => (
        <button key={`${action.actionName}`} onClick={() => action.actionFunc(id)} className={s.btn_point}>
          {action.actionName}
        </button>
      ))}
    </section>
  );
};
