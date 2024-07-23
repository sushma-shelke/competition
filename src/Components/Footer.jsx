import React from "react";
import "./../footer.css";
import { Grid, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faGoodreads } from "@fortawesome/free-brands-svg-icons/faGoodreads";
import { FacebookRounded, Map } from "@mui/icons-material";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";

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
            <Grid item xs={4}>
              <Grid container xs={12} gap={1}>
                <Grid
                  item
                  xs={3}
                  sx={{ display: "grid", justifyContent: "right" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="40"
                    height="40"
                  >
                    <path
                      fill="#fff"
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    />
                  </svg>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    Find Us
                  </Typography>

                  <Typography
                    style={{
                      color: "#fff",
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
            <Grid item xs={4}>
              <Grid container xs={12} gap={1}>
                <Grid
                  item
                  xs={3}
                  sx={{ display: "grid", justifyContent: "right" }}
                >
                  <svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="38"
                    height="38"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    Call Us
                  </Typography>

                  <Typography
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    +91 84591 72859
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container xs={12} gap={1}>
                <Grid
                  item
                  xs={3}
                  sx={{ display: "grid", justifyContent: "right" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="38"
                    width="38"
                  >
                    <path
                      fill="#fff"
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    />
                  </svg>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    Mail Us
                  </Typography>

                  <Typography
                    style={{
                      color: "#fff",
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

        <Grid item container xs={12} md={6}>
          <Typography
            sx={{
              fontSize: "14px",
              paddingTop: "10px",
              paddingLeft: "3rem",
              textAlign: "left",
              color: "#fff",
            }}
          >
            Join the SHGeshop Competition with BMCs Mumbai Local and support
            local Self-Help Groups (SHGs) as they showcase their best products.
            Submit creations, vote, and recognize talent in various categories.
            Celebrate community craftsmanship, help SHGs gain recognition, and
            discover unique, high-quality products. Empower local entrepreneurs
            today!
          </Typography>
          <Typography
            sx={{
              fontSize: "19px",
              paddingLeft: "1rem",
              fontWeight: "900",
              textAlign: "left",
              paddingTop: "2.5rem",
              color: "#fff",
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
            <Grid item container xs={5}>
              <Grid
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
              </Grid>

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
                  href="https://instagram.com"
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
      </Grid>
      <Grid
        container
        xs={12}
        sx={{
          direction: "flex",
          justifyContent: "center",
          padding: "7px",
          bgcolor: "#4d1323",
        }}
      >
        <Typography
          style={{
            color: "#fff",
            fontSize: "15px",
          }}
        >
          Copyright © 2024 shgeshop
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
