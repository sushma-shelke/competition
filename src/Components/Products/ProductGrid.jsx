import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductPost from "./ProductPost";
import { useCompitationContext } from "../../Context/CompitationContext";

const ProductGrid = () => {
   const { products } = useCompitationContext();
   return (
    <Grid container spacing={2} justifyContent="center">
      {products &&
        products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={3}>
            <ProductPost product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductGrid;
