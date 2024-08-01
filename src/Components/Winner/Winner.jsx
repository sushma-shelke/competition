import React from "react";
import { useCompitationContext } from "../../Context/CompitationContext";
import { Grid } from "@mui/material";
import ProductItems from "./ProductItems";

const Winner = () => {
  const { category, categoryWiseTopProducts, categoryWiseTopVotedProducts } =
    useCompitationContext();

  const handleCategorySelect = (id) => {
    categoryWiseTopVotedProducts(id);
  };
  return (
    <>
      <Grid
        container
        sx={{ justifyContent: "center", marginBottom: "40px" }}
        xs={12}
      >
        {category.map((category, index) => (
          <Grid
            item
            xs={4} // Each item takes up 6/12 columns on extra-small screens
            sm={3} // Each item takes up 3/12 columns on small screens
            lg={1.7}
            key={index}
            onClick={() => handleCategorySelect(category.id)}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={category?.category_image}
              alt="Category images"
              style={{ borderRadius: "16px" }}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {categoryWiseTopProducts.map((product, index) => (
          <ProductItems product={product} key={index} />
        ))}
      </Grid>
    </>
  );
};

export default Winner;
