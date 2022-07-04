import Iconify from '../../components/Iconify';


// ----------------------------------------------------------------------
const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;





const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Blends',
    path: '/dashboard/blends',
    icon: getIcon('fluent:drink-wine-24-filled'),
  },
  {
    title: 'Upload Analysis',
    path: '/dashboard/upload',
    icon: getIcon('ic:baseline-upload-file'),
  },
  {
    title: 'View Analysis',
    path: '/dashboard/analysis',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'logout',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register A New User',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },

];

export default navConfig;