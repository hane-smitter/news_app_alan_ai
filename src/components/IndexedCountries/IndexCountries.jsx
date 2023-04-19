import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import NewsContext from "../../context/NewsContext";
import SC from "./styled";

const IndexCountries = () => {
  const { countriesSupported } = useContext(NewsContext);

  console.log({ countriesSupported });

  // if (!countriesSupported?.length) return <Navigate to="/" />;

  /* 
  <Grid container>
    <Grid item>
      <div></div>
    </Grid>
  <Grid>
  
  */

  return (
    <Container maxWidth="md" sx={{ paddingBottom: "30px" }}>
      <SC.GridContainer>
        {/* Format of array: [["", ""]] */}
        {countriesSupported[0][0]?.length ? (
          (() => {
            const gridContainerData = [];

            let counter = 1;
            let idx = 0; // Declare index globally to solve closure issues

            let gridItemData = [];
            let gridItemChildData = [];
            let indexedCountries = countriesSupported;
            Object.freeze(indexedCountries);

            while (counter <= indexedCountries?.length) {
              idx = counter - 1;
              gridItemChildData.push(
                <SC.CountryInfo key={uuidv4()}>
                  <SC.CountryFlag
                    src={`https://flagcdn.com/${indexedCountries[idx][0]}.svg`}
                  />
                  <SC.CountryName variant="body2">
                    {indexedCountries[idx][1]}
                  </SC.CountryName>
                </SC.CountryInfo>
              );

              if (counter % 4 === 0) {
                gridItemData.push(gridItemChildData);
                // console.log({ gridItemData });

                gridItemChildData = [];
              }

              if (counter % (4 * 2) === 0) {
                gridContainerData.push(
                  <SC.GridItem key={uuidv4()}>{gridItemData}</SC.GridItem>
                );
                gridItemData = [];
              }
              counter++;
            }

            console.log("rem: ", indexedCountries?.length % (4 * 2));

            // INCLUDE remaining data
            console.log(
              "indexedCountries at this point: ",
              indexedCountries[idx][1]
            );
            gridItemChildData.length &&
              gridItemData.push(<div key={uuidv4()}>{gridItemChildData}</div>);
            gridItemData.length &&
              gridContainerData.push(
                <SC.GridItem key={uuidv4()}>{gridItemData}</SC.GridItem>
              );

            console.log({ gridContainerData });
            return gridContainerData;
          })()
        ) : (
          <Typography variant="h5" fontWeight={"bold"}>
            No list to show
          </Typography>
        )}
      </SC.GridContainer>
    </Container>
  );
};

export default IndexCountries;
