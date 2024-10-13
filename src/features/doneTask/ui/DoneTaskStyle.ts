import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    wrapper: {
      display: 'flex',
      justifyContent: 'right',
    },
    checkbox: {
      padding: '0 5px',
      justifyContent: 'right',
    },
  };
});
