import { lazy } from 'react';
import authRoute from './authRoute';
import type { Routes } from '@/@types/routes';

export const publicRoutes: Routes = [...authRoute];

export const protectedRoutes = [
  {
    key: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import('@/pages/Dashboard/Dashboard')),
    authority: [],
  },
  {
    key: 'dashboardindex',
    path: '/dashboard/index',
    component: lazy(() => import('@/pages/Dashboard/Dashboard')),
    authority: [],
  },


  {
    key: 'bizindex',
    path: '/biz/index',
    component: lazy(() => import('@/pages/Biz/Index')),
    authority: [],
  },
  {
    key: 'bizconfig',
    path: '/biz/config',
    component: lazy(() => import('@/pages/Biz/Config')),
    authority: [],
  },
  {
    key: 'biznew',
    path: '/biz/new',
    component: lazy(() => import('@/pages/Biz/New')),
    authority: [],
  },


  {
    key: 'users',
    path: '/users',
    component: lazy(() => import('@/pages/examples/Users')),
    authority: [],
  },
  {
    key: 'pages',
    path: '/dashboard/pages',
    component: lazy(() => import('@/pages/examples/Pages')),
    authority: [],
  },
  {
    key: 'files',
    path: '/dashboard/files',
    component: lazy(() => import('@/pages/examples/Files')),
    authority: [],
  },
  {
    key: 'manage',
    path: '/users/manage',
    component: lazy(() => import('@/pages/examples/Manage')),
    authority: [],
  },
  {
    key: 'service',
    path: '/service',
    component: lazy(() => import('@/pages/Service/Service')),
    authority: [],
  },
  {
    key: 'biz',
    path: '/biz',
    component: lazy(() => import('@/pages/Biz/Biz')),
    authority: [],
  },
  {
    key: 'dashboardconfig',
    path: '/dashboard/config',
    component: lazy(() => import('@/pages/Dashboard/Config')),
    authority: [],
  },
  {
    key: 'dashboardhelp',
    path: '/dashboard/help',
    component: lazy(() => import('@/pages/Dashboard/Help')),
    authority: [],
  },
  {
    key: 'dashboardreports',
    path: '/dashboard/reports',
    component: lazy(() => import('@/pages/Dashboard/Reports')),
    authority: [],
  },
  {
    key: 'dashboardtelegram',
    path: '/dashboard/telegram',
    component: lazy(() => import('@/pages/Dashboard/Telegram')),
    authority: [],
  },
  {
    key: 'myusers',
    path: '/users/myusers',
    component: lazy(() => import('@/pages/Users/MyUsers')),
    authority: [],
  },
  {
    key: 'reserved',
    path: '/users/reserved',
    component: lazy(() => import('@/pages/Users/Reserved')),
    authority: [],
  },
];
