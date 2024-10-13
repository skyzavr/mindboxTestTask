import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { deleteTask } from '@widgets/Cards/model/slice';
import { EditTask } from '@features/editTask';
import { CustomModal } from '@shared/ui';
import { eventBtnElement, eventElement } from '@type/app';

type updateClb = (el: boolean) => void;
type MenuProps = { id: string; setMenu: updateClb; onSetMenu: updateClb };

export const CardMenu = ({ id, setMenu, onSetMenu }: MenuProps) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const open = Boolean(anchorEl);
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleClose = (e: eventElement | eventBtnElement) => {
    e.stopPropagation();
    if (divRef?.current === null) return;

    divRef.current.contains(e.currentTarget)
      ? setAnchorEl(e.currentTarget)
      : setAnchorEl(null);
  };

  const onDeleteTask = (id: string, e: eventElement | eventBtnElement) => {
    handleClose(e);
    dispatch(deleteTask({ id }));
  };

  const onEditTask = (e: eventElement | eventBtnElement) => {
    handleClose(e);
    setMenu(false);
    handle();
  };

  const handle = () => {
    onSetMenu(!edit);
    setEdit((prev) => !prev);
  };

  return (
    <div ref={divRef}>
      <IconButton aria-label="more" onClick={handleClose} aria-haspopup="true">
        <MoreVertIcon />
      </IconButton>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={(e) => onEditTask(e)}>edit card</MenuItem>
        <MenuItem onClick={(e) => onDeleteTask(id, e)}>delete card</MenuItem>
      </Menu>
      {edit && (
        <CustomModal open={edit} onHandleModal={handle}>
          <EditTask id={id} editHandler={handle} />
        </CustomModal>
      )}
    </div>
  );
};
