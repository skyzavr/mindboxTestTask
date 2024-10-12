import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import { Header } from '@widgets/Header';
import { useStyles } from './LayoutStyle';

export const Layout = () => {
  const { classes } = useStyles();
  return (
    <>
      <Header />
      <hr className={classes.divider} />
      <Container className={classes.wrapper}>
        <Outlet />
      </Container>
    </>
  );
};
