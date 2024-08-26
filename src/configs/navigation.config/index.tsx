import type { NavigationTree } from '@/@types/navigation';
import { IconBuildingStore, IconDashboard, IconPackage, IconUser } from '@tabler/icons-react';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'پیشخوان',
    translateKey: '',
    icon: IconDashboard,
    authority: [],
    subMenu: [
      {
        key: 'dashboard',
        path: '/dashboard',
        title: 'گزارشات',
        translateKey: '',
        authority: [],
      },
      {
        key: 'dashboard',
        path: '/dashboard',
        title: 'تنظیمات کلی',
        translateKey: '',
        authority: [],
      },
      {
        key: 'dashboard',
        path: '/dashboard',
        title: 'راهنما',
        translateKey: '',
        authority: [],
      },
      {
        key: 'dashboard',
        path: '/dashboard',
        title: 'اتصال به تلگرام',
        translateKey: '',
        authority: [],
      }
    ]
  },
  {
    key: 'users',
    path: '/users',
    title: 'کاربران',
    translateKey: '',
    icon: IconUser,
    authority: [],
    subMenu: [
      {
        key: 'users',
        path: '/users',
        title: 'کاربران من',
        translateKey: '',
        authority: [],
      },
      {
        key: 'users',
        path: '/reserved',
        title: 'رزروها',
        translateKey: '',
        authority: [],
      }
    ]
  },
  {
    key: 'biz',
    path: '/biz',
    title: 'کسب و کار',
    translateKey: '',
    icon: IconBuildingStore,
    authority: [],
    subMenu: [
      {
        key: 'biz',
        path: 'index',
        title: 'لیست',
        authority: [],
        translateKey: '',
      },
      {
        key: 'service',
        path: 'new',
        title: 'جدید',
        translateKey: '',
        authority: [],
      },
      {
        key: 'biz',
        path: 'index',
        title: 'پیکربندی',
        authority: [],
        translateKey: '',
      }
    ]
  },
  {
    key: 'service',
    path: '/service',
    title: 'خدمات',
    translateKey: '',
    icon: IconPackage,
    authority: [],
    subMenu: [
      {
        key: 'service',
        path: 'index',
        title: 'خدمات من',
        translateKey: '',
        authority: [],
      },
      {
        key: 'service',
        path: 'new',
        title: 'جدید',
        translateKey: '',
        authority: [],
      },
      {
        key: 'biz',
        path: 'index',
        title: 'پیکربندی',
        authority: [],
        translateKey: '',
      }
    ]
  },
];

export default navigationConfig;
