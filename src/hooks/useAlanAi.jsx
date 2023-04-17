import { useEffect, useState, useRef, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wtn from "words-to-numbers";

const alanSDKKey = process.env.REACT_APP_ALAN_KEY;

const useAlanAi = () => {
  const [news, setNews] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const newsElementRefs = useRef([]);
  const aiBtn = useRef({});

  const addElemRef = useCallback(function (ref) {
    // console.log(ref);
    if (ref) newsElementRefs.current?.push(ref);
  }, []);

  function sendText(txt) {
    aiBtn.current?.btnInstance?.sendText(txt);
  }

  /* COMMANDS DATA */
  /* 
        news,
        number,
        REPORT_ERROR_MSG,
        supportedCountries,
        error
  */
  useEffect(() => {
    aiBtn.current.btnInstance = alanBtn({
      key: alanSDKKey,
      onCommand: (incoming) => {
        console.log(`number on the alan onCommand declaration`);
        console.log(incoming.number);

        switch (incoming.command) {
          case "NEW_HEADLINES":
            setNews(incoming.news);
            setActiveArticle(-1);
            break;
          case "SHOW_DEVELOPER":
            // open you portfolio website
            break;
          case "HIGHLIGHT":
            const indexNum = incoming.articleIdx;
            console.log({ indexNum });
            console.log({ newsElementLength: newsElementRefs.current?.length });
            console.group("Elem in focus");
            console.log(newsElementRefs.current[indexNum]);
            console.groupEnd();
            newsElementRefs.current[indexNum]?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setActiveArticle(indexNum);
            // setActiveArticle(
            //   (previousActiveArticle) => previousActiveArticle + 1
            // );
            break;
          case "REPORT_ERROR_MSG":
            console.group("Error from ai assistant");
            console.error(incoming.errorMsg);
            console.groupEnd();
            break;
          case "OPEN_ARTICLE": // remember: also change in cloud SDK
            let no = incoming.number;
            if (typeof no == "string") {
              no = wtn(no, { fuzzy: true });
            }
            const articleNo = no - 1;
            if (no > 20) {
              return alanBtn().playText(
                "The article number is out of range! Try again!"
              );
            }
            let ifOpened = window.open(
              incoming.news[articleNo].url,
              "_blank",
              " rel=noreferrer"
            );
            console.log("ifOpened");
            console.log(ifOpened);
            !!ifOpened
              ? alanBtn().playText("Opening...")
              : alanBtn().playText(
                  "Could not open this article because it was blocked by your browser. Kindly check  your settings to allow pop-ups for this website."
                );
            break;
        }
      },
      onEvent: function (e) {
        if (e.name === "parsed") {
          console.info("Sent msg:", e.text);
        } else if (e.name === "text") {
          console.log("text event");
          console.log(e);
          console.info("Received msg:", e.text);
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

    return () => {
      if (aiBtn.current.btnInstance) {
        aiBtn.current.btnInstance.remove();
      }
    };
  }, []);

  return { news, activeArticle, addElemRef, sendText };
};

export default useAlanAi;
