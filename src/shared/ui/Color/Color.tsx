import { Icon } from '@mui/material';
import classNames from 'classnames';

import { Colors } from '@type/app';
import avatar from './ColorfulAvatar.svg';
import { useStyles } from './ColorStyle';

type colorProps = {
  color: Colors;
  isActive: boolean;
  click: (value: Colors) => void;
};

export const Color = ({ color, isActive, click }: colorProps) => {
  const { classes } = useStyles();
  const cs = classNames(
    classes.icon,
    classes[color],
    isActive ? classes.active : ''
  );
  const setColor = () => click(color);
  const img =
    color !== 'color' ? '' : <img src={avatar} alt="Colorful circle" />;
  return (
    <Icon onClick={setColor} className={cs}>
      {img}
    </Icon>
  );
};
