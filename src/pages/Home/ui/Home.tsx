import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { RootState } from '@app/store/store';
import { Filter } from '@widgets/Filter';
import { CardsWrapper } from '@widgets/Cards';
import { Text } from '@shared/ui';
import { getTaskNumberString } from '../lib/textHelper';

import { useStyles } from './HomeStyles';

export const Home = () => {
  const getData = (state: RootState) => state.cards;
  const { entities: cards, activeCards } = useSelector(getData);

  const { classes } = useStyles();
  const activeTaskNumber = getTaskNumberString(activeCards);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.filterWrapper}>
        <Filter />
        <Text variant="plainText">{activeTaskNumber} </Text>
      </Box>
      <CardsWrapper {...{ cards }} />
    </Box>
  );
};
