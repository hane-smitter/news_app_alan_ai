import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import styled from "@mui/system/styled";

export default {
  ArticleCard: styled((props) => {
    const { isActive, ...rest } = props;
    return <Card {...rest} />;
  })(
    ({ isActive }) => `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: ${isActive ? "10px solid #22289a" : "#ffffff"};
  `
  ),
  ArticleCardActions: styled(CardActionArea)({
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  }),
  //   media: {
  //     height: 250,
  //   },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  grid: {
    display: "flex",
  },
  ArticleLinkBtn: styled((props) => {
    return (
      <Button
        size="small"
        color="primary"
        component={Link}
        target="_blank"
        {...props}
      />
    );
  })({}),
  //   details: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     margin: "20px",
  //   },
  //   title: {
  //     padding: "0 16px",
  //   },
  //   cardActions: {
  //     padding: "0 16px 8px 16px",
  //     display: "flex",
  //     justifyContent: "space-between",
  //   },
};
