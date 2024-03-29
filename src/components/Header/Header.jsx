import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";

import SC from "./styled";
import logo from "../../images/ai_logo.png";
import Chat from "../Chat";

const Header = () => {
  const navigate = useNavigate();

  //   function routeToHome() {
  //     navigate("/");
  //   }

  return (
    <Container maxWidth="md" sx={{ position: "relative" }}>
      <Chat />
      <SC.LogoContainer>
        <SC.Logo src={logo} />
      </SC.LogoContainer>
      <SC.NavMenu component={"nav"}>
        <SC.NavMenuItem
          component={NavLink}
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </SC.NavMenuItem>
        <SC.NavMenuItem component={NavLink} to="/news">
          News
        </SC.NavMenuItem>
        <SC.NavMenuItem component={NavLink} to="/list">
          Sources
        </SC.NavMenuItem>
        <SC.DecorationDot className="dot"></SC.DecorationDot>
      </SC.NavMenu>
    </Container>
  );
};

export default Header;
