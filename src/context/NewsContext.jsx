import { createContext } from "react";

const NewsContext = createContext({
  news: [],
  activeArticle: {},
  addElemRef: () => {},
  sourcesData: null,
  populateSourcesData: () => {},
});

export default NewsContext;
