import { Box } from '@mui/material';

import { Card } from '@widgets/TaskCard';
import { CardProps } from '@type/app';

import { useStyles } from './CardStyles';

export const CardsWrapper = ({ cards }: { cards: CardProps[] }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.cardsWrapper}>
      {cards.map((card, i) => (
        <Card {...{ card }} key={i} />
      ))}
    </Box>
  );
};
