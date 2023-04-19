import { useEffect, useState, useRef, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wtn from "words-to-numbers";
import { useNavigate } from "react-router-dom";

const alanSDKKey = process.env.REACT_APP_ALAN_KEY;

const useAlanAi = () => {
  const [news, setNews] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  // const countriesSupported = useRef([]);
  const [countriesSupported, setCountriesSupported] = useState([["", ""]]);
  const newsElementRefs = useRef([]);
  const aiBtn = useRef({});
  const navigate = useNavigate();

  const addElemRef = useCallback(function (ref) {
    // console.log(ref);
    if (ref) newsElementRefs.current?.push(ref);
  }, []);

  // function setCountriesSupported(countries) {
  //   countriesSupported.current = countries;
  // }
  function sendText(txt) {
    aiBtn.current?.btnInstance?.sendText(txt);
  }
  function resetNews() {
    setNews([]);
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
            console.log(incoming.news);
            setNews(incoming.news);
            setActiveArticle(-1);
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
            resetNews();
            navigate("/", { replace: true });
            break;
          case "SHOW_SUPPORTED_COUNTRIES":
            setCountriesSupported(Object.entries(incoming.supportedCountries));
            // console.log({ list: incoming.supportedCountries });
            console.log({
              AlanList: countriesSupported,
            });
            navigate("/list");
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

  return {
    news,
    activeArticle,
    addElemRef,
    sendText,
    resetNews,
    countriesSupported,
  };
};

export default useAlanAi;