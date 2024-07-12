import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import Image1 from "../../Assets/Images/1.png";
import Image2 from "../../Assets/Images/2.png";
import Image3 from "../../Assets/Images/3.png";
import Image4 from "../../Assets/Images/4.png";
import Image5 from "../../Assets/Images/5.png";
import Image6 from "../../Assets/Images/6.png";
import Image7 from "../../Assets/Images/7.png";

const ProductMainCategory = () => {
  return (
    <>
      <Grid
        container
        sx={{ justifyContent: "center", marginY: "40px" }}
        spacing={5}
      >
        <Grid item xs={1.5}>
          <img src={Image1} alt="Food" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={1.5}>
          <img src={Image2} alt="Clothing" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={1.5}>
          <img src={Image3} alt="Home Decor" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={1.5}>
          <img src={Image4} alt="Devine Things" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={1.5}>
          <img src={Image5} alt="Homemade" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={1.5}>
          <img src={Image6} alt="Art and Craft" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={1.5}>
          <img src={Image7} alt="Gardening" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductMainCategory;
