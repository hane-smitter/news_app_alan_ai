import React, { useEffect, useState, useContext } from "react";
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
  const [displayNews, setDisplayNews] = useState([]);
  // const [, triggerRender] = useState(false);
  // const displayNews = useRef([]);
  const [newsStartPage, setStartPage] = useState(0);
  const perPage = 20;

  function handleShowMore() {
    setStartPage((prev) => prev + perPage);
  }

  useEffect(() => {
    if (articles?.length) {
      console.log({ newsStartPage });
      console.log("useeffect has run");
      console.log("newsStartPage value: ", newsStartPage);
      let newArticles = [];
      console.log({ "articles?.length": articles?.length });
      for (let idx = newsStartPage; idx < newsStartPage + 20; idx++) {
        const article = articles[idx];
        article && newArticles.push(article);
      }
      setDisplayNews((prevArticles) => [...prevArticles, ...newArticles]);
    }
  }, [articles, newsStartPage]);

  useEffect(
    () => () => {
      // Reset pagination to init
      setDisplayNews([]);
      setStartPage(0);
    },
    [articles]
  );

  return displayNews?.length ? (
    <SC.GridContainer>
      {displayNews.map((article, i, array) => {
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

      {displayNews?.length >= articles?.length ? null : (
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
        Talk to Alan to bring you news around the globe as they are happenning
      </Typography>
    </div>
  );
};

export default React.memo(NewsCards);
