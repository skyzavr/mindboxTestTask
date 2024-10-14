import { store } from '@app/store/store';
import { addTask, deleteTask, editTask } from './slice';
import { CardProps } from '@type/app';

test('should delete task by its id', () => {
  const currentCardsList = store.getState().cards.entities.length;
  const id = '13';
  store.dispatch(deleteTask({ id }));
  const updatedCardList = store.getState().cards.entities.length;
  expect(updatedCardList).lessThan(currentCardsList);
});
test('shout add new task', () => {
  const currentCardsList = store.getState().cards.entities.length;
  const newItem: CardProps = {
    title: 'The new task',
    description: 'Some desc here',
    isDone: false,
    color: 'green',
    id: '21',
  };
  store.dispatch(addTask(newItem));
  const NewCardsList = store.getState().cards.entities.length;
  expect(currentCardsList).lessThan(NewCardsList);
  const newCard = store.getState().cards.entities.find((el) => el.id === '21');
  expect(newCard?.title).toBe('The new task');
});
test('should edit task', () => {
  const initCard = store.getState().cards.entities.find((el) => el.id === '12');

  const card: CardProps = {
    title: 'absolutely new card',
    description: '',
    isDone: false,
    color: 'blue',
    id: '12',
  };

  store.dispatch(editTask({ id: '12', card }));

  const isDataCorrect = (list: CardProps, newList: CardProps) => {
    let isTheSame = true;
    const values = Object.values(newList);
    Object.entries(list).map(([key, value], ind) => {
      if (value !== values[ind]) {
        isTheSame = false;
      }
    });
    return isTheSame;
  };

  const newCard = store.getState().cards.entities.find((el) => el.id === '12');

  expect(isDataCorrect(initCard as CardProps, newCard as CardProps)).toEqual(
    false
  );
});
