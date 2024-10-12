import { Box } from '@mui/material';
import classNames from 'classnames';

import { CardMenu } from '@features/cardMenu';
import { DoneTask } from '@features/doneTask';
import { Text } from '@shared/ui';
import { CardProps } from '@type/app';
import { getShortText, setDescription } from '../lib/textHelper';

import { useStyles } from './CardStyles';

export const Card = ({ card }: { card: CardProps }) => {
  const { classes } = useStyles();
  const { title, description, isDone, color, id } = card;

  const wrapperClasses = classNames(
    classes.cardWrapper,
    classes[color],
    isDone ? classes.done : ''
  );
  const titleNote = getShortText(title, 30);
  const descNote = getShortText(setDescription(description), 150);

  return (
    <Box className={wrapperClasses}>
      <Box className={classes.container}>
        <Text variant="title">{titleNote}</Text>
        <Box className={classes.handleWrapper}>
          <CardMenu id={id} />
        </Box>
      </Box>
      <Box className={`${classes.description}`}>
        <Text variant={description ? 'desc' : 'placeholder'}>{descNote}</Text>
      </Box>
      <DoneTask id={id} init={isDone} />
    </Box>
  );
};
