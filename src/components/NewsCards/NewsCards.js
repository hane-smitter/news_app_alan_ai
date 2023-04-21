import React, { useEffect, useRef, useState, useContext } from "react";
import Typography from "@mui/material/Typography";

import NewsCard from "../NewsCard";
import SC from "./styled";
import NewsContext from "../../context/NewsContext";

/* 
const itemEls = useRef(new Array())
{items.map(item => (
 <p key={item} ref={(element) => itemEls.current.push(element)}>{item}</p>
))
*/
const NewsCards = ({ articles, activeArticle }) => {
  const { addElemRef } = useContext(NewsContext);
  const [news, setNews] = useState([]);
  const refs = useRef([]);
  // const [, triggerRender] = useState(false);
  // const news = useRef([]);
  const [newsStartPage, setStartPage] = useState(0);
  const perPage = 20;

  function handleShowMore() {
    setStartPage((prev) => prev + perPage);
  }

  useEffect(() => {
    if (articles?.length) {
      console.log("useeffect has run");
      let newArticles = [];
      console.log({ "articles?.length": articles?.length });
      for (let idx = newsStartPage; idx < newsStartPage + 20; idx++) {
        const article = articles[idx];
        article && newArticles.push(article);
      }
      setNews((prevArticles) => [...prevArticles, ...newArticles]);
    }

    return () => {
      // Reset pagination to init
      setNews([]);
      setStartPage(0);
    };
  }, [articles, newsStartPage]);

  return news?.length ? (
    <SC.GridContainer>
      {news.map((article, i, array) => {
        return (
          <SC.GridItem
            key={i}
            forwardRef={(element) => addElemRef(element, array?.length)}
            isActive={i === activeArticle}
          >
            <NewsCard article={article} i={i} activeArticle={activeArticle} />
          </SC.GridItem>
        );
      })}

      {news?.length >= articles?.length ? null : (
        <SC.ShowMoreContainer>
          <SC.ShowMoreBtn onClick={handleShowMore}>Show more</SC.ShowMoreBtn>
        </SC.ShowMoreContainer>
      )}
    </SC.GridContainer>
  ) : (
    <div>
      <Typography variant="h5" fontWeight={"bold"}>
        There is no News :(
      </Typography>
      <br />
      <Typography variant="body1" sx={{ color: "text.hint" }}>
        Talk to Alan to bring you latest news around the globe
      </Typography>
    </div>
  );
};

export default React.memo(NewsCards);
