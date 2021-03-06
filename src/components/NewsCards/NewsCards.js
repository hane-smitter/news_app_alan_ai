import React from "react";
import { Grid, Typography, Grow } from "@material-ui/core";

import useStyles from './styles';
import NewsCard from "../NewsCard/NewsCard.js";

const NewsCards = ({ article: articles }) => {

    const classes = useStyles();

    const defaultCards = [
        { color: "#00838f", title: "Latest News", text: "Give me the Latest News" },
        {
            color: "#1565c0",
            title: "News By Categories",
            info:
                "Business, Entertainment, General, Health, Science, Sports, Technology",
            text: "Give me the News from ...",
        },
        {
            color: "#4527a0",
            title: "News By Terms",
            info: "Bitcoin, Playstation5, Smartphones, Donald trump...",
            text: "What's cooking with PlayStation5",
        },
        {
            color: "#283593",
            title: "News By Sources",
            info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC news...",
            text: "Give me news from...",
        },
    ];

    if (!articles.length) {
        return (
            <Grow in>
                <Grid container alignItems="stretch" spacing={3} className={classes.container}>
                    {defaultCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.container}>
                            <div
                                className={`${classes.card}`}
                                style={{ backgroundColor: infoCard.color }}
                            >
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {infoCard.info ? (
                                    <Typography variant="h6">
                                        <strong>{infoCard.title.split(" ")[2]}:</strong>
                                        <br />
                                        {infoCard.info}
                                    </Typography>
                                ) : null}
                                <Typography variant="h6">Try saying:<br /><i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }

    return (
        <Grow in>
            <Grid container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        style={{ display: "flex" }}
                        key={Math.random().toString(36).substr(2, 9)}
                    >
                        <NewsCard article={article} i={i} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    );
};

export default NewsCards;
