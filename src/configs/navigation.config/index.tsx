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
        key: 'dashboardreports',
        path: 'reports',
        title: 'گزارشات',
        translateKey: '',
        authority: [],
      },
      {
        key: 'dashboardconfig',
        path: 'config',
        title: 'تنظیمات کلی',
        translateKey: '',
        authority: [],
      },
      {
        key: 'dashboardhelp',
        path: 'help',
        title: 'راهنما',
        translateKey: '',
        authority: [],
      },
      {
        key: 'dashboardtelegram',
        path: 'telegram',
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
        key: 'myusers',
        path: 'myusers',
        title: 'کاربران من',
        translateKey: '',
        authority: [],
      },
      {
        key: 'reserved',
        path: 'reserved',
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
        key: 'bizindex',
        path: 'index',
        title: 'لیست',
        authority: [],
        translateKey: '',
      },
      {
        key: 'biznew',
        path: 'new',
        title: 'جدید',
        translateKey: '',
        authority: [],
      },
      {
        key: 'bizconfig',
        path: 'config',
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
        key: 'serviceindex',
        path: 'index',
        title: 'خدمات من',
        translateKey: '',
        authority: [],
      },
      {
        key: 'servicenew',
        path: 'new',
        title: 'جدید',
        translateKey: '',
        authority: [],
      },
      {
        key: 'serviceconfig',
        path: 'config',
        title: 'پیکربندی',
        authority: [],
        translateKey: '',
      }
    ]
  },
];

export default navigationConfig;
