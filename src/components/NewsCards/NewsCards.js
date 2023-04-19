import React from "react";

import NewsCard from "../NewsCard";
import SC from "./styled";
import { useContext } from "react";
import NewsContext from "../../context/NewsContext";
import { Typography } from "@mui/material";

/* 
const itemEls = useRef(new Array())
{items.map(item => (
 <p key={item} ref={(element) => itemEls.current.push(element)}>{item}</p>
))
*/
const NewsCards = ({ articles, activeArticle }) => {
  const { addElemRef } = useContext(NewsContext);

  return articles.length ? (
    <SC.GridContainer>
      {articles.map((article, i) => (
        <SC.GridItem
          key={i}
          forwardRef={(element) => addElemRef(element)}
          isActive={i === activeArticle}
        >
          <NewsCard article={article} i={i} activeArticle={activeArticle} />
        </SC.GridItem>
      ))}
    </SC.GridContainer>
  ) : (
    <Typography variant="h4" fontWeight={"bold"}>
      There is no News :(
    </Typography>
  );
};

export default React.memo(NewsCards);
