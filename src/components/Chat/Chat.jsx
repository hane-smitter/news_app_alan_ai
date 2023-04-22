import { useContext, useState } from "react";
import NewsContext from "../../context/NewsContext";

const Chat = () => {
  const { sendText, aiBtn } = useContext(NewsContext); // Temporary functionality
  // console.log("sendText function:: ", sendText);
  const [value, setValue] = useState("");

  function handleInputValue(event) {
    setValue(event.target.value);
  }
  function handleInputTalk() {
    if (aiBtn) {
      aiBtn.sendText(value);
    } else {
      console.warn("Ai btn frm context is unavailable with status: ", aiBtn);
      sendText(value);
    }
  }

  return (
    <div style={{ margin: "30px 0 0 200px" }}>
      <input value={value} onChange={handleInputValue} />
      <br />
      <button onClick={handleInputTalk}>Talk to AI</button>
    </div>
  );
};

export default Chat;
