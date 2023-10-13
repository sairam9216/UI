import DashboardIcon from '@mui/icons-material/Dashboard';
import SourceIcon from '@mui/icons-material/Source';
import Settings from '@mui/icons-material/Settings';
export const MobileNav = [
  {
    id: '0',
    path: '/dashboard',
    label: 'Dashboard',
    Icon: <DashboardIcon fontSize="small" />
  },
  {
    id: '1',
    path: '/projects',
    label: 'Projects',
    Icon: <SourceIcon fontSize="small" />
  },
  {
    id: '2',
    path: '/setting',
    label: 'Setting',
    Icon: <Settings fontSize="small" />
  }
];
