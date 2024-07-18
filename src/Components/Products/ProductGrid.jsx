import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductPost from "./ProductPost";

import { useCompitationContext } from "../../Context/CompitationContext";
import HandcraftedWoodenBowl from "../../Assets/Images/HandcraftedWoodenBowl.jpeg";
import toeabag from "../../Assets/Images/Handcrafted-Tote-bag.jpeg";
import { ListAllApi } from "../../Api/ListAllApi";

const ProductGrid = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ListAllApi.getProduct();
        console.log("data", response?.result?.data);
        setProducts(response?.result?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <Grid container spacing={2} justifyContent="center">
      {products &&
        products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={3}>
            <ProductPost product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductGrid;
