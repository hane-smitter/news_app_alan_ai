import { useContext } from "react";
import Container from "@mui/material/Container";

import NewsCards from "../NewsCards";
import NewsContext from "../../context/NewsContext";
import SC from "./styled";
import logo from "../../images/ai_logo.png";
import { Link, Navigate, useLocation } from "react-router-dom";

const NewsApp = () => {
  const { news, activeArticle } = useContext(NewsContext);
  console.log({ newsContext: news, activeArticleCtx: activeArticle });
  const location = useLocation();

  if (!news.length) return <Navigate to="/" />;

  return (
    <Container>
      <SC.LogoContainer>
        <Link to="/" state={{ forceRoute: true }}>
          <SC.Logo src={logo} />
        </Link>
      </SC.LogoContainer>
      <NewsCards articles={news} activeArticle={activeArticle} />
    </Container>
  );
};

export default NewsApp;
