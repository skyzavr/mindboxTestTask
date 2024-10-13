import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => {
  return {
    wrapper: {},
    input: {
      minWidth: '280px',
      maxWidth: '600px',
      width: '100%',
      '>div': {
        borderRadius: '10px',
        background: 'var(--light-gray)',
        font: 'var(--text-regular)',
        '>input': {
          color: 'var(--gray)',
        },
        '>textarea': {
          height: '120px!important',
          maxLines: '10',
          resize: 'none',
        },
      },
    },
  };
});
