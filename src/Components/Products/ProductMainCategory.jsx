import React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useCompitationContext } from "../../Context/CompitationContext";

const ProductMainCategory = () => {
  const { category } = useCompitationContext();
   const navigate = useNavigate();
  const handleCategorySelect = (id) => {
    navigate(`/category/${id}`);
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
    </>
  );
};

export default ProductMainCategory;
