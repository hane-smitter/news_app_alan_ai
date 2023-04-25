import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import NewsContext from "../../context/NewsContext";
import useAlanAi from "../../hooks/useAlanAi";
import Header from "../Header";
import Conversation from "../Conversation";

const AppLayout = () => {
  const news = useAlanAi();
  return (
    <NewsContext.Provider value={news}>
      <ScrollRestoration />
      <Header />
      <Conversation />
      <Outlet />
    </NewsContext.Provider>
  );
};

export default React.memo(AppLayout);
