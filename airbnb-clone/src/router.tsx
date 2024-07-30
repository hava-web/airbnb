import { createBrowserRouter, RouteObject } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import { Router } from '@remix-run/router';
import LoginPage from './pages/LoginPage';
import PageLayout from './layouts/PageLayout';
import RegisterPage from './pages/RegisterPage';
import Account from './pages/Account';

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
            path: '/account/:subpage',
            element: <></>
          },
        ]
      }
    ],
    IsPublic: true,
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
