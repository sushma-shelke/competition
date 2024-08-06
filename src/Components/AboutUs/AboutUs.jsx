import React from "react";
import { Grid, Typography } from "@mui/material";
// import Image1 from "../../Assets/Images/ai.jpg";

const AboutUs = () => {
  return (
    <Grid container sx={{ mt: 4, justifyContent: "center" }}>
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
          xs={12}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={
              "http://kitintellect.tech/bmccompetition/MumbaiLocal-AboutUs.jpg_20240806075733"
            }
            alt="MumbaiLocal-AboutUs"
            style={{
              width: "80%",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            padding: 3,
            maxWidth: "90%",
            margin: "0 auto",
            textAlign: "justify",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, color: "#6f1c32" }}
          >
            About Us
          </Typography>
          <Typography paragraph>
            Mumbai Local Brand is dedicated to the empowerment and growth of
            Self Help Groups (SHGs), particularly those led by women. Our
            mission is to provide a platform that nurtures and celebrates the
            entrepreneurial spirit of these groups, offering them the
            recognition and support they deserve.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 600, color: "#6f1c32" }}
          >
            Current Initiative : Competition
          </Typography>
          <Typography paragraph>
            As part of our commitment to fostering the talents and hard work of
            SHGs, we are excited to announce the SHGeshop Competition. This
            competition is open to all SHGs involved in the production of any
            product. It offers a unique opportunity for these groups to showcase
            their creativity and business acumen.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 600, color: "#6f1c32" }}
          >
            Our Vision :
          </Typography>
          <Typography paragraph>
            At Mumbai Local Brand, we believe in the power of community and the
            potential of collective effort. We strive to create opportunities
            that enable SHGs to thrive, showcasing their products and stories to
            the world. Through initiatives like the SHGeshop Competition, we aim
            to drive positive change, supporting the economic independence and
            social empowerment of women-led SHGs. Join us in celebrating the
            ingenuity and hard work of Self Help Groups. Together, we can make a
            difference, one product at a time.
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid
        item
        container
        xs={11}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid
          item
          xs={7}
          sx={{
            padding: 4,
            border: "1px solid #ccc",
            borderRadius: 2,
            maxWidth: "80%",
            margin: "0 auto",
          }}
        >
          <Typography>
            Mumbai Local Brand is dedicated to the empowerment and growth of
            Self Help Groups (SHGs), particularly those led by women. Our
            mission is to provide a platform that nurtures and celebrates the
            entrepreneurial spirit of these groups, offering them the
            recognition and support they deserve.
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={Image1}
            alt={"Image1"}
            style={{
              width: "80%",
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default AboutUs;
