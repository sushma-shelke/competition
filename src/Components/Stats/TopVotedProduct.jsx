import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const TopVotedProduct = ({ product }) => {
  return (
    <>
      <Grid
        item
        container
        xs={12}
        lg={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: 3,
        }}
      >
        <Card
          sx={{
            lg: 4,
            md: 3,
            sm: 12,
            boxShadow: "2px 5px 12px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            width: "350px",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={product.product_photo}
            alt={product.product_name}
            sx={{
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardContent sx={{ backgroundColor: "#f8f7f7" }}>
            <Typography
              style={{ color: "#6F1C32", fontWeight: "bold", fontSize: "17px" }}
            >
              {product.product_name}
            </Typography>
            <Typography
              style={{ color: "#6F1C32", fontWeight: "bold", fontSize: "15px" }}
            >
              {product.shgname}
            </Typography>
            <Typography style={{ color: "#6F1C32", fontWeight: "bold" }}>
              Total Votes: {product.votecount}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default TopVotedProduct;
