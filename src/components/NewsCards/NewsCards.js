import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";

import NewsCard from "../NewsCard";
import SC from "./styled";
import { useContext } from "react";
import NewsContext from "../../context/NewsContext";

/* 
const itemEls = useRef(new Array())
{items.map(item => (
 <p key={item} ref={(element) => itemEls.current.push(element)}>{item}</p>
))
*/
const NewsCards = ({ articles, activeArticle }) => {
  const { addElemRef } = useContext(NewsContext);

  return (
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
  );
};

export default NewsCards;
