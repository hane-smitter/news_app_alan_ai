import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SC from "./styled";
import withNewsView from "../../ViewSwitch/ViewSwitch";

const defaultCards = [
  { color: "#283655", title: "Latest News", text: "Bring me Latest News" },
  {
    color: "#800080",
    title: "News By Country",
    info: "United Kingdom, Kenya, Canada, ...",
    text: "Get me news from Canada",
  },
  {
    color: "#116dd7",
    title: "News By Categories",
    info: "Science, General, Sports, Technology, Entertainment, ...",
    text: "Bring me news about science",
  },
  {
    color: "#4527a0",
    title: "News By Topics",
    info: "ChatGPT, Champions league, Tiktok, Ipad pro, Tesla, ...",
    text: "What is new about ChatGPT",
  },
  {
    color: "#955251",
    title: "News By Publishers",
    info: "BBC News, CNN, Aljazeera, Buzzfeed, National Geographic, ABC news, ...",
    text: "Bring me news from CNN",
  },
];

const Home = () => {
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
        <Typography
          variant="h1"
          sx={{
            color: "text.hint",
            textTransform: "capitalize",
            textAlign: "center",
            width: "100%",
          }}
        >
          quick start
        </Typography>
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
                </Typography>
              ) : null}
              <Typography variant="body1" sx={{ fontSize: "1.14rem" }}>
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
