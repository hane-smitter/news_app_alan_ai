import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

const App = () => {
    const [newsArticle, setNewsArticle] = useState();
    const alanSDKKey = '7e5e70d2d75af1ee5a6f4410100b8bcf2e956eca572e1d8b807a3e2338fdd0dc/stage';
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
            <h1>Alan Ai News Application</h1>
            <NewsCards article = {newsArticle}/>
        </div>
    );
}

export default App;