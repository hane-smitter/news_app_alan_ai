import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SC from "./styled";
import withNewsView from "../../ViewSwitch/ViewSwitch";

const defaultCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the Latest News" },
  {
    color: "#800080",
    title: "News By Region",
    info: "Kenya, Africa",
    text: "Show me news in Kenya",
  },
  {
    color: "#1565c0",
    title: "News By Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Get me news about sports",
  },
  {
    color: "#4527a0",
    title: "News By Terms",
    info: "Bitcoin, Playstation5, Smartphones, Donald trump, ...",
    text: "What's cooking with PlayStation5",
  },
  {
    color: "#283593",
    title: "News By Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, Entertainment Weekly, ABC news, ...",
    text: "Give me news from CNN",
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
          padding: "0 15px",
          width: "100%",
          margin: 0,
        }}
      >
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
              <Typography variant="h5">{infoCard.title}</Typography>
              {infoCard.info ? (
                <Typography variant="h6">
                  <strong>{infoCard.title.split(" ")[2]}:</strong>
                  <br />
                  {infoCard.info}
                </Typography>
              ) : null}
              <Typography variant="h6">
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
