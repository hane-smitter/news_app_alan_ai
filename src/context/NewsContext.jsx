import { createContext } from "react";

const NewsContext = createContext({
  news: [],
  activeArticle: {},
  addElemRef: () => {},
});

export default NewsContext;
