import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import WTN from 'words-to-numbers';

import useStyles from './styles';
import NewsCards from './components/NewsCards/NewsCards';
import logo from './images/ai_logo.png';

const alanSDKKey = '7e5e70d2d75af1ee5a6f4410100b8bcf2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticle, setNewsArticle] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanSDKKey,
            onCommand: ({ command, articles, number }) => {
                console.log(`number on the alan onCommand declaration`);
                console.log(number);
                if( command === "newHeadlines") {
                    setNewsArticle(articles);
                    setActiveArticle(-1);
                } else if( command === "highlight" ) {
                    setActiveArticle((previousActiveArticle) => previousActiveArticle + 1);
                } else if( command === "open" ) {
                    let no = number;
                    if(typeof number == 'string') {
                        no = WTN(number, { fuzzy: true });
                    }
                    const articleNo = no - 1;
                    if(no > 20) {
                        return alanBtn().playText('The article number is out of range! Try again!');
                    }
                    let ifOpened = window.open(articles[articleNo].url, '_blank');
                    console.log('ifOpened');
                    console.log(ifOpened);
                    !!ifOpened ? alanBtn().playText('Opening...') : alanBtn().playText('Could not open this article because it was blocked by your browser. Kindly check  your settings to allow pop-ups for this website.');
                }
            }
        })
    }, []);

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src={logo} alt="NLP app logo" className={classes.alanLogo} />
            </div>
            <NewsCards article={newsArticle} activeArticle={activeArticle} />
        </div>
    );
}

export default App;