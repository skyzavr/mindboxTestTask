import { render } from '@testing-library/react';

import { Home } from '@pages/Home';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';

test('should render correctly home page', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
});
