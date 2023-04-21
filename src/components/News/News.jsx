import { useContext } from "react";
import Container from "@mui/material/Container";

import NewsCards from "../NewsCards";
import NewsContext from "../../context/NewsContext";

const News = () => {
  const { news, activeArticle } = useContext(NewsContext);

  return (
    <Container>
      <NewsCards articles={news} activeArticle={activeArticle} />
    </Container>
  );
};

export default News;
