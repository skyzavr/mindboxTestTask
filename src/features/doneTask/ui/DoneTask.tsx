import { useDispatch } from 'react-redux';
import { MouseEvent } from 'react';
import { Box, Checkbox } from '@mui/material';

import { setIsDoneTask } from '@widgets/Cards/model/slice';

import { useStyles } from './DoneTaskStyle';

export const DoneTask = ({ init, id }: { init: boolean; id: string }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const handleIsDone = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(setIsDoneTask({ id, isDone: !init }));
  };

  return (
    <Box className={classes.wrapper}>
      <Checkbox
        checked={init}
        className={classes.checkbox}
        onClick={(e) => handleIsDone(e)}
      />
    </Box>
  );
};
