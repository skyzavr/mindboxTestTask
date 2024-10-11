import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '@media (min-width:320px)': {
        marginTop: '200px',
      },
      '@media (min-width:1280px)': {
        marginTop: '230px',
      },
    },
  };
});
