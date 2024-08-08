
// import React, { useState } from "react";
// import TopVotedProduct from "./TopVotedProduct";
// import Grid from "@mui/material/Grid";
// import { useCompitationContext } from "../../Context/CompitationContext";
// import { Typography, useMediaQuery, Button, Box } from "@mui/material";
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

// const TopVotedProductGrid = () => {
//   const isMobile = useMediaQuery("(max-width: 600px)"); // Mobile view
//   const { topVoted } = useCompitationContext();
  
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;
  
//   const handleNext = () => {
//     if (currentPage < Math.ceil(topVoted.length / itemsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const indexOfLastProduct = currentPage * itemsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//   const currentProducts = topVoted.slice(indexOfFirstProduct, indexOfLastProduct);

//   return (
//     <>
//       {topVoted.length > 0 ? (
//         <>
//           <Typography
//             gutterBottom
//             sx={{
//               textAlign: "center",
//               mt: 4,
//               fontWeight: 700,
//               color: "#6f1c32",
//               backgroundColor: "#E8E8E8",
//               paddingTop: "40px",
//               fontSize: isMobile ? "1.5rem" : "2.125rem",
//             }}
//           >
//             Top Voted Products
//           </Typography>

//           <Grid
//             container
//             spacing={2}
//             sx={{
//               justifyContent: "center",
//               backgroundColor: "#E8E8E8",
//               paddingBottom: "40px",
//             }}
//           >
//              <Button
//               onClick={handlePrevious}
//               disabled={currentPage === 1}
//               variant="contained"
//               sx={{ mr: 1 ,float:'right',verticalAlign:'center'}}
//             >
//               <ArrowBackIosNewOutlinedIcon/>
             
//             </Button>
//             <Button
//               onClick={handleNext}
//               disabled={currentPage >= Math.ceil(topVoted.length / itemsPerPage)}
//               variant="contained"
//               sx={{ mr: 1 ,float:'left'}}
//             >
//               <ArrowForwardIosOutlinedIcon/>
              
//             </Button>
//             {currentProducts.map((product) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={product._Id}>
//                 <TopVotedProduct product={product} />
//               </Grid>
//             ))}
            
//           </Grid>

         
//         </>
//       ) : (
//         <Typography>No products available</Typography>
//       )}
//     </>
//   );
// };

// export default TopVotedProductGrid;




import React, { useState } from "react";
import TopVotedProduct from "./TopVotedProduct";
import Grid from "@mui/material/Grid";
import { useCompitationContext } from "../../Context/CompitationContext";
import { Typography, useMediaQuery, Button, Box } from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const TopVotedProductGrid = () => {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Mobile view
  const { topVoted } = useCompitationContext();
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  
  const handleNext = () => {
    if (currentPage < Math.ceil(topVoted.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = topVoted.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      {topVoted.length > 0 ? (
        <>
          <Typography
            gutterBottom
            sx={{
              textAlign: "center",
              mt: 4,
              fontWeight: 700,
              color: "#6f1c32",
              backgroundColor: "#E8E8E8",
              paddingTop: "40px",
              fontSize: isMobile ? "1.5rem" : "2.125rem",
            }}
          >
            Top Voted Products
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E8E8E8",
              paddingBottom: "40px",
            }}
          >
            <Button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              // variant="contained"
              sx={{
                position: "absolute",
                left: "10px",
                transform: "translateY(-50%)",
                top: "50%",
              }}
            >
              <ArrowBackIosNewOutlinedIcon  sx={{color:"#9B2A47",fontSize:'60px'}}/>
            </Button>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {currentProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product._Id}>
                  <TopVotedProduct product={product} />
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={handleNext}
              disabled={currentPage >= Math.ceil(topVoted.length / itemsPerPage)}
              // variant="contained"
              sx={{
                position: "absolute",
                right: "10px",
                transform: "translateY(-50%)",
                backgroundColor:'transparent ',
                top: "50%",
              }}
            >
              <ArrowForwardIosOutlinedIcon sx={{color:"#9B2A47" ,fontSize:'60px'}} />
            </Button>
          </Box>
        </>
      ) : (
        <Typography>No products available</Typography>
      )}
    </>
  );
};

export default TopVotedProductGrid;
