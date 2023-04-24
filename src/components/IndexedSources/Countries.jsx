import React from "react";
import { v4 as uuidv4 } from "uuid";

import { generalStyles as GS, countryStyles as CS } from "./styled";

const Countries = ({ data: countries }) => {
  return (
    <div id="countries">
      <GS.ListHeading sx={{ mt: 1 }}>List of countries</GS.ListHeading>
      <GS.HelperInfo>You can obtain news from these countries</GS.HelperInfo>
      <GS.GridContainer>
        {countries[0][0]?.length
          ? (() => {
              const gridContainerData = [];

              let counter = 1;
              let idx = 0; // Declare index globally to fix closure issues

              let gridItemData = [];
              let gridItemChildData = [];
              let indexedCountries = countries;
              Object.freeze(indexedCountries);

              while (counter <= indexedCountries?.length) {
                idx = counter - 1;
                gridItemChildData.push(
                  <CS.CountryInfo key={uuidv4()}>
                    <CS.CountryFlag
                      src={`https://flagcdn.com/${indexedCountries[idx][0]}.svg`}
                    />
                    <CS.CountryName variant="body2">
                      {indexedCountries[idx][1]}
                    </CS.CountryName>
                  </CS.CountryInfo>
                );

                if (counter % 4 === 0) {
                  gridItemData.push(gridItemChildData);
                  // console.log({ gridItemData });

                  gridItemChildData = [];
                }

                if (counter % (4 * 2) === 0) {
                  gridContainerData.push(
                    <GS.GridItem key={uuidv4()}>
                      <GS.Buckle>{gridItemData}</GS.Buckle>
                    </GS.GridItem>
                  );
                  gridItemData = [];
                }
                counter++;
              }

              gridItemChildData.length && gridItemData.push(gridItemChildData);
              gridItemData.length &&
                gridContainerData.push(
                  <GS.GridItem key={uuidv4()}>
                    <GS.Buckle>{gridItemData}</GS.Buckle>
                  </GS.GridItem>
                );

            //   console.log({ CountriesSection: gridContainerData });
              return gridContainerData;
            })()
          : null}
      </GS.GridContainer>
    </div>
  );
};

export default React.memo(Countries);
