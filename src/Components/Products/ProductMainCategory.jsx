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
import { useCompitationContext } from "../../Context/CompitationContext";

const categories = [
  {
    id: "668fda29c338457079d8e2da",
    src: Image1,
    alt: "Food",
    name: "Food and Drinks",
  },
  {
    id: "668e8a9b83e2da672181fddf",
    src: Image2,
    alt: "Clothing",
    name: "Apparel",
  },
  {
    id: "6696347dc6a272dbcdffda1c",
    src: Image3,
    alt: "Home Decor",
    name: "Home Decor",
  },
  {
    id: "669636b5c6a272dbcdffda20",
    src: Image4,
    alt: "Divine Things",
    name: "Devine Things",
  },
  {
    id: "6696431bdc9c057507b4fec6",
    src: Image5,
    alt: "Homemade",
    name: "Homemade",
  },
  {
    id: "668fda04c338457079d8e2d9",
    src: Image6,
    alt: "Art and Craft",
    name: "Art and Craft",
  },
  {
    id: "669a358df46c83ebaeeb83db",
    src: Image7,
    alt: "Gardening",
    name: "Gardening",
  },
];

const ProductMainCategory = () => {
  const { category } = useCompitationContext();
  const navigate = useNavigate();
  const handleCategorySelect = (id) => {
    navigate(`/category/${id}`);
  };
  return (
    <Grid
      container
      sx={{ justifyContent: "center", marginBottom: "40px" }}
      xs={12}
    >
      {categories.map((category, index) => (
        <Grid
          item
          xs={3} // Each item takes up 6/12 columns on extra-small screens
          sm={3} // Each item takes up 3/12 columns on small screens
          lg={1.7}
          key={index}
          onClick={() => handleCategorySelect(category.id)}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={category.src}
            alt={category.alt}
            style={{ borderRadius: "16px" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductMainCategory;
