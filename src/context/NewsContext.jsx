import { createContext } from "react";

const NewsContext = createContext({
  news: [],
  activeArticle: {},
  addElemRef: () => {},
  storeElemRefs: () => {},
});

export default NewsContext;
