import { createBrowserRouter } from "react-router-dom";

import News from "./components/News";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import IndexedSources from "./components/IndexedSources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "news", element: <News /> },
      {
        path: "list",
        element: <IndexedSources />,
      },
    ],
  },
]);

export default router;
