import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Perfil',
    path: '/home/Resume',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Proyectos',
    path: '/home/Resume/projects',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/home/Resume/projects' },
      { title: 'Diseño Web', path: '/home/Resume/projects/web-design' },
      { title: 'Diseño Gráfico', path: '/home/Resume/projects/graphic-design' },
    ],
  },
  {
    title: 'Estudios',
    path: '/home/Resume/messages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Contacto',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Telefono', path: '/home/Resume/settings/account' },
      { title: 'Correo', path: '/home/Resume/settings/privacy' },
    ],
  },
  {
    title: 'Ir a inicio',
    path: '/',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
