import { CardProps } from '@type/app';

export const isDataCorrect = (list: CardProps) => {
  const params = ['title'];
  const arrayOfCheckableParams = Object.entries(list).filter(([key, value]) =>
    params.includes(key)
  );
  const isAllDataCorrect = arrayOfCheckableParams.every(
    ([_, value]) => value.toString().trim() !== ''
  );
  return isAllDataCorrect;
};
