import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCompitationContext } from "../../Context/CompitationContext";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import GroupIcon from "@mui/icons-material/Group";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

const MainCounter = () => {
  const { products, users, votes , category} = useCompitationContext();
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [voteCount, setVoteCount] = useState(0);
  const[categoryCount ,setCategoryCount]= useState(0);
  useEffect(() => {
    const countUp = (target, setter) => {
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount++;
        setter(currentCount);
        if (currentCount >= target) {
          clearInterval(interval);
        }
      }, 50);
    };

    if (products?.length) {
      countUp(products.length, setProductCount);
    }
    if (users?.length) {
      countUp(users.length, setUserCount);
    }
    if (votes?.length) {
      countUp(votes.length, setVoteCount);
    }
    if (category?.length) {
      countUp(category.length, setCategoryCount);
    }
  }, [products?.length, users?.length, votes?.length ,category?.length]);

  const counterItems = [
    {
      icon: <CategoryIcon sx={{ fontSize: "3rem", color: "#6F1C32" }} />,
      count: categoryCount,
      label: "Categories",
    },
    {
      icon: <ShoppingBagIcon sx={{ fontSize: "3rem", color: "#6F1C32" }} />,
      count: productCount,
      label: "Products",
    },
    {
      icon: <GroupIcon sx={{ fontSize: "3rem", color: "#6F1C32" }} />,
      count: userCount,
      label: "Users",
    },
    {
      icon: <HowToVoteIcon sx={{ fontSize: "3rem", color: "#6F1C32" }} />,
      count: voteCount,
      label: "Votes",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: 4,
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        // backgroundColor: "#F5F5F5",
        padding: 2,
        borderRadius: 2,
      }}
    >
      {counterItems.map((item, index) => (
        <Grid
          item
          key={index}
          lg={2.5}
          md={2.5}
          sm={4}
          xs={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
            padding: 3,
            margin: 2,
            borderRadius: 2,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          {item.icon}
          <Typography
            variant="h3"
            sx={{ m: 1, fontWeight: 500, color: "#727070" }}
          >
            {item.count.toLocaleString()}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#878787",
            }}
          >
            {item.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainCounter;
