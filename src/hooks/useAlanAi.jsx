import { useEffect, useState, useRef, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wtn from "words-to-numbers";
import { useNavigate } from "react-router-dom";

const alanSDKKey = process.env.REACT_APP_ALAN_KEY;

const useAlanAi = () => {
  const [news, setNews] = useState([]);
  // const [paginatedNews, setPaginatedNews] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const [sources, setSources] = useState(null);
  const [conversation, setConversation] = useState({
    youSaid: "",
    aiSaid: "",
  });
  const newsElementRefs = useRef([]);
  const aiBtn = useRef({});
  const articleReadMoreWindow = useRef(null);
  const navigate = useNavigate();

  /**
   * Opens link in a new tab
   * @param {string} url - Link to open
   * @param {string} [windowName = _blank] - name of window
   * @return {Window | null} - returns a tab reference
   */
  const openTab = useCallback(function (url, windowName = "_blank") {
    let tabReference = articleReadMoreWindow.current;

    tabReference = window.open(url, windowName);
    if (tabReference) {
      tabReference.focus();
    }

    return tabReference;
  }, []);

  const addElemRef = useCallback(function (ref, numOfItemsInView) {
    // console.log("addElemRef ran");
    const elRefs = newsElementRefs.current;
    if (ref && elRefs?.length < numOfItemsInView) {
      // console.log("addElemRef new addition: ", ref);
      elRefs?.push(ref);
    }
  }, []);

  // }
  function sendText(txt) {
    aiBtn.current?.btnInstance?.sendText(txt);
  }
  function resetNews() {
    setNews([]);
  }
  function populateSourcesData(data) {
    setSources(data);
  }

  useEffect(() => {
    // reset refs to remove old references
    newsElementRefs.current = [];
  }, [news]);

  useEffect(() => {
    let assistantBtn = alanBtn({
      key: alanSDKKey,
      onCommand: (incoming) => {
        switch (incoming.command) {
          case "NEW_HEADLINES":
            // console.log(incoming.news);
            setNews(incoming.news);
            setActiveArticle(-1);
            navigate("/news");
            break;
          case "SHOW_DEVELOPER":
            let opened = window.open(
              "https://zacky.web.app",
              "_blank",
              " rel=noreferrer"
            );
            !Boolean(opened) &&
              alanBtn().playText(
                "I could not open a website. Please check browser settings to allow popups on this website."
              );
            break;
          case "GOTO_HOMEPAGE":
            navigate("/", { replace: true });
            break;
          case "SHOW_INCLUSIVE_SOURCES":
            setSources(incoming.inclusiveList);
            navigate("/list");
            break;
          case "SHOW_SUPPORTED_COUNTRIES":
            setSources(incoming.inclusiveList);
            navigate("/list#countries");
            break;
          case "HIGHLIGHT":
            const indexNum = incoming.articleIdx;
            newsElementRefs.current[indexNum]?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setActiveArticle(indexNum);

            break;
          case "REPORT_ERROR_MSG":
            console.group("Error from ai assistant");
            console.error(incoming.errorMsg);
            console.groupEnd();
            break;
          case "OPEN_ARTICLE":
            const numOfNewsInView = newsElementRefs.current?.length;
            try {
              console.log("incoming.article: ", incoming.article);
              let num = incoming.number;
              if (typeof num == "string") {
                num = wtn(num, { fuzzy: true });
              }
              console.log("numOfNewsInView(useAlan hook): ", numOfNewsInView);
              if (num > numOfNewsInView)
                throw new Error(`Article ${num} is out of range.`);

              const articleIdx = num - 1;
              let articleUrl = "";
              if (Array.isArray(incoming.article)) {
                articleUrl = incoming.article[articleIdx].url;
              } else {
                articleUrl = incoming.article.url;
              }

              let articleOpened = openTab(articleUrl, "readMoreWindow");

              if (!articleOpened) throw new Error("popup blocked");
            } catch (error) {
              aiBtn.current.btnInstance.activate();
              if (error?.message === "popup blocked") {
                aiBtn.current.btnInstance.playText(
                  "Link to article could not be opened. To fix this, allow popups for this website from your browser settings."
                );
              }
              aiBtn.current.btnInstance.playCommand({
                command: "REPORT_ERROR_MSG",
                errorMsg: error.message,
              });
              aiBtn.current.btnInstance.deactivate();
            }
            break;
        }
      },
      onEvent: function (event) {
        if (event.name === "parsed") {
          const youSaid = event.text;
          setConversation((prev) =>
            Object.assign({}, prev, { youSaid, aiSaid: "..." })
          );
          // console.info("Sent msg:", youSaid);
        } else if (event.name === "text") {
          const aiSaid = event.text;
          setConversation((prev) => Object.assign({}, prev, { aiSaid }));
          // console.log(event);
          // console.info("Received msg:", aiSaid);
        }
      },
      // onButtonState: async function (status) {
      //   if (status === "ONLINE") {
      //     if (!this.greetingWasSaid) {
      //       await alanBtnInstance.activate();
      //       alanBtnInstance.playText("Hello! I'm Alan. How can I help you?");
      //       this.greetingWasSaid = true;
      //     }
      //   }
      // },
    });

    aiBtn.current.btnInstance = assistantBtn;

    return () => {
      if (assistantBtn) {
        assistantBtn.remove();
      }
    };
  }, []);

  return {
    news,
    activeArticle,
    aiBtn: aiBtn.current.btnInstance,
    sourcesData: sources,
    conversation,
    populateSourcesData,
    addElemRef,
    sendText,
    resetNews,
  };
};

export default useAlanAi;
