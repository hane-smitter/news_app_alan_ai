import { useContext, useState } from "react";
import NewsContext from "../../context/NewsContext";

const Chat = () => {
  const { sendText } = useContext(NewsContext); // Temporary functionality
  // console.log("sendText function:: ", sendText);
  const [value, setValue] = useState("");

  function handleInputValue(event) {
    setValue(event.target.value);
  }
  function handleInputTalk() {
    sendText(value);
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
