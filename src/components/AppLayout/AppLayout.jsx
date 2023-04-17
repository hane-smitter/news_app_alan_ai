import React from "react";
import { Outlet } from "react-router-dom";

import ViewSwitcher from "../../ViewSwitch/ViewSwitch";
import Chat from "../Chat";

const AppLayout = () => {
  return (
    <div>
      <Chat />
      <ViewSwitcher>
        <Outlet />
      </ViewSwitcher>
    </div>
  );
};

export default React.memo(AppLayout);
