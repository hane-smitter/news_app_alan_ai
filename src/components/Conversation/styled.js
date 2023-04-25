import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

const radius = "15px";
const borderStyle = {
  recipient: {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: "unset",
  },
  sender: {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: "unset",
    borderBottomLeftRadius: radius,
  },
};

export default {
  ConversationContainer: styled(Stack)({
    alignItems: "center",
    marginBlockEnd: "10px",
    // position: "sticky",
    // top: "10px",
  }),
  ConversationBox: styled(Box)({
    backgroundColor: "#e7e7e6",
    padding: "5px 8px",
    border: "1px solid #c1c0be",
    borderRadius: "5px",
  }),
  ConversationItem: styled((props) => {
    const { color, bgColor, sender, recipient, ...rem } = props;
    return <Box {...rem} />;
  })(({ color, bgColor, sender, recipient }) => ({
    padding: "5px 8px",
    display: "flex",
    flexDirection: "column",
    ...(color && { color }),
    ...(bgColor && { backgroundColor: bgColor }),
    ...(sender && borderStyle.sender),
    ...(recipient && borderStyle.recipient),

    "&:last-of-type": {
        marginTop: "5px"
    }
  })),
  ConversationPersona: styled((props) => (
    <Typography variant="caption" component="span" {...props} />
  ))({
    fontStyle: "italic",
    marginRight: 10,
  }),
  ConversationMsg: styled((props) => (
    <Typography variant="body1" component="span" {...props} />
  ))({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: "400px",

    "&::before": {
      content: "open-quote",
      color: "rgb(185 171 151 / 60%)",
      fontFamily: "Tahoma",
      fontWeight: 300,
      fontSize: "1.6rem",
    },
    "&::after": {
      content: "close-quote",
      color: "rgb(185 171 151 / 60%)",
      fontFamily: "Tahoma",
      fontWeight: 300,
      fontSize: "1.6rem",
    },
  }),
};
