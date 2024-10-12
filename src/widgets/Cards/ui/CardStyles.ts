import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    cardsWrapper: {
      marginTop: '30px',
      display: 'grid',
      gap: '20px',
      justifyItems: 'stretch',
      '@media (min-width:320px)': {
        gridTemplateColumns: ' repeat(auto-fit, minmax(auto, 2fr))',
      },
      '@media (min-width:700px)': {
        gridTemplateColumns: ' repeat(auto-fit, minmax(310px, 2fr))',
      },
      '@media (min-width:1020px)': {
        gridTemplateColumns: ' repeat(auto-fit, minmax(440px, 2fr))',
      },
    },
  };
});
