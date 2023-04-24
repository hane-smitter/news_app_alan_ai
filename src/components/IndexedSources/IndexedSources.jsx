import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import NewsContext from "../../context/NewsContext";
import Countries from "./Countries";
import Publishers from "./Publishers";
import Categories from "./Categories";
import Topics from "./Topics";

const IndexedSources = () => {
  const { sourcesData } = useContext(NewsContext);

  console.log({ sourcesData });

  return (
    <Container maxWidth="md" sx={{ paddingBottom: "30px" }}>
      {Object.keys(Object(sourcesData)).length ? (
        <>
          <Countries data={sourcesData?.countries} />
          <Publishers data={sourcesData?.publishers} />
          <Categories data={sourcesData?.categories} />
          <Topics data={sourcesData?.topics} />
        </>
      ) : (
        <div>
          <Typography variant="h5" fontWeight={"bold"}>
            No list(s) to show yet :(
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "text.hint" }}>
            Open Microphone and say{" "}
            <span style={{ fontStyle: "italic" }}>
              "show me a list of sources"
            </span>
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default IndexedSources;
