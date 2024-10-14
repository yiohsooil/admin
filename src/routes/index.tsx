import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Oss from '../pages/Oss';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: 'oss', // 모든 다른 경로에 대해 404 페이지
    element: <Oss />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '*', // 모든 다른 경로에 대해 404 페이지
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
