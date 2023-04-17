import React, { useContext } from "react";
import NewsContext from "../context/NewsContext";
import { Navigate, useLocation } from "react-router-dom";

function ViewSwitch({ children }) {
  const { news } = useContext(NewsContext);
  const location = useLocation();
  console.log({ location });

  //temporary
  // if (news?.length) {
  //   console.group("There is news");
  //   console.log(news);
  //   console.groupEnd();
  // }

  let ROUTE = news?.length > 0 ? "/news" : "/";
  let shouldReroute = location?.pathname !== ROUTE;

  if (location?.state?.forceRoute) {
    ROUTE = location?.state?.location?.pathname;
    shouldReroute = location?.state?.forceRoute;
  }

  return shouldReroute ? <Navigate to={ROUTE} /> : children;
}

export default ViewSwitch;
