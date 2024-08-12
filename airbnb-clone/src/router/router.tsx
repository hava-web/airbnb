import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router } from '@remix-run/router';

import { LoginPage, IndexPage, RegisterPage, Account } from '../components/lazy';
import PageLayout from '../layouts/PageLayout';

export type ExtendRouteObjectProps = RouteObject & { IsPublic: boolean };

const routes: ExtendRouteObjectProps[] = [
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/account',
        element: <Account />,
        children: [
          {
            path: ':subPage',
            element: <Account />,
            children: [
              {
                path: ':action',
                element: <Account />,
              },
            ],
          },
        ],
      },
    ],
    IsPublic: true,
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
