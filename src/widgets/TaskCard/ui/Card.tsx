import { useState } from 'react';
import { Box } from '@mui/material';
import classNames from 'classnames';

import { ShowCard } from '@widgets/ShowCard';
import { CardMenu } from '@features/cardMenu';
import { DoneTask } from '@features/doneTask';
import { CustomModal, Text } from '@shared/ui';
import { CardProps } from '@type/app';
import { getShortText, setDescription } from '../lib/textHelper';

import { useStyles } from './CardStyles';

export const Card = ({ card }: { card: CardProps }) => {
  const [showCard, setShowCard] = useState(false);
  const { classes } = useStyles();
  const { title, description, isDone, color, id } = card;

  const titleLen = 30;
  const descLen = 150;

  const wrapperClasses = classNames(
    classes.cardWrapper,
    classes[color],
    isDone ? classes.done : ''
  );
  const titleNote = getShortText(title, titleLen);
  const descNote = getShortText(setDescription(description), descLen);

  const onShowCardHandler = () => setShowCard((prev) => !prev);

  return (
    <>
      <Box className={wrapperClasses} onClick={onShowCardHandler}>
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

      {showCard && (
        <CustomModal open={showCard} onHandleModal={onShowCardHandler}>
          <ShowCard {...{ card }} />
        </CustomModal>
      )}
    </>
  );
};
