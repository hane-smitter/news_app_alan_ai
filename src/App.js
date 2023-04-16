import React, { useState, useEffect, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import WTN from "words-to-numbers";

import SC from "./styled";
import NewsCards from "./components/NewsCards/NewsCards";
import logo from "./images/ai_logo.png";

const alanSDKKey = process.env.REACT_APP_ALAN_KEY;

// other incoming.command from cloud: `errorOccured` -> `errorMsg` string
/* 
SUPPORTED COUNTRIES

const APP_SUPPORTED_NEWS_BY_COUNTRY = {
  default: [
    "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za",
  ],
  specialCase: ["ke"],
};

 */

const App = () => {
  const [newsArticle, setNewsArticle] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const aiBtn = useRef({});

  /* COMMANDS DATA */
  /* 
        news,
        number,
        errorMsg,
        supportedCountries,
        error
  */
  useEffect(() => {
    aiBtn.current.btnInstance = alanBtn({
      key: alanSDKKey,
      onCommand: (incoming) => {
        console.log(`number on the alan onCommand declaration`);
        console.log(incoming.number);
        if (incoming.command === "NEW_HEADLINES") {
          setNewsArticle(incoming.news);
          setActiveArticle(-1);
        } else if (incoming.command === "SHOW_DEVELOPER") {
          // open you portfolio website
        } else if (incoming.command === "HIGHLIGHT") {
          setActiveArticle(
            (previousActiveArticle) => previousActiveArticle + 1
          );
        } else if (incoming.command === "errorOccured") {
          console.group("Error from ai assistant");
          console.error(incoming.errorMsg);
          console.groupEnd();
        } else if (incoming.command === "open") {
          let no = incoming.number;
          if (typeof no == "string") {
            no = WTN(no, { fuzzy: true });
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
        }
      },
    });

    return () => {
      if (aiBtn.current.btnInstance) {
        aiBtn.current.btnInstance.remove();
      }
    };
  }, []);

  return (
    <div>
      <SC.LogoContainer>
        <SC.Logo src={logo} />
      </SC.LogoContainer>
      <NewsCards article={newsArticle} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
