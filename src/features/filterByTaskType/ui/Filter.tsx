import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs } from '@mui/material';

import { RootState } from '@app/store/store';
import { setFilterByType } from '@widgets/Filter/model/slice';
import { filterOptions } from '@type/app';

import { useStyles } from './FilterStyle';

export const FilterByType = () => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { filterByType } = useSelector((state: RootState) => state.filter);

  const tab: filterOptions[] = ['all', 'active', 'done'];

  const setClass = (curClass: string) =>
    `${classes.tab} ${curClass === filterByType ? classes.activeTab : ''}`;

  const onSetFilter = (filterType: filterOptions) => {
    dispatch(setFilterByType(filterType));
  };

  return (
    <Tabs value={false}>
      {tab.map((el) => (
        <Tab
          key={el}
          label={el}
          className={setClass(el)}
          onClick={() => onSetFilter(el)}
        />
      ))}
    </Tabs>
  );
};
