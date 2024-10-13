import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { CardProps } from '@type/app';
import { Filter } from '@widgets/Filter';
import { CardsWrapper } from '@widgets/Cards';
import { Text } from '@shared/ui';

import { getTaskNumberString } from '../lib/textHelper';
import { getCards, getFilters } from '../lib/selectors';
import { getListByColor, getListByType } from '../lib/filtration';

import { useStyles } from './HomeStyles';

export const Home = () => {
  const { entities: cards, activeCards } = useSelector(getCards);
  const { filterByColor, filterByType } = useSelector(getFilters);

  const { classes } = useStyles();
  const activeTaskNumber = getTaskNumberString(activeCards);

  const cardsList = (list: CardProps[]) => {
    const newList = getListByColor(list, filterByColor);
    return getListByType(newList, filterByType);
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.filterWrapper}>
        <Filter />
        <Text variant="plainText">{activeTaskNumber} </Text>
      </Box>
      <CardsWrapper cards={cardsList(cards)} />
    </Box>
  );
};
