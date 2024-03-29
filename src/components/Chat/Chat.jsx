import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";

import NewsContext from "../../context/NewsContext";
import SC from "./styled";

const Chat = () => {
  const { sendText, assistantConnected, assistantBtn } =
    useContext(NewsContext); // Temporary functionality
  // console.log("sendText function:: ", sendText);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  function handleInputValue(event) {
    setValue(event.target.value);
  }
  function communicate(event) {
    event.preventDefault();
    console.log("TALK INP clicked!");
    if (assistantBtn) {
      assistantBtn.sendText(value);
    } else {
      console.warn("Ai btn frm context is unavailable: ", assistantBtn);
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
          <Typography variant="body2">Type it and send to Alan</Typography>
          <Typography
            variant="caption"
            sx={{ fontStyle: "italic" }}
            component="strong"
          >
            <span style={{ fontWeight: "bold" }}>NB: </span>No audio feeback
            when using this feature
          </Typography>
          <form onSubmit={communicate}>
            <TextField
              value={value}
              onChange={handleInputValue}
              variant="filled"
              spellCheck
              placeholder="Start typing..."
              label="Text Message"
              sx={{ marginBottom: 2, width: "100%" }}
            />

            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ display: "block" }}
              color={assistantConnected ? "primary" : "warning"}
              disabled={!Boolean(value) || !assistantConnected}
            >
              Talk to Alan
            </Button>
            {!assistantConnected && (
              <FormHelperText error={true}>
                Voice assistant is disconnected. Did you lose network
                connection?
              </FormHelperText>
            )}
          </form>
        </SC.ChatBox>
      ) : (
        <Link href="#" onClick={onShowChat}>
          Unable to talk a message?
        </Link>
      )}
    </SC.ChatContainer>
  );
};

export default Chat;
