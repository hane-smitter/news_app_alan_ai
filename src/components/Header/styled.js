import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import styled from "@mui/system/styled";
import { darken } from "@mui/material";

export default {
  NavMenu: styled(Box)({
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
  }),
  NavMenuItem: styled(Link)({
    color: "#333",
    textDecoration: "none",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    fontWeight: 700,
    fontFamily: "Roboto, sans-serif",
    display: "inline-block",
    width: "80px",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      color: "#0D88FE",
    },
    "&.active": {
      color: darken("#0D88FE", 0.3),
    },

    "&:nth-of-type(1):hover ~ .dot": {
      transform: "translateX(30px)",
      transition: "all 0.2s ease-in-out",
      opacity: 1,
    },

    "&:nth-of-type(2):hover ~ .dot": {
      transform: "translateX(110px)",
      transition: "all 0.2s ease-in-out",
      opacity: 1,
    },

    "&:nth-of-type(3):hover ~ .dot": {
      transform: "translateX(200px)",
      transition: "all 0.2s ease-in-out",
      opacity: 1,
    },
  }),
  DecorationDot: styled("div")({
    width: "6px",
    height: "6px",
    backgroundColor: "#0D88FE",
    borderRadius: "50%",
    opacity: 0,
    transform: "translateX(30px)",
    transition: "all 0.2s ease-in-out",
  }),
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
};
