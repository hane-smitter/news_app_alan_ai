import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import SC from "./styled";
import NewsContext from "../../context/NewsContext";

const defaultCards = [
  { color: "#283655", title: "Latest News", text: "Bring me Latest News" },
  {
    color: "#800080",
    title: "News By Country",
    info: "United Kingdom, Kenya, Canada, ...",
    text: "Get me news from Canada",
    href: "/list#countries",
  },
  {
    color: "#116dd7",
    title: "News By Categories",
    info: "Science, General, Sports, Technology, Entertainment, ...",
    text: "Bring me news about science",
    href: "/list#categories",
  },
  {
    color: "#4527a0",
    title: "News By Topics",
    info: "ChatGPT, Champions league, Tiktok, Ipad pro, Tesla, ...",
    text: "What is new about ChatGPT",
    href: "/list#topics",
  },
  {
    color: "#955251",
    title: "News By Publishers",
    info: "BBC News, CNN, Aljazeera, Buzzfeed, National Geographic, ABC news, ...",
    text: "Bring me news from CNN",
    href: "/list#publishers",
  },
];

const Home = () => {
  const { aiBtn, sourcesData, populateSourcesData } = useContext(NewsContext);
  const navigate = useNavigate();

  function seeListClick(link = "/list") {
    navigate(link);

    if (aiBtn && !Object.keys(Object(sourcesData)).length) {
      aiBtn.callProjectApi(
        "getCollectiveSources",
        null,
        function (error, result) {
          console.log(result);
          populateSourcesData(result);
          if (error) {
            return console.error(
              "Error occured while getting list of indexed sources"
            );
          }
        }
      );
    }
  }
  return (
    <Grow in>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        sx={{
          padding: "0 10px",
          width: "100%",
          margin: 0,
        }}
      >
        <div style={{ width: "100%", textAlign: "center", marginBottom: 15 }}>
          <SC.QuickStartHeading variant="h1">quick start</SC.QuickStartHeading>
        </div>
        {defaultCards.map((infoCard, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              padding: "0 15px",
              width: "100%",
              margin: 0,
            }}
            key={idx}
          >
            <SC.QuickStartCard color={infoCard.color}>
              <Typography variant="h6" textTransform={"uppercase"}>
                {infoCard.title}
              </Typography>
              {infoCard.info ? (
                <Typography
                  variant="overline"
                  sx={{ fontSize: "0.8rem", fontWeight: 700 }}
                >
                  <strong>{infoCard.title.split(" ")[2]}:</strong>
                  <br />
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.hint",
                      fontStyle: "italic",
                      padding: 0,
                      textTransform: "lowercase",
                    }}
                  >
                    e.g.&nbsp;&nbsp;
                  </Typography>
                  {infoCard.info}
                  <Button
                    onClick={() => seeListClick(infoCard.href)}
                    variant="outlined"
                    sx={{
                      mixBlendMode: "plus-lighter",
                      marginLeft: "10px",
                      fontSize: "0.75rem",
                      lineHeight: 1.5,
                    }}
                    size="small"
                  >
                    See a list
                  </Button>
                </Typography>
              ) : null}
              <Typography variant="body1" sx={{ fontSize: "1.13rem", mt: 1 }}>
                Try saying:
                <br />
                <small>
                  <i>{infoCard.text}</i>
                </small>
              </Typography>
            </SC.QuickStartCard>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default Home;
