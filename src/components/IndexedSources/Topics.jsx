import React from "react";
import { v4 as uuidv4 } from "uuid";

import { generalStyles as GS, topicStyles as TopS } from "./styled";

const Topics = ({ data: topics, addRef }) => {
  return (
    <div id="topics" ref={(element) => addRef({ name: "#topics", element })}>
      <GS.ListHeading
        sx={{ mt: 3 }}
        onClick={() => (window.location.hash = "#topics")}
      >
        News by Topics
      </GS.ListHeading>
      <GS.HelperInfo>
        You can get news about a topic you want. Here are examples to get you
        started
      </GS.HelperInfo>
      <GS.GridContainer>
        {topics[0]?.length
          ? (() => {
              const sampleTopics = topics;
              Object.freeze(sampleTopics);

              const gridContainerData = [];

              let counter = 1;
              let idx = 0; // Declare index globally to solve closure issues

              let gridItemData = [];
              let gridItemChildData = [];

              while (counter <= sampleTopics?.length) {
                idx = counter - 1;
                gridItemChildData.push(
                  <TopS.TopicInfo key={uuidv4()}>
                    <TopS.TopicName variant="body2">
                      {sampleTopics[idx]}
                    </TopS.TopicName>
                  </TopS.TopicInfo>
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

              //   console.log({ topicSection: gridContainerData });
              return gridContainerData;
            })()
          : null}
      </GS.GridContainer>
    </div>
  );
};

export default React.memo(Topics);
