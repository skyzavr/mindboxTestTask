import { Button } from '@mui/material';

import { styles } from './ButtonStyle';

type buttonProps = {
  onClick: () => void;
  children: string;
  isDisabled?: boolean;
  variant?: 'text' | 'contained';
};

export const CustomButton = (props: buttonProps) => {
  const {
    onClick,
    children,
    variant = 'contained',
    isDisabled = false,
  } = props;

  return (
    <Button
      onClick={onClick}
      variant={variant}
      sx={styles[variant]}
      disabled={isDisabled}
    >
      {children}
    </Button>
  );
};
