export type Colors = 'blue' | 'green' | 'yellow' | 'purple' | 'color';

export type filterOptions = 'all' | 'active' | 'done';

export type ButtonStyle = 'text' | 'contained' | 'outlined';

export type textVariants =
  | 'h1'
  | 'h2'
  | 'paragraph'
  | 'plainText'
  | 'title'
  | 'desc'
  | 'placeholder'
  | 'error'
  | 'label'
  | 'input';

export type CardProps = {
  title: string;
  description: string;
  isDone: boolean;
  color: Colors;
  id: string;
};

//

export type CustomInputResponse = { isError: boolean; value: string };

//events

export type eventElement = React.MouseEvent<HTMLElement, MouseEvent>;
export type eventBtnElement = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export type eventChangeInput = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

// style types
export type classes = { classes: { [key: string]: string } };

//
export const colorIcons: Colors[] = [
  'color',
  'blue',
  'green',
  'yellow',
  'purple',
];
