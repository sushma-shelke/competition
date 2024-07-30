import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  useMediaQuery,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCompitationContext } from "../../Context/CompitationContext";

// Define the animation with css helper
const likeAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

// Create a styled component for the Like icon with animation
const AnimatedLikeIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${(props) =>
    props.animate
      ? css`
          ${likeAnimation} 0.6s ease-in-out
        `
      : "none"};
  color: #e91e63 !important;
  font-size: 100px !important;
  opacity: 0 !important;
  pointer-events: none;
`;

const ProductPost = ({ product }) => {

  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)"); // Mobile view

  const [liked, setLiked] = useState(false);
  const [animateLike, setAnimateLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const { giveVote}= useCompitationContext();
 // get data form session storage
 const [user, setUser] = useState(null);
 useEffect(() => {
   const storedUser = localStorage.getItem("user");
   if (storedUser) {
     setUser(JSON.parse(storedUser));
   }
 }, []);
  const votedata={
    userid:user?.id,
    productid: product?._Id,
    categoryid: product?.product_category
  }
  const handleLike = () => {
    setLiked(!liked);
    setAnimateLike(true);
    setTimeout(() => setAnimateLike(false), 600);
        giveVote(votedata);
   
  };

  const handleShare = () => {
    const productUrl = `http://mumbailocal.org:8080/getproductbyid/${product._Id}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=Check out this product and vote: ${product.product_name}. ${product.product_shortdescription}.Link:${productUrl}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleProductSelect = () => {
    navigate(`/product/${product?._Id?product?._Id:product?.result?._Id}`);
  };
  
  const sortdesc= product?.product_shortdescription?product?.product_shortdescription:product?.result?.product_shortdescription
  const desc= sortdesc.length > 30 ? sortdesc.substring(0, 30) + '...' : sortdesc;
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 1,
        position: "relative",
        height: isMobile ? "240px" : "400px",
      }}
    >
      <CardMedia
        component="img"
        height={isMobile ? 150 : 300}
        width={"100%"}
        image={product?.product_photo?product?.product_photo:product?.result?.product_photo}
        sx={{
          transition: "transform 0.4s ease", // Smooth transition
          "&:hover": {
            transform: "scale(1.1)", // Scale the image to 110% on hover
          },
        }}
        onClick={handleProductSelect}
      />
      <CardContent sx={{ padding: isMobile ? "8px" : "16px" }}>
        <Typography
          sx={{
            textAlign: "left",
            height: 30,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: isMobile ? "1rem" : "1.25rem", // Adjust font size based on screen size
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {product?.product_name?product?.product_name:product?.result?.product_name}
        </Typography>
        {!isMobile && (
          <Typography
            sx={{
              textAlign: "left",
              width: 280,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            variant="body2"
            color="text.secondary"
          >
            {desc}
             {/* {truncateText(product?.product_shortdescription?product?.product_shortdescription:product?.result?.product_shortdescription)} */}
          </Typography>
        )}
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: isMobile ? "0 8px" : "8px",
        }}
      >
        <IconButton

          color={liked ? "secondary" : "default"}
          onClick={handleLike}
          sx={{
            flexBasis: "50%",
            padding: isMobile ? "5px" : "8px",
            display: "flex",
            justifyContent: "center",
          }}
        >

          <FavoriteIcon fontSize={isMobile ? "small" : "medium"} />

        </IconButton>
        <IconButton
          color="default"
          onClick={handleShare}
          sx={{
            flexBasis: "50%",
            padding: isMobile ? "5px" : "8px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ShareIcon fontSize={isMobile ? "small" : "medium"} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductPost;
