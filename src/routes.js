import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Analysis';
import Requests from './pages/Requests';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import Upload from './pages/upload';
import Vineyard from './pages/Vineyard';
import Daily from './pages/Daily';
import BrixTemps from './pages/BrixTemps';
import Monthly from './pages/Monthly';
import Profile from './pages/Profile';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: 'www.reaktlab.com/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'requests', element: <Requests /> },
        { path: 'products', element: <Products /> },
        { path: 'analysis', element: <Blog /> },
        { path: 'upload', element: <Upload /> },
        { path: 'profile', element: <Profile /> },
        { path: 'daily', element: <Daily /> },
        { path: 'monthly', element: <Monthly /> },
        { path: 'brixtemps', element: <BrixTemps /> },
        { path: 'vineyard', element: <Vineyard /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
