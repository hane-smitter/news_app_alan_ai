import React from "react";
import { Outlet } from "react-router-dom";

import ViewSwitcher from "../../ViewSwitch/ViewSwitch";
import Chat from "../Chat";
import NewsContext from "../../context/NewsContext";
import useAlanAi from "../../hooks/useAlanAi";

const AppLayout = () => {
  const news = useAlanAi();
  return (
    <NewsContext.Provider value={news}>
      <Chat />
      <ViewSwitcher>
        <Outlet />
      </ViewSwitcher>
    </NewsContext.Provider>
  );
};

export default React.memo(AppLayout);
