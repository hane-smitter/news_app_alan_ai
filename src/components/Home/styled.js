import Stack from "@mui/material/Stack";
import styled from "@mui/system/styled";

export default {
  QuickStartCard: styled((props) => {
    const { color, ...rem } = props;
    return <Stack {...rem} />;
  })(({ color }) => ({
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
    justifyContent: "space-between",
    alignItems: "center",
    ...(color && { backgroundColor: color }),
  })),
};
