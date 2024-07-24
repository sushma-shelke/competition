import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCompitationContext } from "../../Context/CompitationContext";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import GroupIcon from "@mui/icons-material/Group";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Stats from "../../Assets/Images/bg.png";
// import Stats from "../../Assets/Images/bgStaticInfo.png";

const backgroundStyle = {
  backgroundImage: `url(${Stats})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
};
const CounterItem = () => {
  const { products, users, votes } = useCompitationContext();
  console.log("votes", votes);
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [voteCount, setVoteCount] = useState(0);

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
  }, [products?.length, users?.length, votes?.length]);
  return (
    <>
      <Grid
        container
        sx={{
          // mt: 4,
          // justifyContent: "center",
          // background: "linear-gradient(to right, #e6739d, #edd7df)",
          ...backgroundStyle,
          alignSelf: "center",
        }}
      >
        <Grid
          container
          sx={{
            m: 4,
            justifyContent: "center",
            background: "rgba(128, 128, 128, 0.4)", // Adding opacity to the background colors
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Grid
            item
            container
            xs={12}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mt: 3,
            }}
          >
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CategoryIcon sx={{ fontSize: "6rem", color: "#ffffff" }} />

              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#ffffff",
                }}
              >
                Categories
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ mt: 2, fontWeight: 700, color: "#ffffff" }}
              >
                7
              </Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ShoppingBagIcon sx={{ fontSize: "6rem", color: "#ffffff" }} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#ffffff",
                }}
              >
                Products
              </Typography>

              <Typography
                variant="h4"
                gutterBottom
                sx={{ mt: 2, fontWeight: 700, color: "#ffffff" }}
              >
                {productCount}
              </Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GroupIcon sx={{ fontSize: "6rem", color: "#ffffff" }} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#ffffff",
                }}
              >
                Users
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ mt: 2, fontWeight: 700, color: "#ffffff" }}
              >
                {userCount}
              </Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HowToVoteIcon sx={{ fontSize: "6rem", color: "#ffffff" }} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#ffffff",
                }}
              >
                Votes
              </Typography>

              <Typography
                variant="h4"
                gutterBottom
                sx={{ mt: 2, fontWeight: 700, color: "#ffffff" }}
              >
                1000+
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CounterItem;
