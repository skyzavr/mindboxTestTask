export const getShortText = (text: string, len: number) => {
  const textLength = text.length;
  if (textLength <= len) return text;
  return sliceToTheLastWord(text.slice(0, len - 3));
};
const sliceToTheLastWord = (text: string) => {
  if (text.trim() === '') return;
  const listOfLetters: string[] = [...text];
  const lastSpace = Number(listOfLetters.lastIndexOf(' '));

  return text.slice(0, lastSpace) + '...';
};

export const setDescription = (desc: string) =>
  desc || 'there is no description yet...';
