import { Icon } from '@mui/material';
import classNames from 'classnames';

import { Colors } from '@type/app';
import avatar from './ColorfulAvatar.svg';
import { useStyles } from './ColorStyle';

type colorProps = {
  color: Colors;
  isActive: boolean;
};

export const Color = ({ color, isActive }: colorProps) => {
  const { classes } = useStyles();
  const cs = classNames(classes.icon, classes[color]);
  const img =
    color !== 'color' ? '' : <img src={avatar} alt="Colorful circle" />;
  return (
    <Icon
      className={cs}
      style={{ border: `${isActive ? '1px' : '0px'} solid var(--dark)` }}
    >
      {img}
    </Icon>
  );
};
