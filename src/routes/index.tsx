import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Oss from '../pages/Oss';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

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
    path: 'privacy', // 모든 다른 경로에 대해 404 페이지
    element: <Privacy />,
  },
  {
    path: 'terms', // 모든 다른 경로에 대해 404 페이지
    element: <Terms />,
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
