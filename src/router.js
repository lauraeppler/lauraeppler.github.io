
import { createBrowserRouter } from 'react-router-dom'
import { HOME, PROJECT_DETAIL } from './routes';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

const routes = [
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: PROJECT_DETAIL,
    element: <ProjectDetail />
  }
]

export const router = createBrowserRouter(routes)