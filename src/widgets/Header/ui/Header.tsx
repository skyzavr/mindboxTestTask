import { AppBar, Toolbar } from '@mui/material';

import { NewTask } from '@features/addNewTask';
import { Text } from '@shared/ui';
import { useStyles } from './HeaderStyles';

export const Header = () => {
  const { classes } = useStyles();

  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.wrapper}>
        <Text variant="h2">todo</Text>
        <NewTask />
      </Toolbar>
    </AppBar>
  );
};
