import React from "react";
import Grid from "@mui/material/Grid";
import Image1 from "../../Assets/Images/1.png";
import Image2 from "../../Assets/Images/2.png";
import Image3 from "../../Assets/Images/3.png";
import Image4 from "../../Assets/Images/4.png";
import Image5 from "../../Assets/Images/5.png";
import Image6 from "../../Assets/Images/6.png";
import Image7 from "../../Assets/Images/7.png";
import { useNavigate } from "react-router-dom";

const categories = [
  { src: Image1, alt: "Food", name: "Food and Drinks" },
  { src: Image2, alt: "Clothing", name: "Apparel" },
  { src: Image3, alt: "Home Decor", name: "Home Decor" },
  { src: Image4, alt: "Divine Things", name: "Devine Things" },
  { src: Image5, alt: "Homemade", name: "Homemade" },
  { src: Image6, alt: "Art and Craft", name: "Art and Craft" },
  { src: Image7, alt: "Gardening", name: "Gardening" },
];

const ProductMainCategory = () => {
  const navigate = useNavigate();
  const handleCategorySelect = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };
  return (
    <Grid
      container
      sx={{ justifyContent: "center", marginBottom: "40px" }}
      spacing={5}
    >
      {categories.map((category, index) => (        
        <Grid
          item
          xs={1.5}
          key={index}
          onClick={() => 
            handleCategorySelect(category.name)}
        >
          <img
            src={category.src}
            alt={category.alt}
            style={{ width: "100%", cursor: "pointer" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductMainCategory;
