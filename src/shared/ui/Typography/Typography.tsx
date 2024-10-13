import { ReactNode } from 'react';
import { Typography } from '@mui/material';
import classNames from 'classnames';

import { textVariants } from '@type/app';
import { useStyles } from './TypographyStyle';

type textProps = {
  children: string | ReactNode;
  variant: textVariants;
  styles?: { [key: string]: string };
};

export const Text = ({ children, variant, styles }: textProps) => {
  const { classes } = useStyles();
  const cl = classNames(classes[variant], classes.typo);
  return (
    <Typography className={cl} style={{ ...styles }}>
      {children}
    </Typography>
  );
};
