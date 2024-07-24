import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Grid } from "@mui/material";

const TopVotedProduct = ({ product }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

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
          boxShadow: "2px 5px 12px rgba(0, 0, 0, 0.25)", // Adding box shadow
          borderRadius: "10px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {product.shgname.charAt(0)}
            </Avatar>
          }

          title={product.product_name}
          subheader={product.shgname}
        /> */}
        <CardMedia
          component="img"
          height="300"
          // width="600"
          image={product.product_photo}
          alt={product.product_name}
          sx={{
            transition: "transform 0.4s ease", // Smooth transition
            "&:hover": {
              transform: "scale(1.1)",
              // backgroundColor:'#212121',
              // borderRadius:'45px' // Scale the image to 110% on hover
            },
          }}
        />
        <CardContent sx={{backgroundColor:'#E8E8E8'}}>
          {/* <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            {truncateText(product.product_shortdescription, 90)}
          </Typography> */}
          <Typography style={{color:'#6F1C32',fontWeight:"bold", fontSize:'17px'}}>
          {product.product_name}
          </Typography>
          <Typography  style={{color:'#6F1C32',fontWeight:"bold", fontSize:'15px'}}>
          {product.shgname}
          </Typography>
          <Typography
            // variant="h6"
            // color="text.primary"
            // sx={{ mt: 2, textAlign: "right" }}
            style={{color:'#6F1C32',fontWeight:"bold"}}
          >
            Total Votes: {product.votecount}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    </>
  );
};

export default TopVotedProduct;
