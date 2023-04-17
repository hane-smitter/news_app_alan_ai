import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./routes";
import { NewsProvider } from "./context/NewsContext";

const App = () => {
  return (
    <StrictMode>
      <NewsProvider>
        <RouterProvider router={router} />
      </NewsProvider>
    </StrictMode>
  );
};

export default App;
