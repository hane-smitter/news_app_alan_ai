import React, { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";
import { Navigate, useLocation } from "react-router-dom";

function ViewSwitch({ children }) {
  const { news } = useContext(NewsContext);
  const location = useLocation();

  let ROUTE = news?.length > 0 ? "/news" : "/";
  let shouldReroute = location?.pathname !== ROUTE;

  return shouldReroute ? <Navigate to={ROUTE} /> : children;
}

export default ViewSwitch;
