import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Container from "@mui/material/Container";

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

      <Container maxWidth="lg" sx={{ paddingBottom: "30px" }}>
        <Outlet />
      </Container>
    </NewsContext.Provider>
  );
};

export default React.memo(AppLayout);
