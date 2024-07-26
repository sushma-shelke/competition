
import React from "react";
import { Grid, Button, Box, ButtonGroup } from "@mui/material";
import ProductPost from "./ProductPost";
import { useCompitationContext } from "../../Context/CompitationContext";

const ProductGrid = () => {
  const { products, currentPage, setCurrentPage,setTotalPages, totalPages } = useCompitationContext();
// console.log(products?.length)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // setTotalPages(products?  .length);
  };

  console.log("Products:", products);
  console.log("Current Page:", currentPage);
  console.log("Total Pages:", totalPages);

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        {products?.length > 0 ? (
          products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={3}>
              <ProductPost product={product} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box textAlign="center">No products available</Box>
          </Grid>
        )}
      </Grid>
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={2}>
          <ButtonGroup style={{ width: '150px' }}>
            {[...Array(totalPages).keys()].map((page) => (
              <Button
                key={page + 1}
                onClick={() => handlePageChange(page + 1)}
                variant={currentPage === page + 1 ? 'contained' : 'outlined'}
                style={{
                  backgroundColor: currentPage === page + 1 ? '#FFE5EE' : 'transparent',
                  color: currentPage === page + 1 ? '#000' : '#000',
                  border: 'none',
                  margin: '0 4px',
                }}
              >
                {page + 1}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      )}
    </Box>
  );
};

export default ProductGrid;
