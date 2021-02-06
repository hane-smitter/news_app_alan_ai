import React from 'react';

import NewsCard from '../NewsCard/NewsCard.js';

const NewsCards = ( {articles} ) => {
    return (
        <div>
            <h1>NewsCards</h1>
            {articles.map((article, i) => (
                <NewsCard />
            ))}
        </div>
    );
}

export default NewsCards;