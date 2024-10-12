import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    divider: {
      maxWidth: '1080px',
      margin: '0 auto',
      height: '.5px',
      background: 'var(--dark)',
    },
    wrapper: {
      margin: '40px auto',
      maxWidth: '1080px',
    },
  };
});
