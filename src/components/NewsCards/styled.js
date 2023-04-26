import styled from "@mui/system/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default {
  GridContainer: styled((props) => {
    return <Grid container alignItems="stretch" spacing={3} {...props} />;
  })({
    columnGap: "10px",
    rowGap: "20px",
    margin: 0,
    justifyContent: "space-around",
  }),

  GridItem: styled((props) => {
    const { isActive, forwardRef, ...rest } = props;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} ref={forwardRef} {...rest} />
    );
  })(({ isActive }) => ({
    // ...(isActive && { outline: "2px solid black" }),
    padding: "0!important",
    minWidth: "290px",
  })),
  ShowMoreContainer: styled(Box)({
    width: "100%",
    textAlign: "center",
    marginTop: "10px",
  }),
  ShowMoreBtn: styled(Button)({
    outline: "1px solid",
  }),
};
