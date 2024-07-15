import React, { useState, useEffect } from "react";
import { Grid, Button, Modal, Box, Typography, TextField } from "@mui/material";
import img1 from "../Assets/Images/homepage1.jpg";
import img2 from "../Assets/Images/homepage2.jpg";
import ParticipationForm from "./Form/ParticipationForm"; // Import your ParticipationForm component here

const images = [img1, img2, img1, img2, img1, img2];
const intervalTime = 3000; // 3 seconds for autoplay

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  useEffect(() => {
    // Simulate checking if user is logged in (could be replaced with actual logic)
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true"); // Check localStorage or your authentication state
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogin = () => {
    // Implement your login logic here
    alert("Logging in...");
    localStorage.setItem("isLoggedIn", "true"); // Set isLoggedIn in localStorage or manage your authentication state
    setIsLoggedIn(true);
    handleCloseModal(); // Close the modal after successful login
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <img
            src={images[currentIndex]}
            alt={`Carousel ${currentIndex}`}
            className="carousel-img"
            style={{ width: "100%", maxHeight: "500px" }}
          />
        </Grid>
      </Grid>
      <div className="bullets">
        {images.map((_, index) => (
          <div
            key={index}
            className={`bullet ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      {isLoggedIn ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenModal}
          style={{ position: "relative", top: "-88px" }}
        >
          Click to Participate
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenModal}
          style={{
            position: "relative",
            top: "-84px",
            width: "14rem",
            backgroundColor: "#9C2946",
            fontWeight: "600",
            textTransform: "capitalize",
            borderRadius: "50px",
          }}
        >
          Login to Participate
        </Button>
      )}

      {/* Modal for Login or ParticipationForm */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="login-modal-title"
            variant="h6"
            component="h2"
            sx={{
              my: 2,
              color: "#9C2946",
              display: "block",
              fontWeight: "700",
              textTransform: "capitalize",
              fontSize: "20px",
            }}
          >
            {isLoggedIn ? "Participate" : "Login"}
          </Typography>
          {isLoggedIn ? (
            <ParticipationForm />
          ) : (
            <>
              <TextField
                id="mobile"
                label="mobile"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  style={{
                    width: "13rem",
                    marginTop: "10px",
                    backgroundColor: "#9C2946",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    borderRadius: "50px",
                  }}
                >
                  Login
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ImageCarousel;
