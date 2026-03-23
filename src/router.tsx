import { createHashRouter } from "react-router-dom";
import { HOME, PROJECT_DETAIL } from "./routes.ts";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Layout from "./layout/Layout";

const routes = [
  {
    path: HOME,
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: PROJECT_DETAIL,
        element: <ProjectDetail />,
      },
    ],
  },
];

export const router = createHashRouter(routes);
