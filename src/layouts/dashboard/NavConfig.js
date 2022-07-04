import Iconify from '../../components/Iconify';


// ----------------------------------------------------------------------
const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;





const navConfig = [
  {
    title: 'Home',
    path: '/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Request Analysis',
    path: '/requests',
    icon: getIcon('fluent:drink-wine-24-filled'),
  },
  {
    title: 'Upload Analysis',
    path: '/upload',
    icon: getIcon('ic:baseline-upload-file'),
  },
  {
    title: 'View Analysis',
    path: '/analysis',
    icon: getIcon('eva:file-text-fill'),
  },
  {
  title:'WineAdds',
  path: '/wineadds',
  icon: getIcon('carbon:calculator'),
  },
  {
    title: 'logout',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },

];

export default navConfig;