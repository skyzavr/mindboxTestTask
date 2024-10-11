import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@app/layout';
import { Home } from '@pages/Home';
import { Welcome } from '@pages/Welcome';

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

  return <RouterProvider router={router} />;
};
