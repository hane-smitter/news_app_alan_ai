import React from "react";
import { Outlet } from "react-router-dom";

import ViewSwitcher from "../../ViewSwitch/ViewSwitch";

const NewsIndex = () => {
  return (
    <ViewSwitcher>
      <Outlet />
    </ViewSwitcher>
  );
};

export default NewsIndex;
