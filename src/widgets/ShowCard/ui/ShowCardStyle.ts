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
      width: '100%',
      minWidth: '280px',
      maxWidth: '510px',
    },

    description: {
      minHeight: '30px',
      marginTop: '10px',
    },

    blue: { backgroundColor: 'var(--blue)' },
    green: { backgroundColor: 'var(--green)' },
    yellow: { backgroundColor: 'var(--yellow)' },
    purple: { backgroundColor: 'var(--purple)' },
    color: { backgroundColor: 'transparent' },
  };
});
