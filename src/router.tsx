import React from 'react';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Todo from './pages/todo';
import { createBrowserRouter } from 'react-router-dom';
import { Router as RemixRouter } from '@remix-run/router/dist/router';
import GeneralLayout from './layout/GeneralLayout';

interface RouterBase {
  id: number;
  path: string;
  element: React.ReactNode;
}

interface UserAccessibleRouterElement extends RouterBase {
  withAuth: boolean; // 인증이 필요한 페이지 여부
}

const routerData: UserAccessibleRouterElement[] = [
  {
    id: 0,
    path: '/',
    element: <Home />,
    withAuth: false,
  },
  {
    id: 1,
    path: '/signin',
    element: <Signin />,
    withAuth: false,
  },
  {
    id: 2,
    path: '/signup',
    element: <Signup />,
    withAuth: false,
  },
  {
    id: 3,
    path: '/todo',
    element: <Todo />,
    withAuth: true,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map(router => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);
