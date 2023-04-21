import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

export default {
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
