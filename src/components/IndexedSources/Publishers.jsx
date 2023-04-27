import React from "react";
import { v4 as uuidv4 } from "uuid";

import { generalStyles as GS, publisherStyles as PS } from "./styled";

const Publishers = ({ data: publishers, addRef }) => {
  return (
    <div
      id="publishers"
      ref={(element) => addRef({ name: "#publishers", element })}
    >
      <GS.ListHeading
        sx={{ mt: 3 }}
        onClick={() => (window.location.hash = "#publishers")}
      >
        List of publishers
      </GS.ListHeading>
      <GS.HelperInfo>possible sources of news</GS.HelperInfo>
      <GS.GridContainer>
        {publishers[0][0]?.length
          ? (() => {
              const indexedPublishers = publishers;
              Object.freeze(indexedPublishers);

              const gridContainerData = [];

              let counter = 1;
              let idx = 0; // Declare index globally to solve closure issues

              let gridItemData = [];
              let gridItemChildData = [];

              while (counter <= indexedPublishers?.length) {
                idx = counter - 1;
                gridItemChildData.push(
                  <PS.PublisherInfo key={uuidv4()}>
                    <PS.PublisherName variant="body2">
                      {indexedPublishers[idx][1]}
                    </PS.PublisherName>
                  </PS.PublisherInfo>
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

              // console.log("rem: ", indexedPublishers?.length % (4 * 2));

              // INCLUDE remaining data
              // console.log(
              //   "indexedCountries at this point: ",
              //   indexedPublishers[idx][1]
              // );
              gridItemChildData.length && gridItemData.push(gridItemChildData);
              gridItemData.length &&
                gridContainerData.push(
                  <GS.GridItem key={uuidv4()}>
                    <GS.Buckle>{gridItemData}</GS.Buckle>
                  </GS.GridItem>
                );

              //   console.log({ PublisherSection: gridContainerData });
              return gridContainerData;
            })()
          : null}
      </GS.GridContainer>
    </div>
  );
};

export default React.memo(Publishers);
