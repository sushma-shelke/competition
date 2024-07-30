import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCompitationContext } from '../../Context/CompitationContext';
import { Grid, Button, ButtonGroup, Box } from '@mui/material';
import ProductPost from './ProductPost';
import ImageCarousel from '../ImageCarousel';
import ProductMainCategory from './ProductMainCategory';

const CategoryDetail = () => {
  const { name } = useParams();
  const {
    categoryProduct,
    currentPage,
    setCurrentPage,
    totalPages,
    getProductByCayegoryIdpagination,
    setPid,
  } = useCompitationContext();

  useEffect(() => {
    if (name) {
      setPid(name);
        }
  }, [name, currentPage, setPid]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

 
  return (
    <>
      <ImageCarousel />
      <ProductMainCategory/>
      <div style={{ marginTop: '16px' }}>
        <Grid container spacing={2} justifyContent="center">
          {Array.isArray(categoryProduct) &&
            categoryProduct.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <ProductPost product={product} />
              </Grid>
            ))}
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
      </div>
    </>
  );
};

export default CategoryDetail;

