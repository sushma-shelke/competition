import React from "react";
import "./../footer.css";
import { Grid, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Box className="footer-banner">
      <Grid container spacing={2} className="footer-content">
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Join the SHGeshop Competition with BMC's Mumbai Local and support
            local Self-Help Groups (SHGs) as they showcase their best products.
            Submit creations, vote, and recognize talent in various categories.
            Celebrate community craftsmanship, help SHGs gain recognition, and
            discover unique, high-quality products. Empower local entrepreneurs
            today!
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1DA1F2" }}
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <br />
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1877F2" }}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <br />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E1306C" }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <br />
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0A66C2" }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* This column is intentionally left empty */}
        </Grid>
      </Grid>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        className="footer-waves-svg"
      >
        <defs>
          <path
            id="footer-gentle-wave"
            d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18 
            58-18 88-18 
            58 18 88 18
            v44h-352z"
          />
        </defs>
        <g className="footer-waves">
          <use
            xlinkHref="#footer-gentle-wave"
            x="50"
            y="0"
            fill="#499972"
            fillOpacity=".7"
          />
          <use
            xlinkHref="#footer-gentle-wave"
            x="50"
            y="0"
            fill="#03ffff"
            fillOpacity=".7"
          />
          <use
            xlinkHref="#footer-gentle-wave"
            x="50"
            y="3"
            fill="#245068"
            fillOpacity=".8"
          />
          <use
            xlinkHref="#footer-gentle-wave"
            x="50"
            y="6"
            fill="url(#gradient)"
            fillOpacity=".9"
          />
        </g>
      </svg>
    </Box>
  );
};

export default Footer;
