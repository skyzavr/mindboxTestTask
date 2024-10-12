import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    header: {
      background: 'transparent',
      boxShadow: 'none',
      margin: '30px 0',
      display: 'flex',
      alignItems: 'center',
      position: 'static',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      maxWidth: '1080px',
      width: '100%',
      '@media (min-width:1120px)': {
        padding: '0!important',
      },
    },
  };
});
