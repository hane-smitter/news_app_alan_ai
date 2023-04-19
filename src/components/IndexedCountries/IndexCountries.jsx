import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { Navigate } from "react-router-dom";

import NewsContext from "../../context/NewsContext";
import { Container } from "@mui/material";

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
    <Container maxWidth="md">
      <Grid container spacing={2}>
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
                <div key={counter + "" + counter}>
                  {indexedCountries[idx][1]}
                </div>
              );

              if (counter % 4 === 0) {
                gridItemData.push(gridItemChildData);

                gridItemChildData = [];
              }

              if (counter % (4 * 2) === 0) {
                gridContainerData.push(
                  <Grid item key={counter}>
                    {gridItemChildData}
                  </Grid>
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
              gridItemData.push(
                <div key={counter + "" + counter + "" + counter}>
                  {indexedCountries[idx][1]}
                </div>
              );
            gridItemData.length &&
              gridContainerData.push(
                <Grid item key={counter}>
                  {gridItemChildData}
                </Grid>
              );

            console.log({ gridContainerData });
            return gridContainerData;
          })()
        ) : (
          <div>No list to render</div>
        )}
      </Grid>
    </Container>
  );
};

export default IndexCountries;
