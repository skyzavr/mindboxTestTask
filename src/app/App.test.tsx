import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Welcome } from '@pages/Welcome';

test('should render welcome page', () => {
  render(<Welcome />, { wrapper: BrowserRouter });
});
