import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    wrapper: {
      maxWidth: '1080px',
      '@media (min-width:1120px)': {
        padding: '0',
        margin: '0 auto',
      },
    },
    filterWrapper: {
      display: 'flex',
      '>p': {
        '@media (min-width:320px)': {
          marginTop: '20px',
        },
        '@media (min-width:600px)': {
          marginTop: '0',
        },
      },
      '@media (min-width:320px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      '@media (min-width:600px)': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      },
    },
  };
});
