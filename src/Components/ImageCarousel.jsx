// import React, { useState } from "react";
// import { Grid, IconButton } from "@mui/material";
// import { ArrowBack, ArrowForward } from "@mui/icons-material";
// import img1 from "../Assets/Images/homepage1.jpg";
// import img2 from "../Assets/Images/homepage2.jpg";
// const images = [img1, img2];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <Grid container spacing={2} justifyContent="center" alignItems="center">
//       <Grid item>
//         <IconButton onClick={handlePrev}>
//           <ArrowBack />
//         </IconButton>
//       </Grid>
//       <Grid item>
//         <img
//           src={images[currentIndex]}
//           alt={`Carousel ${currentIndex}`}
//           style={{ width: "100%", maxHeight: "500px" }}
//         />
//       </Grid>
//       <Grid item>
//         <IconButton onClick={handleNext}>
//           <ArrowForward />
//         </IconButton>
//       </Grid>
//     </Grid>
//   );
// };

// export default ImageCarousel;
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import img1 from "../Assets/Images/homepage1.jpg";
import img2 from "../Assets/Images/homepage2.jpg";

const images = [img1, img2, img1, img2, img1, img2];
const intervalTime = 3000; // 3 seconds for autoplay

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

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
    </>
  );
};

export default ImageCarousel;
