import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import WTN from "words-to-numbers";

import useStyles from "./styles";
import NewsCards from "./components/NewsCards/NewsCards";
import logo from "./images/ai_logo.png";

const alanSDKKey =
  "7e5e70d2d75af1ee5a6f4410100b8bcf2e956eca572e1d8b807a3e2338fdd0dc/stage";

// other command from cloud: `errorOccured` -> `errorMsg` string
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
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanSDKKey,
      onCommand: ({
        command,
        news,
        number,
        errorMsg,
        supportedCountries,
        error,
      }) => {
        console.log(`number on the alan onCommand declaration`);
        console.log(number);
        if (command === "NEW_HEADLINES") {
          setNewsArticle(news);
          setActiveArticle(-1);
        } else if (command === "SHOW_DEVELOPER") {
          // open you portfolio website
        } else if (command === "HIGHLIGHT") {
          setActiveArticle(
            (previousActiveArticle) => previousActiveArticle + 1
          );
        } else if (command === "error") {
          console.group("Error from ai assistant");
          console.error(error);
          console.groupEnd();
        } else if (command === "open") {
          let no = number;
          if (typeof number == "string") {
            no = WTN(number, { fuzzy: true });
          }
          const articleNo = no - 1;
          if (no > 20) {
            return alanBtn().playText(
              "The article number is out of range! Try again!"
            );
          }
          let ifOpened = window.open(
            news[articleNo].url,
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

    return () => alanBtn.remove();
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={logo} alt="NLP app logo" className={classes.alanLogo} />
      </div>
      <NewsCards article={newsArticle} activeArticle={activeArticle} />
    </div>
  );

  // return <Btn />;
};

export default App;
