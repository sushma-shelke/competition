import React from "react";
import TopVotedProduct from "./TopVotedProduct";
import Grid from "@mui/material/Grid";
import { useCompitationContext } from "../../Context/CompitationContext";

const TopVotedProductGrid = () => {
  const { topVoted } = useCompitationContext();
  return (
    <Grid container spacing={2}>
      <Grid container sx={{ mt: 4, justifyContent: "center" }}>
        {topVoted.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={product._Id}>
            <TopVotedProduct product={product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default TopVotedProductGrid;
