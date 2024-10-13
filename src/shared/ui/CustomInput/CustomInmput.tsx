import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import { Text } from '../Typography/Typography';
import { useStyles } from './InputStyle';
import { useDebounce } from '@shared/lib/useDebounce';
import { CustomInputResponse, eventChangeInput } from '@type/app';

type inputProps = {
  init: string;
  isRequired?: boolean;
  onUpdateData: (data: CustomInputResponse) => void;
  isCorrectData: (data: string) => boolean;
  label: string;
  multiLine?: boolean;
  placeholder: string;
};

export const CustomInput = (inputProps: inputProps) => {
  const { classes } = useStyles();
  const {
    init,
    isRequired = false,
    placeholder,
    onUpdateData,
    isCorrectData,
    label,
    multiLine = false,
  } = inputProps;

  const [firstRender, setFirstRender] = useState(true);
  const [value, setValue] = useState<string>(init || '');
  const [error, setIsError] = useState<boolean>(false);
  const debounceValue = useDebounce(value, 500);

  const onChangeValue = (e: eventChangeInput) => {
    setFirstRender(false);
    const { value } = e.target;
    setValue(value);
    setIsError(false);
  };

  const onValidateHandler = (value: string) => {
    const isCorrect = isRequired ? isCorrectData(value) : true;
    setIsError(!isCorrect);
    onUpdateData({ isError: !isCorrect, value: debounceValue });
  };
  useEffect(() => {
    if (firstRender) return;
    onValidateHandler(debounceValue);
  }, [debounceValue]);
  return (
    <div className={classes.wrapper}>
      <Text variant="label">{label}</Text>
      <TextField
        multiline={multiLine}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeValue(e)}
        className={classes.input}
      />
      {error && <Text variant="error">{label} Can't be empty</Text>}
    </div>
  );
};
