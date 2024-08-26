import type {NavigationTree} from '@/@types/navigation';
import {IconDashboard, IconUser} from '@tabler/icons-react';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'پیشخوان',
    translateKey: '',
    icon: IconDashboard,
    authority: [],
    subMenu: []
  },
  {
    key: 'users',
    path: '/users',
    title: 'کاربران',
    translateKey: '',
    icon: IconUser,
    authority: [],
    subMenu: []
  },
  {
    key: 'biz',
    path: '/biz',
    title: 'کسب و کار',
    translateKey: '',
    icon: IconUser,
    authority: [],
    subMenu: []
  },
  {
    key: 'service',
    path: '/service',
    title: 'خدمات',
    translateKey: '',
    icon: IconUser,
    authority: [],
    subMenu: []
  },
];

export default navigationConfig;
