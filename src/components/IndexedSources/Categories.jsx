import React from "react";
import { v4 as uuidv4 } from "uuid";

import { generalStyles as GS, categoryStyles as CatS } from "./styled";

const Categories = ({ data: categories }) => {
  return (
    <div id="categories">
      <GS.ListHeading sx={{ mt: 3 }}>List of Categories</GS.ListHeading>
      <GS.HelperInfo>Get news within the following categories</GS.HelperInfo>
      <GS.GridContainer>
        {categories[0]?.length
          ? (() => {
              const indexedCategories = categories;
              Object.freeze(indexedCategories);

              const gridContainerData = [];

              let counter = 1;
              let idx = 0; // Declare index globally to solve closure issues

              let gridItemData = [];
              let gridItemChildData = [];

              while (counter <= indexedCategories?.length) {
                idx = counter - 1;
                gridItemChildData.push(
                  <CatS.CategoryInfo key={uuidv4()}>
                    <CatS.CategoryName variant="body2">
                      {indexedCategories[idx]}
                    </CatS.CategoryName>
                  </CatS.CategoryInfo>
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

            //   console.log({ categorySection: gridContainerData });
              return gridContainerData;
            })()
          : null}
      </GS.GridContainer>
    </div>
  );
};

export default React.memo(Categories);
