import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { RootState } from '@app/store/store';
import { setFilterByColor } from '@widgets/Filter/model/slice';
import { colorIcons, Colors } from '@type/app';
import { Color } from '@shared/ui';

import { useStyles } from './FilterStyle';

export const FilterByColor = () => {
  const { filterByColor } = useSelector((state: RootState) => state.filter);
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const onSetFilter = (filterType: Colors) => {
    dispatch(setFilterByColor(filterType));
  };
  return (
    <Box className={classes.wrapper}>
      {colorIcons.map((el) => (
        <Color
          color={el}
          isActive={el === filterByColor}
          key={el}
          click={onSetFilter}
        />
      ))}
    </Box>
  );
};
