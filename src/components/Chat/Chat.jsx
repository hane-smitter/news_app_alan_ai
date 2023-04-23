import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";

import NewsContext from "../../context/NewsContext";
import SC from "./styled";

const Chat = () => {
  const { sendText, aiBtn } = useContext(NewsContext); // Temporary functionality
  // console.log("sendText function:: ", sendText);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  function handleInputValue(event) {
    setValue(event.target.value);
  }
  function communicate(event) {
    event.preventDefault();
    console.log("TALK INP clicked!");
    if (aiBtn) {
      aiBtn.sendText(value);
    } else {
      console.warn("Ai btn frm context is unavailable with status: ", aiBtn);
      sendText(value);
    }
  }
  function onShowChat(event) {
    event.preventDefault();
    setOpen(true);
  }
  function onHideChat() {
    setOpen(false);
  }

  return (
    <SC.ChatContainer>
      {open ? (
        <SC.ChatBox>
          <div style={{ display: "flex", marginBottom: "5px" }}>
            <Button
              variant="outlined"
              onClick={onHideChat}
              sx={{
                marginLeft: "auto",
                lineHeight: 1.4,
                padding: "4px 8px",
                fontSize: "0.83rem",
              }}
            >
              hide
            </Button>
          </div>
          <Typography variant="body2">
            Type a message and send to Alan
          </Typography>
          <Typography variant="caption" sx={{ fontStyle: "italic" }}>
            <span style={{ fontWeight: "bold" }}>NB: </span>No audio feeback
            when using this feature
          </Typography>
          <form onSubmit={communicate}>
            <TextField
              value={value}
              onChange={handleInputValue}
              variant="filled"
              spellCheck
              label="Type here..."
              sx={{ marginBottom: 2, width: "100%" }}
            />

            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ display: "block" }}
              disabled={!Boolean(value)}
            >
              Talk to Alan
            </Button>
          </form>
        </SC.ChatBox>
      ) : (
        <Link href="#" onClick={onShowChat}>
          Can't communicate a message?
        </Link>
      )}
    </SC.ChatContainer>
  );
};

export default Chat;
