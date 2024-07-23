import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";

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

  const [liked, setLiked] = useState(false);
  const [animateLike, setAnimateLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setAnimateLike(true);
    setTimeout(() => setAnimateLike(false), 600);

    // Increment or decrement likeCount based on liked state
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  // const name=product?.name;
  //   const truncateName = (name, wordLimit) => {
  //     const words = name.split(' ');
  //     return words.length > wordLimit
  //       ? words.slice(0, wordLimit).join(' ') + '...'
  //       : name;
  //   };

  const handleShare = () => {
    console.log("click in product");
  };
  const handleProductSelect = () => {
    navigate(`/product/${product?._Id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2, position: "relative" }}>
      <CardMedia
        component="img"
        height="300"
        width={"100%"}
        image={product?.product_photo}
        // alt={${name} photo}
        onClick={handleProductSelect}
      />
      <CardContent>
        <Typography
          sx={{
            textAlign: "left",
            height: 30,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {product?.product_name}
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            textAlign: "left",
            width: 280,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="body2"
          color="text.secondary"
        >
          {product?.product_shortdescription}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color={liked ? "secondary" : "default"}
          onClick={handleLike}
        >
          <FavoriteIcon />
        </IconButton>
        {/*<Typography variant="body2" color="text.secondary">
          {likeCount} votes
        </Typography>*/}
        <IconButton color="default" onClick={handleShare}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductPost;
