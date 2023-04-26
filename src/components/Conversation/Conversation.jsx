import React, { useContext } from "react";
import Typography from "@mui/material/Typography";

import SC from "./styled";
import NewsContext from "../../context/NewsContext";

const Conversation = () => {
  const { conversation } = useContext(NewsContext);

  return conversation?.youSaid?.length ? (
    <SC.ConversationContainer>
      <SC.ConversationBox>
        <Typography
          variant="overline"
          component="span"
          sx={{ textAlign: "center", width: "100%", display: "inline-block" }}
        >
          conversation with Alan
        </Typography>
        <SC.ConversationItem bgColor="#ffffff" color="#5a5555" recipient>
          <SC.ConversationPersona sx={{ textAlign: "start" }}>
            Alan said:
          </SC.ConversationPersona>
          <SC.ConversationMsg sx={{ textAlign: "start" }}>
            {conversation.aiSaid ? conversation.aiSaid : "..."}
          </SC.ConversationMsg>
        </SC.ConversationItem>
        <SC.ConversationItem bgColor="#1c2e45" color="#ffffff" sender>
          <SC.ConversationPersona sx={{ textAlign: "end" }}>
            You said:
          </SC.ConversationPersona>
          <SC.ConversationMsg sx={{ textAlign: "end" }}>
            {conversation.youSaid ? conversation.youSaid : "..."}
          </SC.ConversationMsg>
        </SC.ConversationItem>
      </SC.ConversationBox>
    </SC.ConversationContainer>
  ) : (
    <Typography
      variant="caption"
      fontStyle={"italic"}
      textAlign={"center"}
      component="div"
      sx={{ my: 1 }}
    >
      Tap open the microphone and ask Alan anything about NEWS
    </Typography>
  );
};

export default React.memo(Conversation);
