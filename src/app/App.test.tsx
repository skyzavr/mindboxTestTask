import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { Welcome } from '@pages/Welcome';

test('should render welcome page', () => {
  render(<Welcome />, { wrapper: BrowserRouter });
});

// test('should navigate to home page', async () => {
//   render(<Welcome />, { wrapper: BrowserRouter });
//   const user = userEvent.setup();
//   //render welcome page
//   const expectedText = screen.getByText(
//     /Lets get started with simple todo list/i
//   );
//   expect(expectedText).toBeInTheDocument();
//   const btn = screen.getByRole('button', { name: 'Lets get started' });
//   expect(btn).toBeInTheDocument();
//   //awaiting for click
//   await user.click(btn);
//   //expecting to be on the Home page
//   expect(screen.getByRole('button', { name: /Add new/i })).toBeInTheDocument();
// });
