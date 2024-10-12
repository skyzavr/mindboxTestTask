import { Box } from '@mui/material';

import { Card } from '@widgets/TaskCard';
import { CardProps } from '@type/app';
import { Text } from '@shared/ui';

import { useStyles } from './CardStyles';

export const CardsWrapper = ({ cards }: { cards: CardProps[] }) => {
  const { classes } = useStyles();
  if (cards.length === 0)
    return (
      <Box className={classes.cardsWrapper}>
        <Text variant="plainText">Try to change request or add a new task</Text>
      </Box>
    );

  return (
    <Box className={classes.cardsWrapper}>
      {cards.map((card, i) => (
        <Card {...{ card }} key={i} />
      ))}
    </Box>
  );
};
