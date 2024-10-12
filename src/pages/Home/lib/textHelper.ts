export const getTaskNumberString = (taskActiveNumber: number) =>
  `${taskActiveNumber} task${taskActiveNumber > 1 ? 's' : ''} left`;
