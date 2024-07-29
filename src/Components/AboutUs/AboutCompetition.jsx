import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Winning from "../../Assets/Images/Winning.png";
import Registration from "../../Assets/Images/Registration.png";
import Votes from "../../Assets/Images/Votes.png";
const AboutCompetition = () => {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Mobile view
  const isTablet = useMediaQuery("(max-width: 960px)"); // Tablet view
  return (
    <Grid container sx={{ mt: 4, justifyContent: "center" }}>
      <Typography
        gutterBottom
        sx={{
          mb: 4,
          fontWeight: 700,
          color: "#6f1c32",
          fontSize: isMobile ? "1.5rem" : "2.125rem",
        }}
      >
        Competition Highlights
      </Typography>
      <Grid
        item
        container
        xs={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid
          item
          lg={3.5}
          md={3}
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, color: "#6f1c32" }}
          >
            Product Registration:
          </Typography>
          <img
            src={Registration}
            alt={"Image1"}
            style={{
              width: "80%",
              cursor: "pointer",
              borderRadius: "10px",
              margin: "10px 0",
            }}
          />
          <Typography sx={{ p: 2, textAlign: "center" }}>
            SHGs can apply for the competition by registering their products.
            This is a chance to put their best creations in the spotlight,
            reaching a wider audience and potential customers.
          </Typography>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={3}
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, color: "#6f1c32" }}
          >
            User Voting:
          </Typography>
          <img
            src={Votes}
            alt={"Image1"}
            style={{
              width: "80%",
              cursor: "pointer",
              borderRadius: "10px",
              margin: "10px 0",
            }}
          />
          <Typography sx={{ p: 2, textAlign: "center" }}>
            Once products are registered, users can vote for the products they
            find most attractive, useful, and budget-friendly. This democratic
            voting process ensures that the products that resonate most with the
            public get the recognition they deserve.
          </Typography>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={3}
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, color: "#6f1c32" }}
          >
            Winning Criteria:
          </Typography>
          <img
            src={Winning}
            alt={"Image1"}
            style={{
              width: "80%",
              cursor: "pointer",
              borderRadius: "10px",
              margin: "10px 0",
            }}
          />
          <Typography sx={{ p: 2, textAlign: "center" }}>
            The SHG with the most votes in each product category will be
            declared the winner. Winners receive not only public recognition but
            also a boost to their credibility and brand value within the
            community.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutCompetition;
