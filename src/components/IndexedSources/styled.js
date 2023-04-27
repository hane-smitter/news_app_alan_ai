import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";
import Paper from "@mui/material/Paper";

const generalStyles = {
  ListHeading: styled((props) => {
    return <Typography variant="h4" component="h1" {...props} />;
  })({
    textTransform: "uppercase",
    cursor: "pointer",

    "&:hover::after": {
      opacity: 1,
    },
    "&::after": {
      content: "'#'",
      opacity: 0,
      transition: "opacity 500ms linear",
      marginLeft: "8px",
      textDecoration: "underline",
      color: "#ad8661",
    },
  }),
  HelperInfo: styled((props) => {
    return <Typography variant="body2" component="p" {...props} />;
  })({
    fontStyle: "italic",
  }),
  GridContainer: styled((props) => {
    return <Grid container spacing={2} {...props} />;
  })({
    justifyContent: "flex-start",
    margin: 0,
    // gap: "10px",
  }),
  GridItem: styled((props) => {
    return <Grid item {...props} />;
  })({
    padding: 0,
  }),
  Buckle: styled("div")({
    padding: "5px",
    outline: "1px ridge rgb(197 197 197 / 20%)",
    borderRadius: "5px",
  }),
};

const countryStyles = {
  CountryInfo: styled(Box)({
    backgroundColor: "#ffffff",
    padding: "5px 10px",
    width: "200px",
    wordBreak: "break-word",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 5px 9px 1px rgba(0, 0, 0, 0.35)",

    "&:not(:last-of-type)": {
      marginBottom: "10px",
    },
  }),
  CountryFlag: styled((props) => {
    return <img width={20} height={20} {...props} />;
  })({
    borderRadius: "5px",
    marginRight: "8px",
  }),
  CountryName: styled((props) => {
    return <Typography component="span" {...props} />;
  })({
    color: "#404040",
  }),
};

const publisherStyles = {
  PublisherInfo: styled(Paper)({
    width: "200px",
    padding: "4px 8px",
    wordBreak: "break-word",
    boxShadow: "0 5px 9px 1px rgba(0, 0, 0, 0.35)",
  }),
  PublisherName: styled((props) => {
    return <Typography component="span" {...props} />;
  })({
    color: "#404040",
  }),
};

const categoryStyles = {
  CategoryInfo: styled(Paper)({
    width: "200px",
    padding: "4px 8px",
    wordBreak: "break-word",
    boxShadow: "0 5px 9px 1px rgba(0, 0, 0, 0.35)",
  }),
  CategoryName: styled((props) => {
    return <Typography component="span" {...props} />;
  })({
    color: "#404040",
    textTransform: "capitalize",
  }),
};

const topicStyles = {
  TopicInfo: styled(Paper)({
    width: "200px",
    padding: "4px 8px",
    wordBreak: "break-word",
    boxShadow: "0 5px 9px 1px rgba(0, 0, 0, 0.35)",
  }),
  TopicName: styled((props) => {
    return <Typography component="span" {...props} />;
  })({
    color: "#404040",
    textTransform: "capitalize",
  }),
};

export {
  generalStyles,
  countryStyles,
  publisherStyles,
  categoryStyles,
  topicStyles,
};
