export const styles = {
  contained: {
    backgroundColor: 'var(--gray)',
    color: 'var(--white)',
    transition: 'var(--all-03-eio)',
    ':hover': {
      backgroundColor: 'var(--dark)',
      transition: 'var(--all-03-eio)',
      cursor: 'pointer',
    },
  },
  text: {
    color: 'var(--black)',
    backgroundColor: 'transparent',
    transition: 'var(--color-03-eio)',
    ':hover': {
      cursor: 'pointer',
      color: 'var(--active)',
      transition: 'var(--color-03-eio)',
    },
  },
};
