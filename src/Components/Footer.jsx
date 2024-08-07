import React from "react";
import "./../footer.css";
import { Grid, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Box className="footer-banner" style={{ marginTop: "40px" }}>
      <Grid container spacing={2} className="footer-content">
        <Grid
          container
          xs={12}
          sx={{ direction: "flex", justifyContent: "center", padding: "10px" }}
        >
          <Grid container item xs={11}>
            <Grid item lg={4} md={4} sm={12}>
              <Grid container xs={12} gap={1}>
                <Grid
                  item
                  xs={3}
                  sx={{ display: "grid", justifyContent: "right" }}
                >
                  <img
                    alt="MumbaiLocal-Findus"
                    src={
                      "http://kitintellect.tech/bmccompetition/MumbaiLocal-Findus.png_20240806073716"
                    }
                    height=""
                    width=""
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    style={{
                      color: "#453D34",
                      fontSize: "16px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    Find Us
                  </Typography>

                  <Typography
                    style={{
                      color: "#453D34",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    5, Mahapalika Marg, Dhobi Talao, Chhatrapati Shivaji
                    Terminus Area, Fort, Mumbai, Maharashtra 400001
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <Grid container xs={12} gap={1}>
                <Grid
                  item
                  xs={3}
                  sx={{ display: "grid", justifyContent: "right" }}
                >
                  <img
                    alt="MumbaiLocal-Callus"
                    src={
                      "http://kitintellect.tech/bmccompetition/MumbaiLocal-Callus.png_20240806073626"
                    }
                    height="70%"
                    width=""
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    style={{
                      color: "#453D34",
                      fontSize: "16px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    Call Us
                  </Typography>

                  <Typography
                    style={{
                      color: "#453D34",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    +91 84591 72859
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <Grid container xs={12} gap={1}>
                <Grid
                  item
                  xs={3}
                  sx={{ display: "grid", justifyContent: "right" }}
                >
                  <img
                    alt="MumbaiLocal-Mailus"
                    src={
                      "http://kitintellect.tech/bmccompetition/MumbaiLocal-Mailus.png_20240806073838"
                    }
                    height="70%"
                    width=""
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    style={{
                      color: "#453D34",
                      fontSize: "16px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    Mail Us
                  </Typography>

                  <Typography
                    style={{
                      color: "#453D34",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    support@mumbailocal.org
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12}>
          <Grid container item lg={7} md={7} sm={12}>
            <Grid item lg={2}>
              <img
                alt="logo"
                src={
                  "http://kitintellect.tech/bmccompetition/MumbaiLocal-logo.png_20240806054556"
                }
                className="footerLogo"
              />
            </Grid>
            <Grid item lg={10}>
              <Typography
                sx={{
                  fontSize: "16px",
                  paddingLeft: "2rem",
                  textAlign: "left",
                  color: "#453D34",
                }}
              >
                Join the SHGeshop Competition with BMCs Mumbai Local and support
                local Self-Help Groups (SHGs) as they showcase their best
                products. Submit creations, vote, and recognize talent in
                various categories. Celebrate community craftsmanship, help SHGs
                gain recognition, and discover unique, high-quality products.
                Empower local entrepreneurs today!
              </Typography>
            </Grid>

            <Typography
              sx={{
                fontSize: "19px",
                paddingLeft: "1rem",
                fontWeight: "900",
                textAlign: "left",
                paddingTop: "2.5rem",
                color: "#453D34",
              }}
            >
              Follow Us
            </Typography>
            <Grid
              item
              container
              xs={12}
              sx={{ paddingTop: "5px", paddingLeft: "3rem" }}
            >
              <Grid item container lg={5} md={5} sm={12}>
                {/* <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1DA1F2" }}
                  >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                </Grid> */}

                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=61562700044024"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#1877F2",
                    }}
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                  </a>
                </Grid>

                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <a
                    href="https://www.instagram.com/the.mumbai.local/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#E1306C" }}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </Grid>

                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <a
                    href="https://www.linkedin.com/in/mumbai-local-263ab831a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0A66C2" }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              alt="MumbaiLocal-SHG"
              src={
                "http://kitintellect.tech/bmccompetition/MumbaiLocal-SHG.png_20240806073908"
              }
              className="footerSideImage"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        sx={{
          direction: "flex",
          justifyContent: "center",
          padding: "7px",
          bgcolor: "#a2a2a2",
        }}
      >
        <Typography
          style={{
            color: "#453D34",
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          Copyright © 2024 MumbaiLocal
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
