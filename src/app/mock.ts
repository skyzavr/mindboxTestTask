import { CardProps } from '@type/app';

export const cards: CardProps[] = [
  {
    title: 'The first task',
    description: 'My first task description',
    isDone: true,
    color: 'yellow',
    id: '12',
  },
  {
    title: 'The task without purpose',
    description: '',
    isDone: true,
    color: 'blue',
    id: '13',
  },
  {
    title: 'Make a responsive UI',
    description:
      "It seems to be responsive, at least on my devices. I hope it stays that way. There are another sentence to test this. I'm trying to make this description pretty long",
    isDone: true,
    color: 'green',
    id: '14',
  },
  {
    title: 'Cover with tests',
    description: '',
    isDone: false,
    color: 'blue',
    id: '15',
  },
  {
    title: 'Write an excellent code',
    description: "We all are trying, aren't we?",
    isDone: false,
    color: 'blue',
    id: '16',
  },
  {
    title: 'Deploy it',
    description: 'on my list',
    isDone: false,
    color: 'purple',
    id: '17',
  },
];
