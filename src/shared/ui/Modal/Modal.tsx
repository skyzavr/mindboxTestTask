import { ReactElement } from 'react';
import { Modal } from '@mui/material';
import { useStyles } from './ModalStyle';

type modalProps = {
  open: boolean;
  onHandleModal: () => void;
  children: ReactElement;
};
export const CustomModal = (props: modalProps) => {
  const { classes } = useStyles();
  const { open, onHandleModal, children } = props;
  return (
    <Modal open={open} onClose={onHandleModal} className={classes.wrapper}>
      <div>{children}</div>
    </Modal>
  );
};
