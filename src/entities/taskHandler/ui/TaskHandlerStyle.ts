import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    cardWrapper: {
      maxWidth: '500px',
      width: '100%',
      minWidth: '320px',
      background: 'var(--white)',
      borderRadius: '16px',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '@media (min-width:320px)': {
        padding: '20px 15px',
      },
      '@media (min-width:550px)': {
        padding: '40px',
      },
    },
    wrapper: {
      '>div:nth-of-type(even)': {
        marginTop: '20px',
      },
    },
    color: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      'span:nth-of-type(even)': {
        margin: '0 5px',
      },
    },
    btns: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      '>button': {
        maxWidth: '170px!important',
        width: '100%!important',
        minWidth: '140px!important',
      },
    },
  };
});
