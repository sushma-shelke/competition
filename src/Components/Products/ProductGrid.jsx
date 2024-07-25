import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import ProductPost from "./ProductPost";
import { useCompitationContext } from "../../Context/CompitationContext";

const ProductGrid = () => {
  const { products } = useCompitationContext();
  const isMobile = useMediaQuery("(max-width: 600px)"); // Mobile view
  const isTablet = useMediaQuery("(max-width: 960px)"); // Tablet view

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: "#6f1c32",
          fontSize: isMobile ? "1.5rem" : "2.125rem", // Adjust font size based on screen size
        }}
      >
        Participating Products
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {products &&
          products.map((product) => (
            <Grid
              item
              key={product._id}
              xs={6} // 2 cards per row on mobile
              sm={6} // 2 cards per row on larger mobile devices
              md={4} // 3 cards per row on tablets
              lg={3} // 4 cards per row on desktop
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProductPost product={product} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ProductGrid;
