import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    typo: {
      lineHeight: '1.38',
    },
    h1: {
      color: 'var(--dark)',
      '@media (min-width:320px)': {
        font: 'var(--h1-bold-mob)',
      },
      '@media (min-width:768px)': {
        font: 'var(--h1-bold-tabl)',
      },
    },
    h2: {
      color: 'var(--dark)',
      font: 'var(--h2-bold)',
    },
    plainText: {
      '@media (min-width:320px)': {
        font: 'var(--plain-medium-mob)',
      },
      '@media (min-width:768px)': {
        font: 'var(--plain-medium-tabl)',
      },
    },
    label: {
      font: 'var(--plain-med)',
      color: 'var(--dark-gray)',
    },
    input: {
      color: 'var(--gray)',
      font: 'var(--text-regular)',
    },
    title: {
      '@media (min-width:320px)': {
        font: 'var(--title-mob)',
      },
      '@media (min-width:768px)': {
        font: 'var(--title-tabl)',
      },
    },
    desc: { font: 'var(--text-light)' },
    paragraph: {
      '@media (min-width:320px)': {
        padding: '60px 0 30px',
        font: 'var(--body-mob)',
      },
      '@media (min-width:768px)': {
        padding: '60px 0 40px',
        font: 'var(--body-tabl)',
      },
    },
    placeholder: {
      font: 'var(--text-light)',
      color: 'var(--active)',
    },
    error: {
      color: 'var(--error)',
      font: 'var(--plain-medium-mob)',
    },
  };
});
