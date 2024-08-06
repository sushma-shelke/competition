

// import React from "react";
// import { Grid, Button, Box, ButtonGroup,Typography, useMediaQuery  } from "@mui/material";

// import ProductPost from "./ProductPost";
// import { useCompitationContext } from "../../Context/CompitationContext";

// const ProductGrid = () => {

//   const { products, currentPage, setCurrentPage,setTotalPages, totalPages } = useCompitationContext();
//   const isMobile = useMediaQuery("(max-width: 600px)"); // Mobile view
//   const isTablet = useMediaQuery("(max-width: 960px)"); // Tablet view
// // console.log(products?.length)
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     // setTotalPages(products?  .length);
//   };

//   console.log("Products:", products);
//   console.log("Current Page:", currentPage);
//   console.log("Total Pages:", totalPages);

//   return (
//     <>
//      <Typography
//         variant="h4"
//         gutterBottom
//         sx={{
//           textAlign: "center",
//           fontWeight: 700,
//           color: "#6f1c32",
//           fontSize: isMobile ? "1.5rem" : "2.125rem", // Adjust font size based on screen size
//         }}
//       >
//         Participating Products
//       </Typography>
//     <Box>
//                  <Grid container spacing={1} justifyContent="center">
//         {products &&
//           products.map((product) => (
//             <Grid
//               item
//               key={product._id}
//               xs={6} // 2 cards per row on mobile
//               sm={6} // 2 cards per row on larger mobile devices
//               md={4} // 3 cards per row on tablets
//               lg={3} // 4 cards per row on desktop
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <ProductPost product={product} />
//             </Grid>
//           ))}
//       </Grid>
//       {totalPages > 1 && (
//         <Box display="flex" justifyContent="center" mt={2}>
//           <ButtonGroup style={{ width: '150px' }}>
//             {[...Array(totalPages).keys()].map((page) => (
//               <Button
//                 key={page + 1}
//                 onClick={() => handlePageChange(page + 1)}
//                 variant={currentPage === page + 1 ? 'contained' : 'outlined'}
//                 style={{
//                   backgroundColor: currentPage === page + 1 ? '#FFE5EE' : 'transparent',
//                   color: currentPage === page + 1 ? '#000' : '#000',
//                   border: 'none',
//                   margin: '0 4px',
//                 }}
//               >
//                 {page + 1}
//               </Button>
//             ))}
//           </ButtonGroup>
//         </Box>
//       )}
//     </Box>
// </>

//   );
// };

// export default ProductGrid;



import React from "react";
import { Grid, Button, Box, ButtonGroup, Typography, useMediaQuery } from "@mui/material";
import ProductPost from "./ProductPost";
import { useCompitationContext } from "../../Context/CompitationContext";

const ProductGrid = () => {
  const { products, currentPage, setCurrentPage, totalPages } = useCompitationContext();
  const isMobile = useMediaQuery("(max-width: 600px)"); // Mobile view
 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: "#6f1c32",
          fontSize: isMobile ? "1.5rem" : "2.125rem", // Adjust font size based on screen size
        }}
      >
        Participating Products
      </Typography>
      <Box>
        <Grid container spacing={1} justifyContent="center">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <Grid
                item
                key={product._id}
                xs={6} // 2 cards per row on mobile
                sm={6} // 2 cards per row on larger mobile devices
                md={4} // 3 cards per row on tablets
                lg={3} // 4 cards per row on desktop
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ProductPost product={product} />
              </Grid>
            ))
          ) : (
            <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "#9c2946" }}
          >
              No products available.
            </Typography>
          )}
        </Grid>
        {totalPages > 1 && (
          <Box display="flex" justifyContent="center" mt={2}>
            <ButtonGroup style={{ width: "150px" }}>
              {[...Array(totalPages).keys()].map((page) => (
                <Button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  variant={currentPage === page + 1 ? "contained" : "outlined"}
                  style={{
                    backgroundColor: currentPage === page + 1 ? "#FFE5EE" : "transparent",
                    color: "#000",
                    border: "none",
                    margin: "0 4px",
                  }}
                >
                  {page + 1}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProductGrid;
