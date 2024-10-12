import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    cardWrapper: {
      borderRadius: '10px',
      padding: '20px 15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'var(--all-03-eio)',
      ':hover': {
        cursor: 'pointer',
        boxShadow: '0px 2px 5.5px rgba(0, 0, 0, 0.22)',
        transition: 'var(--all-03-eio)',
      },
    },
    container: {
      display: 'flex',
      alignItems: 'baseline',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    handleWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    description: {
      minHeight: '30px',
      marginTop: '10px',
    },
    done: {
      textDecoration: 'line-through',
    },
    blue: { backgroundColor: 'var(--blue)' },
    green: { backgroundColor: 'var(--green)' },
    yellow: { backgroundColor: 'var(--yellow)' },
    purple: { backgroundColor: 'var(--purple)' },
    color: { backgroundColor: 'transparent' },
  };
});
