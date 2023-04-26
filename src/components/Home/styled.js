import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import styled from "@mui/system/styled";

export default {
  HeadingWrapper: styled("div")({
    width: "100%",
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "12px",

    "@media (min-width: 600px)": {
      fontSize: "13px",
    },
    "@media (min-width: 900px)": {
      fontSize: "16px",
    },
    "@media (min-width: 1000px)": {
      fontSize: "22px",
    },
  }),
  QuickStartHeading: styled(Typography)({
    position: "relative",
    color: "#626262",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "3em",
    letterSpacing: "0.8px",
    textAlign: "center",
    display: "inline-block",

    "&:before": {
      content: "'Quick Start'",
      color: "rgb(167 167 167 / 10%)",
      fontSize: "1.5em",
      fontWeight: 700,
      position: "absolute",
      top: "-25%",
      left: "-50%",
      right: "-50%",
      whiteSpace: "nowrap",
      zIndex: "-1",
    },
  }),
  QuickStartCard: styled((props) => {
    const { color, ...rem } = props;
    return <Stack {...rem} />;
  })(({ color }) => ({
    width: "100%",
    height: "300px",
    padding: "10%",
    borderRadius: 10,
    color: "white",
    justifyContent: "space-between",
    alignItems: "center",
    ...(color && { backgroundColor: color }),
  })),
};
