import { CardProps, Colors, filterOptions } from '@type/app';

type colorList = (list: CardProps[], filterByColor: Colors) => CardProps[];
type typeList = (list: CardProps[], filterByType: filterOptions) => CardProps[];

export const getListByColor: colorList = (list, filterByColor) => {
  return filterByColor === 'color'
    ? [...list]
    : [...list].filter((el) => el.color === filterByColor);
};
export const getListByType: typeList = (list, filterByType) => {
  if (filterByType === 'active') return list.filter((el) => !el.isDone);
  if (filterByType === 'done') return list.filter((el) => el.isDone);
  return list;
};
