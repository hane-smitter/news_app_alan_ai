import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import NewsContext from "../../context/NewsContext";
import useAlanAi from "../../hooks/useAlanAi";
import Header from "../Header";

const AppLayout = () => {
  const news = useAlanAi();
  return (
    <NewsContext.Provider value={news}>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </NewsContext.Provider>
  );
};

export default React.memo(AppLayout);
