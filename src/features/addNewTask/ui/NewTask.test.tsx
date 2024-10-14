import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';
import { NewTask } from './NewTask';

const setUp = async () => {
  const user = userEvent.setup();
  render(
    <Provider store={store}>
      <NewTask />
    </Provider>
  );
  //user clicks on /Lets get started/ btn -> open modal window
  const addNewBtn = screen.getByRole('button', { name: 'Add new' });
  await userEvent.click(addNewBtn);

  const inputTitle = screen.getAllByRole('textbox', { name: '' })[0];
  const btn = screen.getByRole('button', { name: 'Add new' });
  return { inputTitle, btn, user };
};

test('click on btn /add new/ -> open Modal window with add form', async () => {
  await setUp();
  const expectedText = screen.getByText(/Title/i);
  const submitBtn = screen.getByRole('button', { name: 'Add new' });

  //  empty fields=> btn disabled

  expect(expectedText).toBeInTheDocument();
  expect(submitBtn).toBeDisabled();
});

test("submit btn should be enabled if title isn't empty", async () => {
  //getting elements
  const { inputTitle, btn, user } = await setUp();

  expect(inputTitle).toHaveValue('');

  //  fill the Title input
  await user.type(inputTitle, 'Test title');
  expect(inputTitle).toHaveValue('Test title');

  //because of debounce
  await waitFor(() => {
    expect(btn).toBeEnabled();
  });
});

test("submit btn shouldn't be enabled after clearance of filled field", async () => {
  //getting elements
  const { inputTitle, btn, user } = await setUp();

  expect(inputTitle).toHaveValue('');

  //  fill the Title input
  await user.type(inputTitle, 'Test title');
  expect(inputTitle).toHaveValue('Test title');

  //because of debounce, btn enabled
  await waitFor(() => expect(btn).toBeEnabled());

  //user clear field
  await user.clear(inputTitle);

  //btn disabled again
  await waitFor(() => expect(btn).toBeDisabled());
});
