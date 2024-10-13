import { ReactElement } from 'react';
import { Box } from '@mui/material';

import { Color, CustomInput } from '@shared/ui';
import { CardProps, colorIcons, Colors, CustomInputResponse } from '@type/app';

import { useStyles } from './TaskHandlerStyle';

type props = {
  children: ReactElement;
  data: CardProps;
  setData: (data: CardProps) => void;
};

export const TaskHandler = ({ children, data, setData }: props) => {
  const { classes } = useStyles();

  const isTitleFilled = (data: string) => {
    if (!data || data.trim() === '') return false;
    return true;
  };

  const onSetColor = (color: Colors) => {
    if (data.color === color) return;
    setData({ ...data, color });
  };

  const onUpdateTitle = (params: CustomInputResponse) => {
    const { value } = params;
    setData({ ...data, title: value });
  };

  const onUpdateDesc = (params: CustomInputResponse) => {
    const { value } = params;
    setData({ ...data, description: value });
  };

  return (
    <Box className={classes.cardWrapper}>
      <Box className={classes.wrapper}>
        <CustomInput
          init={data.title}
          label="Title"
          isRequired={true}
          isCorrectData={isTitleFilled}
          placeholder="For example, my first task"
          onUpdateData={onUpdateTitle}
        />
        <CustomInput
          init={data.description}
          label="Description"
          isCorrectData={isTitleFilled}
          multiLine={true}
          placeholder="Add some description for your task"
          onUpdateData={onUpdateDesc}
        />
      </Box>
      <Box className={classes.color}>
        {colorIcons.slice(1).map((el) => (
          <Color
            color={el}
            isActive={el === data.color}
            key={el}
            click={onSetColor}
          />
        ))}
      </Box>
      <Box className={classes.btns}>{children}</Box>
    </Box>
  );
};
