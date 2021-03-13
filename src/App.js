import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import useStyles from './styles';
import NewsCards from './components/NewsCards/NewsCards';
import logo from './images/ai_logo.png';

const alanSDKKey = '7e5e70d2d75af1ee5a6f4410100b8bcf2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticle, setNewsArticle] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanSDKKey,
            onCommand: ({ command, articles }) => {
                if( command === "newHeadlines") {
                    setNewsArticle(articles);
                }
            }
        })
    }, []);

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src={logo} alt="NLP app logo" className={classes.alanLogo} />
            </div>
            <NewsCards article={newsArticle}/>
        </div>
    );
}

export default App;