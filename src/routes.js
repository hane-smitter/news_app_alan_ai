import { createBrowserRouter } from "react-router-dom";

import News from "./components/News";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import IndexedCountries from "./components/IndexedCountries";
import NewsIndex from "./components/NewsIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <NewsIndex />,
        children: [
          { path: "", element: <Home /> },
          { path: "news", element: <News /> },
        ],
      },
      {
        path: "list",
        element: <IndexedCountries />,
      },
    ],
  },
  ,
]);

export default router;
