import { makeStyles } from 'tss-react/mui';

const btnStyles = {
  button: {
    padding: '8px 30px',
    borderRadius: '8px',
    font: 'var(--text-regular)',
    ':hover': { cursor: 'pointer' },
  },
};
export const useStyles = makeStyles()(() => {
  return {
    ...btnStyles,
    contained: {
      backgroundColor: 'var(--gray)',
      color: 'var(--white)',
      transition: 'var(--all-03-eio)',
      ':hover': {
        backgroundColor: 'var(--dark)',
        transition: 'var(--all-03-eio)',
      },
    },
    text: {
      color: 'var(--dark)',
      backgroundColor: 'transparent',
      transition: 'var(--color-03-eio)',
      ':hover': {
        color: 'var(--active)',
        transition: 'var(--color-03-eio)',
      },
    },
    outlined: {
      color: 'var(--dark)',
      backgroundColor: 'transparent',
      border: '1px solid var(--dark)',
      transition: 'var(--all-03-eio)',
      ':hover': {
        color: 'var(--active)',
        border: '1px solid var(--active)',
        transition: 'var(--all-03-eio)',
      },
    },
  };
});
