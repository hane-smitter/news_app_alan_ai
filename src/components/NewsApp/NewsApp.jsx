import { useContext } from "react";
import Container from "@mui/material/Container";

import NewsCards from "../NewsCards";
import NewsContext from "../../context/NewsContext";
import SC from "./styled";
import logo from "../../images/ai_logo.png";
import { useNavigate } from "react-router-dom";

const NewsApp = () => {
  const { news, activeArticle, resetNews } = useContext(NewsContext);
  const navigate = useNavigate();

  function routeToHome() {
    resetNews();
    navigate("/");
  }

  return (
    <Container>
      <SC.LogoContainer>
        <div onClick={routeToHome} style={{ cursor: "pointer" }}>
          <SC.Logo src={logo} />
        </div>
      </SC.LogoContainer>
      <NewsCards articles={news} activeArticle={activeArticle} />
    </Container>
  );
};

export default NewsApp;
