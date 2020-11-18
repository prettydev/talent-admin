import { adminRoot } from './defaultValues';
// import { UserRole } from "../helpers/authHelper"

const data = [
  {
    id: 'usermenu',
    icon: 'iconsminds-user',
    label: 'menu.user-menu',
    to: `${adminRoot}/user`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.users',
        to: `${adminRoot}/user/users`,
      },
    ],
  },
  {
    id: 'studiomenu',
    icon: 'iconsminds-photo-album-2',
    label: 'menu.studio-menu',
    to: `${adminRoot}/user`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.studios',
        to: `${adminRoot}/studio/studios`,
      },
    ],
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: 'menu.blank-page',
    to: `${adminRoot}/blank-page`,
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'menu.docs',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    newWindow: true,
  },
];
export default data;
