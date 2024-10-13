import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCards } from '@pages/Home/lib/selectors';
import { editTask } from '@widgets/Cards/model/slice';
import { TaskHandler } from '@entities/taskHandler';
import { isDataCorrect } from '@shared/lib/taskHelper';
import { CustomButton } from '@shared/ui';
import { CardProps } from '@type/app';

type EditTaskProps = {
  id: string;
  editHandler: () => void;
};
export const EditTask = ({ id, editHandler }: EditTaskProps) => {
  const { entities: cards } = useSelector(getCards);
  const dispatch = useDispatch();
  const card = cards.filter((el) => el.id === id)[0];

  const [data, setData] = useState<CardProps>({ ...card });

  const onEdit = () => {
    dispatch(editTask({ id, card: data }));
    editHandler();
  };

  return (
    <TaskHandler data={data} setData={setData}>
      <>
        <CustomButton variant="text" onClick={editHandler}>
          Cancel
        </CustomButton>
        <CustomButton
          variant="contained"
          onClick={onEdit}
          isDisabled={!isDataCorrect(data)}
        >
          Save changes
        </CustomButton>
      </>
    </TaskHandler>
  );
};
