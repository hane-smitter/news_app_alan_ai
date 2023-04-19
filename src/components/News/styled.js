import styled from "@mui/system/styled";
import Stack from "@mui/material/Stack";

export default {
  footer: styled("footer")(({ theme }) => ({
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: 0,
    color: "black",
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "120px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  })),
  link: {
    textDecoration: "none",
    color: "rgba(21, 101, 192)",
  },
  image: {
    marginLeft: 20,
  },
  LogoContainer: styled(Stack)(({ theme }) => ({
    padding: "0 15px",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  })),
  Logo: styled((props) => <img alt="AI logo" {...props} />)(({ theme }) => ({
    height: "27vmin",
    borderRadius: "15%",
    padding: "0 5%",
    margin: "3% 0",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin",
    },
  })),
  // infoContainer: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-around",
  //   [theme.breakpoints.down("sm")]: {
  //     flexDirection: "column",
  //   },
  // },
  // card: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "50%",
  //   padding: "3%",
  //   borderRadius: 10,
  //   color: "white",
  //   backgroundColor: "rgba(21, 101, 192)",
  //   margin: "0 12px",
  //   textAlign: "center",
  //   height: "25vmin",
  //   [theme.breakpoints.down("sm")]: {
  //     flexDirection: "column-reverse",
  //     textAlign: "center",
  //     height: "initial",
  //     "&:nth-of-type(1)": {
  //       marginBottom: "12px",
  //     },
  //   },
  // },
};
