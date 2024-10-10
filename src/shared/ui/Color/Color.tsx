import { Avatar } from '@mui/material';

import { Colors } from '@types/app';
import avatar from './ColorfulAvatar.svg';
import { styles } from './ColorStyle';

type colorProps = {
  color: Colors;
};

export const Color = ({ color }: colorProps) => {
  if (color !== 'color') return <Avatar sx={styles[color]}></Avatar>;
  return (
    <Avatar sx={styles[color]}>
      <img src={avatar} alt="Colorful circle" />
    </Avatar>
  );
};
