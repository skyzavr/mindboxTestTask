import { useState } from 'react';

import { TaskHandler } from '@entities/taskHandler';
import { CustomButton, CustomModal } from '@shared/ui';
import { CardProps } from '@type/app';

import { isDataCorrect } from '@shared/lib/taskHelper';
import { useDispatch } from 'react-redux';
import { addTask } from '@widgets/Cards/model/slice';

export const NewTask = () => {
  const dispatch = useDispatch();
  const initState: CardProps = {
    title: '',
    description: '',
    color: 'blue',
    id: new Date().setSeconds(new Date().getSeconds()).toString(),
    isDone: false,
  };

  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<CardProps>({ ...initState });

  const editHandler = () => {
    setOpen((p) => !p);
    setData({ ...initState });
  };

  const onAddData = () => {
    dispatch(addTask({ ...data }));
    editHandler();
  };

  return (
    <>
      <CustomButton onClick={editHandler}>Add new</CustomButton>
      {open && (
        <CustomModal open={open} onHandleModal={editHandler}>
          <TaskHandler data={data} setData={setData}>
            <>
              <CustomButton variant="text" onClick={editHandler}>
                Cancel
              </CustomButton>
              <CustomButton
                variant="contained"
                onClick={onAddData}
                isDisabled={!isDataCorrect(data)}
              >
                Add new
              </CustomButton>
            </>
          </TaskHandler>
        </CustomModal>
      )}
    </>
  );
};
