import styled from "@mui/system/styled";
import Grid from "@mui/material/Grid";

export default {
  GridContainer: styled((props) => {
    return <Grid container alignItems="stretch" spacing={3} {...props} />;
  })({
    gap: "10px",
    margin: 0,
  }),

  GridItem: styled((props) => {
    const { isActive, forwardRef, ...rest } = props;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} ref={forwardRef} {...rest} />
    );
  })(({ isActive }) => ({
    ...(isActive && { outline: "2px solid black" }),
    padding: "0!important",
  })),
};
