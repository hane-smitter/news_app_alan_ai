import { createBrowserRouter } from "react-router-dom";

import NewsApp from "./components/NewsApp";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "news", element: <NewsApp /> },
    ],
  },
]);

export default router;
