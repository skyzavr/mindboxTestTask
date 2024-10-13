import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '[tabindex="-1"]': {
        maxWidth: '500px',
        width: '100%',
        minWidth: '320px',
      },
    },
  };
});
