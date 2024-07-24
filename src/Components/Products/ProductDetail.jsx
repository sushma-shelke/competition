// import React, { useEffect, useState } from "react";
// import { Button, Grid, Typography } from "@mui/material";
// import "../../../src/Card.css";
// import { useParams } from "react-router-dom";
// import { useCompitationContext } from "../../Context/CompitationContext";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { getProductById } = useCompitationContext();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const fetchedProduct = await getProductById(id);
//       setProduct(fetchedProduct);
//     };

//     fetchProduct();
//   }, [id, getProductById]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }
//   console.log(product?.product_photo_gallery,"gallry");
//   console.log(product?.product_photo,"photo");

//   return (
//     <Grid container spacing={2}  >
//       <Grid item xs={12} md={12} lg={11}>
//         <div className="card-wrapper">
//           <div className="card">
//             <div className="product-imgs">
//               <div className="img-display">
//                 <div className="img-showcase">
//                   {/* {product?.product_photo_gallery?.map((photo, index) => ( */}
//                     <img src={product?.product_photo}  />
//                   {/* ))} */}
//                 </div>
//               </div>
//               <div className="img-select">
//                 <div className="img-item">
//                   <a href="#" data-id="1" onClick={(e) => handleImgClick(e, 1)}>
//                     <img
//                       src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
//                       alt="shoe image"
//                     />
//                   </a>
//                 </div>
//                              </div>
//             </div>
//             <div className="product-content">
//               <h2 className="product-title"> {product?.product_name}</h2>
//               <div className="product-price">
//                 <p className="new-price">
//                   Price: <span>{product.product_price} ₹</span>
//                 </p>
//               </div>
//               <div className="product-detail">
//                 <h2>About this item: </h2>
//                 <p>{product.product_shortdescription}</p>
//                 <ul>
//                   <li>
//                     Category: <span>{product.product_category}</span>
//                   </li>
//                   <li>
//                     Color: <span>{product.product_colour}</span>
//                   </li>
//                   <li>
//                     Weight: <span>{product.product_weight}</span>
//                   </li>
//                   <li>
//                     Length: <span>{product.product_lenght}</span>
//                   </li>
//                   <li>
//                     Width: <span>{product.product_width}</span>
//                   </li>
//                   <li>
//                     Self Help Group Name: <span>{product.shgname}</span>
//                   </li>
//                 </ul>
//               </div>
//               <Grid Container lg={12} sx={{ display: "flex" }}>
//                 <Grid lg={6}>
//                   <Button
//                     type="button"
//                     className="btn"
//                     style={{
//                       position: "relative",
//                       width: "100%",
//                       backgroundColor: "#9C2946",
//                       fontWeight: "600",
//                       textTransform: "capitalize",
//                       borderRadius: "50px",
//                       padding: " 30px",
//                       fontSize: "16px",
//                       boxShadow: "4px 6px 10px 0px grey",

//                       color: "#fff",
//                     }}
//                   >
//                     Vote this product
//                     {/* <i className="fas fa-thumbs-up"></i> */}
//                   </Button>
//                 </Grid>
//               </Grid>
//             </div>
//           </div>
//         </div>
//       </Grid>
//     </Grid>
//   );
// };

// export default ProductDetail;


import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import "../../../src/Card.css";
import { useParams } from "react-router-dom";
import { useCompitationContext } from "../../Context/CompitationContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const { getProductById } = useCompitationContext();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(id);
      setProduct(fetchedProduct);
      setSelectedImage(fetchedProduct?.product_photo); // Set initial selected image
    };

    fetchProduct();
  }, [id, getProductById]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleImgClick = (e, photo) => {
    e.preventDefault();
    setSelectedImage(photo);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={11}>
        <div className="card-wrapper">
          <div className="card">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img src={selectedImage} alt="Selected product" />
                </div>
              </div>
            
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
                    Length: <span>{product.product_length}</span>
                  </li>
                  <li>
                    Width: <span>{product.product_width}</span>
                  </li>
                  <li>
                    Self Help Group Name: <span>{product.shgname}</span>
                  </li>
                </ul>
              </div>
              <Grid container lg={12} sx={{ display: "flex" }}>
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
                      color: "#fff",
                    }}
                  >
                    Vote this product
                  </Button>
                </Grid>
              </Grid>
              <div className="img-select">
                {product?.product_photo_gallery?.map((photo, index) => (
                  <div className="img-item" key={index}>
                    <a href="#" data-id={index} onClick={(e) => handleImgClick(e, photo)}>
                      <img src={photo} alt={`Product gallery ${index}`} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
