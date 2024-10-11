import { Container } from '@mui/material';

import { Outlet } from 'react-router-dom';

import { Header } from '@widgets/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <hr />
      <Container component="main" maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};
