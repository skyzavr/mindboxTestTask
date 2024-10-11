import { Box, Container } from '@mui/material';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton, Text } from '@shared/ui';
import { useLocalStorage } from '@shared/lib/useLocalStorage';
import { useStyles } from './WelcomeStyle';

export const Welcome = () => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  const { value, set: setFirstVisit } = useLocalStorage('firstVisit', true);

  const navigateToTodo = () => {
    setFirstVisit(false);
    navigate('/home');
  };

  useEffect(() => {
    const firstVisit = value === 'false' ? false : true;
    !firstVisit && navigateToTodo();
  });

  return (
    <Container component="main" maxWidth="xl">
      <Box className={classes.wrapper}>
        <Text variant="h1">todo</Text>
        <Text variant="paragraph" styles={{ textAlign: 'center' }}>
          Lets get started with simple todo list
        </Text>
        <CustomButton variant="outlined" onClick={navigateToTodo}>
          Lets get started
        </CustomButton>
      </Box>
    </Container>
  );
};
