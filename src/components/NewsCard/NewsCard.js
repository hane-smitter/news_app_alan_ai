import React, { useState, useEffect, createRef } from "react";
import Stack from "@mui/material/Stack";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import SC from "./styled";
import defImg from "../../images/news_default.svg";

const NewsCard = ({
  article: {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  },
  i: index,
  activeArticle,
}) => {
  const [elRefs, setElRefs] = useState([]);

  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);
  useEffect(() => {
    if (index === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [index, activeArticle, elRefs]);

  return (
    // <Card ref={elRefs[index]} className={classNames(classes.card, activeArticle === index ? classes.activeCard : null)}>
    <SC.ArticleCard ref={elRefs[index]} isActive={activeArticle === index}>
      <CardActionArea href={url} target="_blank">
        <CardMedia sx={{ height: "250px" }} image={urlToImage ?? defImg} />
        <Stack sx={{ margin: "20px" }} direction="row">
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </Stack>
        <Typography gutterBottom variant="h5" sx={{ padding: "0 16px" }}>
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <SC.ArticleCardActions component="div">
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {index + 1}
        </Typography>
      </SC.ArticleCardActions>
    </SC.ArticleCard>
  );
};

export default NewsCard;
