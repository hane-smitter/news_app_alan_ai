import React, { useState, useEffect, createRef } from "react";
import Stack from "@mui/material/Stack";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import SC from "./styled";
import defaultImgSrc from "../../images/news_default.svg";

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
  return (
    // <Card ref={elRefs[index]} className={classNames(classes.card, activeArticle === index ? classes.activeCard : null)}>
    <SC.ArticleCard isActive={activeArticle === index}>
      <CardMedia
        sx={{ height: "250px" }}
        component="img"
        title={title?.substr(0, 30)}
        src={urlToImage}
        onError={function (event) {
          event.target.src = defaultImgSrc;
        }}
      />
      <Stack sx={{ margin: "20px" }} direction="column">
        <Stack direction="row" sx={{ width: "100%", justifyContent: "space-between" }}>
          <Typography variant="caption" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          {author && (
            <Typography variant="caption" color="textSecondary" component="h2">
              By {author}
            </Typography>
          )}
        </Stack>
        <Typography variant="body2" color="textSecondary" component="h2">
          {source.name}
        </Typography>
      </Stack>
      <Typography gutterBottom variant="h5" sx={{ padding: "0 16px" }}>
        {title}
      </Typography>
      <CardActionArea href={url} target="_blank">
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {String(description).replace(/<[^>]*>/g, "")}
          </Typography>
        </CardContent>
      </CardActionArea>

      <SC.ArticleCardActions disableRipple component="div">
        <SC.ArticleLinkBtn href={url}>Read More</SC.ArticleLinkBtn>
        <Typography variant="h5" color="textSecondary">
          {index + 1}
        </Typography>
      </SC.ArticleCardActions>
    </SC.ArticleCard>
  );
};

export default NewsCard;
