import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import Chat from "../Chat";
import NewsContext from "../../context/NewsContext";
import useAlanAi from "../../hooks/useAlanAi";

const AppLayout = () => {
  const news = useAlanAi();
  return (
    <NewsContext.Provider value={news}>
      <ScrollRestoration />
      <Chat />
      <Outlet />
    </NewsContext.Provider>
  );
};

export default React.memo(AppLayout);
