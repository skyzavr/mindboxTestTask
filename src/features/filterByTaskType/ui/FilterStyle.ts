import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    activeTab: {
      font: 'var(--plain-black)',
      ':hover': {
        color: 'var(--dark)',
      },
    },
    tab: {
      padding: '0',
      minWidth: 'auto',
      font: 'var(--plain-light)',
      color: 'var(--dark)',
      textTransform: 'capitalize',
      transition: 'var(--color-03-eio)',
      ':nth-of-type(2n)': {
        padding: '0 40px',
      },
      ':hover': {
        color: 'var(--active)',
        transition: 'var(--color-03-eio)',
      },
    },
  };
});
