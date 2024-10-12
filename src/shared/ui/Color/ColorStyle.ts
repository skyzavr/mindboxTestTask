export const colors = {
  blue: { backgroundColor: 'var(--blue)' },
  green: { backgroundColor: 'var(--green)' },
  yellow: { backgroundColor: 'var(--yellow)' },
  purple: { backgroundColor: 'var(--purple)' },
  color: { backgroundColor: 'transparent' },
};

import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    icon: {
      borderRadius: '50%',
      display: 'flex',
      // margin: '0 5px',
      '@media (min-width:320px)': {
        width: '28px',
        height: '28px',
      },
      '@media (min-width:1280px)': {
        width: '32px',
        height: '32px',
      },
    },
    ...colors,
  };
});
