import { createContext, useState } from "react";
import useAlanAi from "../hooks/useAlanAi";

const NewsContext = createContext({
  newsArticles: [],
  activeArticle: {},
  addElemRef: () => {},
});

export const NewsProvider = ({ children }) => {
  const news = useAlanAi();

  return <NewsContext.Provider value={news}>{children}</NewsContext.Provider>;
};

export default NewsContext;
