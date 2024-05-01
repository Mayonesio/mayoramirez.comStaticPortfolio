import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Perfil',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Proyectos',
    path: '/projects',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/projects' },
      { title: 'Diseño Web', path: '/projects/web-design' },
      { title: 'Diseño Gráfico', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Estudios',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Contacto',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Telefono', path: '/settings/account' },
      { title: 'Correo', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Ir a inicio',
    path: '/home',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
