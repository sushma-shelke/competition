import React from "react";
import TopVotedProduct from "./TopVotedProduct";
import Grid from "@mui/material/Grid";
import { useCompitationContext } from "../../Context/CompitationContext";
import { Typography } from "@mui/material";

const TopVotedProductGrid = () => {
  const { topVoted } = useCompitationContext();
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", mt: 4, fontWeight: 700, color: "#6f1c32",backgroundColor:'#E8E8E8',paddingTop:'40px' }}
      
      >
        Top Voted Products
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center",backgroundColor:'#E8E8E8' ,paddingBottom:'40px'}}>
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
