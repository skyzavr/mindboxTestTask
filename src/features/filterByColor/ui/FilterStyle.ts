import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    wrapper: {
      display: 'flex',
      '>span:nth-of-type(2n)': {
        margin: '0 5px',
      },
    },
  };
});
