import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import "../../../src/Card.css"; 
import { useParams } from "react-router-dom";
import { ListAllApi } from "../../Api/ListAllApi";

const ProductDetail = () => {
  const { id } = useParams();
      const [product, setProduct] = useState(null); 
  
    useEffect(() => {
            const fetchProduct = async () => {
        try {
          const response = await ListAllApi.getProductById(id);
                   setProduct(response?.result);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    if (!product) {
      return <div>Loading...</div>; 
    }
  
  
 
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={11}>
        <div className="card-wrapper">
          <div className="card">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                {product?.product_photo_gallery?.map((photo, index) => (
                    <img key={index} src={photo} alt={`Product ${index + 1}`} />
                  ))}
                </div>
              </div>
              {/* <div className="img-select">
                <div className="img-item">
                  <a href="#" data-id="1" onClick={(e) => handleImgClick(e, 1)}>
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="2" onClick={(e) => handleImgClick(e, 2)}>
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="3" onClick={(e) => handleImgClick(e, 3)}>
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="4" onClick={(e) => handleImgClick(e, 4)}>
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                      alt="shoe image"
                    />
                  </a>
                </div>
              </div> */}
            </div>
            <div className="product-content">
              <h2 className="product-title"> {product?.product_name}</h2>
              <div className="product-price">
                <p className="new-price">
                  Price: <span>{product.product_price} ₹</span>
                </p>
              </div>
              <div className="product-detail">
                <h2>About this item: </h2>
                <p>{product.product_shortdescription}</p>
                               <ul>
                  <li>
                    Category: <span>{product.product_category}</span>
                  </li>
                  <li>
                    Color: <span>{product.product_colour}</span>
                  </li>
                  <li>
                    Weight: <span>{product.product_weight}</span>
                  </li>
                  <li>
                    Length: <span>{product.product_lenght}</span>
                  </li>
                  <li>
                    Width: <span>{product.product_width}</span>
                  </li>
                  <li>
                    Self Help Group Name: <span>{product.shgname}</span>
                  </li>
                  
                </ul>
              </div>
              <Grid Container lg={12} sx={{ display: "flex" }}>
               
                <Grid lg={6}>
                  <Button
                    type="button"
                    className="btn"
                    style={{
                      position: "relative",
                      width: "100%",
                      backgroundColor: "#9C2946",
                      fontWeight: "600",
                      textTransform: "capitalize",
                      borderRadius: "50px",
                      padding: " 30px",
                      fontSize: "16px",
                      boxShadow: "4px 6px 10px 0px grey",
                      color: '#fff'
                    }}
                  >
                    Vote this product 
                    {/* <i className="fas fa-thumbs-up"></i> */}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;

