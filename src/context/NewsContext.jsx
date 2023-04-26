import { createContext } from "react";

const NewsContext = createContext({
  news: [],
  activeArticle: {},
  addElemRef: () => {},
  sourcesData: null,
  populateSourcesData: () => {},
  conversation: {
    youSaid: "",
    aiSaid: "",
  },
  assistantBtn: {},
  assistantConnected: false,
});

export default NewsContext;
