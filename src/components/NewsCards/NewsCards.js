import React from 'react';
import { Grid, Typography, Grow } from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard.js';

const NewsCards = ( {article : articles} ) => {
    return (
        <Grow in>
            <Grid container alignItems='stretch'>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <NewsCard article={article} i={i}/>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    );
}

export default NewsCards;