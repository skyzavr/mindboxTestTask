import { Button } from '@mui/material';
import classNames from 'classnames';

import { ButtonStyle, classes } from '@type/app';

import { useStyles } from './ButtonStyle';

type buttonProps = {
  onClick: () => void;
  children: string;
  isDisabled?: boolean;
  variant?: ButtonStyle;
};

export const CustomButton = (props: buttonProps) => {
  const { onClick, children, variant = 'outlined', isDisabled = false } = props;

  const { classes }: classes = useStyles();
  const styles = classNames(classes.button, classes[variant]);

  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={styles}
      disabled={isDisabled}
      style={{ textTransform: 'none' }}
    >
      {children}
    </Button>
  );
};
