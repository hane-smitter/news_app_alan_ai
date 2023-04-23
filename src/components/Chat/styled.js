import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

export default {
  ChatContainer: styled(Box)({
    position: "absolute",
    right: "5%",
    top: "15%",
    zIndex: 10,

    "@media (max-width: 600px)": {
      top: "10%",
    },
  }),
  ChatBox: styled(Paper)({
    padding: "5px 10px",
    width: "280px",
  }),
};
