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

const ProductPost = ({
  name,
  shortDescription,
  photos,
  weight,
  quantity,
  dimensions,
  color,
  price,
  category,
}) => {
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


  const truncateName = (name, wordLimit) => {
    const words = name.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : name;
  };
  
  const handleShare = () => {
    // Add share logic here
    alert("Share button clicked!");
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2, position: "relative" }}>
      <CardMedia
        component="img"
        height="300"
        width={'100%'}
        image={photos[0]}
        // alt={${name} photo}
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "left" }}
          gutterBottom
          variant="h5"
          component="div"
        >
           {truncateName(name, 2)}
          {/* {name} */}
        </Typography>
        <Typography
          sx={{ textAlign: "left" }}
          variant="body2"
          color="text.secondary"
        >
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color={liked ? "secondary" : "default"}
          onClick={handleLike}
        >
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {likeCount} votes
        </Typography>
        <IconButton color="default" onClick={handleShare}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductPost;
