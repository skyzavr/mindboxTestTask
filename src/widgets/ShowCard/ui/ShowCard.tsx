import { Box } from '@mui/material';

import { Text } from '@shared/ui';
import { CardProps } from '@type/app';

import { useStyles } from './ShowCardStyle';

export const ShowCard = ({ card }: { card: CardProps }) => {
  const { classes } = useStyles();
  const { title, description, color } = card;
  return (
    <Box className={`${classes.cardWrapper} ${classes[color]}`}>
      <Box>
        <Text variant="title">{title}</Text>
      </Box>
      <Box className={`${classes.description}`}>
        <Text variant={description ? 'desc' : 'placeholder'}>
          {description || 'there is no description yet...'}
        </Text>
      </Box>
    </Box>
  );
};
