import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout } from '@app/layout';
import { Home } from '@pages/Home';
import { Welcome } from '@pages/Welcome';
import { store } from './store/store';

export const App = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: '/',
          element: <Welcome />,
        },
        {
          element: <Layout />,
          children: [
            {
              path: '/home',
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <Provider {...{ store }}>
      <RouterProvider router={router} />
    </Provider>
  );
};
