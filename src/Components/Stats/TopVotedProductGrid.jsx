import React from "react";
import TopVotedProduct from "./TopVotedProduct";
import Grid from "@mui/material/Grid";
import { useCompitationContext } from "../../Context/CompitationContext";
import { Typography, useMediaQuery } from "@mui/material";

const TopVotedProductGrid = () => {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Mobile view
  const isTablet = useMediaQuery("(max-width: 960px)"); // Tablet view
  const { topVoted } = useCompitationContext();
  return (
    <>
      <Typography
        gutterBottom
        sx={{
          textAlign: "center",
          mt: 4,
          fontWeight: 700,
          color: "#6f1c32",
          backgroundColor: "#E8E8E8",
          paddingTop: "40px",
          fontSize: isMobile ? "1.5rem" : "2.125rem",
        }}
      >
        Top Voted Products
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          backgroundColor: "#E8E8E8",
          paddingBottom: "40px",
        }}
      >
        {topVoted.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._Id}>
            <TopVotedProduct product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TopVotedProductGrid;
