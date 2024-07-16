// import { Button, Grid, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import { makeStyles } from "@mui/styles";
// const useStyles = makeStyles((theme) => ({
//   cardWrapper: {
//     maxWidth: 1100,
//     margin: "0 auto",
//     paddingTop: theme.spacing(4), // Adjust as needed
//     paddingBottom: theme.spacing(4), // Adjust as needed
//   },
//   productImgs: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   imgDisplay: {
//     overflow: "hidden",
//   },
//   imgShowcase: {
//     display: "flex",
//     width: "100%",
//     transition: "all 0.5s ease",
//   },
//   imgItem: {
//     margin: "0.3rem",
//   },
//   productContent: {
//     padding: theme.spacing(4), // Adjust as needed
//     [theme.breakpoints.up("sm")]: {
//       paddingTop: 0,
//     },
//   },
//   productTitle: {
//     fontSize: "3rem",
//     textTransform: "capitalize",
//     fontWeight: 700,
//     position: "relative",
//     color: "#12263a",
//     margin: "1rem 0",
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       left: 0,
//       bottom: 0,
//       height: "4px",
//       width: "80px",
//       background: "#12263a",
//     },
//   },
//   productLink: {
//     textDecoration: "none",
//     textTransform: "uppercase",
//     fontWeight: 400,
//     fontSize: "0.9rem",
//     display: "inline-block",
//     marginBottom: "0.5rem",
//     background: "#256eff",
//     color: "#256eff",
//     padding: "0 0.3rem",
//     transition: "all 0.5s ease",
//     "&:hover": {
//       opacity: 0.9,
//     },
//   },
//   productRating: {
//     color: "#ffc107",
//   },
//   productPrice: {
//     margin: "1rem 0",
//     fontSize: "1rem",
//     fontWeight: 700,
//     "& span": {
//       fontWeight: 400,
//     },
//   },
//   aboutTitle: {
//     textTransform: "capitalize",
//     color: "#12263a",
//     paddingBottom: "0.6rem",
//   },
//   purchaseInfo: {
//     margin: "1.5rem 0",
//     "& input, & .btn": {
//       border: "1.5px solid #ddd",
//       borderRadius: "25px",
//       textAlign: "center",
//       padding: "0.45rem 0.8rem",
//       outline: 0,
//       marginRight: "0.2rem",
//       marginBottom: "1rem",
//     },
//     "& input": {
//       width: "60px",
//     },
//     "& .btn": {
//       cursor: "pointer",
//       color: "#fefefe",
//     },
//     "& .btn:first-of-type": {
//       background: "#256eff",
//     },
//     "& .btn:last-of-type": {
//       background: "#f64749",
//     },
//     "& .btn:hover": {
//       opacity: 0.9,
//     },
//   },
//   socialLinks: {
//     display: "flex",
//     alignItems: "center",
//   },
//   shareText: {
//     fontSize: "0.9rem",
//   },
//   socialLink: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "32px",
//     height: "32px",
//     color: "#000",
//     border: "1px solid #000",
//     margin: "0 0.2rem",
//     borderRadius: "50%",
//     textDecoration: "none",
//     fontSize: "0.8rem",
//     transition: "all 0.5s ease",
//     "&:hover": {
//       background: "#000",
//       borderColor: "transparent",
//       color: "#fff",
//     },
//   },
// }));

// const ProductDetail = () => {
//   const classes = useStyles();
//   const [imgId, setImgId] = useState(1);

//   useEffect(() => {
//     const imgs = document.querySelectorAll(".img-select a");
//     imgs.forEach((imgItem) => {
//       imgItem.addEventListener("click", (event) => {
//         event.preventDefault();
//         setImgId(parseInt(imgItem.dataset.id));
//       });
//     });

//     const slideImage = () => {
//       const displayWidth = document.querySelector(
//         ".img-showcase img:first-child"
//       ).clientWidth;
//       document.querySelector(".img-showcase").style.transform = `translateX(${
//         -(imgId - 1) * displayWidth
//       }px)`;
//     };

//     window.addEventListener("resize", slideImage);
//     return () => {
//       window.removeEventListener("resize", slideImage);
//     };
//   }, [imgId]);

//   return (
//     <Grid container className={classes.cardWrapper}>
//       {/* Product Images Section */}
//       <Grid item xs={12} sm={6} lg={6} className={classes.productImgs}>
//         <div className="img-display">
//           <div className="img-showcase">
//             <img
//               src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
//               alt="shoe image"
//             />
//             <img
//               src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
//               alt="shoe image"
//             />
//             <img
//               src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
//               alt="shoe image"
//             />
//             <img
//               src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
//               alt="shoe image"
//             />
//           </div>
//         </div>
//         <div className="img-select">
//           <div className="img-item">
//             <a href="#" data-id="1">
//               <img
//                 src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
//                 alt="shoe image"
//               />
//             </a>
//           </div>
//           <div className="img-item">
//             <a href="#" data-id="2">
//               <img
//                 src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
//                 alt="shoe image"
//               />
//             </a>
//           </div>
//           <div className="img-item">
//             <a href="#" data-id="3">
//               <img
//                 src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
//                 alt="shoe image"
//               />
//             </a>
//           </div>
//           <div className="img-item">
//             <a href="#" data-id="4">
//               <img
//                 src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
//                 alt="shoe image"
//               />
//             </a>
//           </div>
//         </div>
//       </Grid>

//       {/* Product Details Section */}
//       <Grid item xs={12} sm={6} className={classes.productContent}>
//         <Typography variant="h2" className={classes.productTitle}>
//           nike shoes
//         </Typography>
//         <a href="#" className={classes.productLink}>
//           visit nike store
//         </a>
//         <div className={classes.productRating}>
//           <i className="fas fa-star"></i>
//           <i className="fas fa-star"></i>
//           <i className="fas fa-star"></i>
//           <i className="fas fa-star"></i>
//           <i className="fas fa-star-half-alt"></i>
//           <span>4.7(21)</span>
//         </div>

//         <div className={classes.productPrice}>
//           <p className="last-price">
//             Old Price: <span>$257.00</span>
//           </p>
//           <p className="new-price">
//             New Price: <span>$249.00 (5%)</span>
//           </p>
//         </div>

//         <div className="product-detail">
//           <Typography variant="h2" className={classes.aboutTitle}>
//             about this item:
//           </Typography>
//           <Typography variant="body1">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
//             eveniet veniam tempora fuga tenetur placeat sapiente architecto
//             illum soluta consequuntur, aspernatur quidem at sequi ipsa!
//           </Typography>
//           <Typography variant="body1">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
//           </Typography>
//           <ul>
//             <li>
//               Color: <span>Black</span>
//             </li>
//             <li>
//               Available: <span>in stock</span>
//             </li>
//             <li>
//               Category: <span>Shoes</span>
//             </li>
//             <li>
//               Shipping Area: <span>All over the world</span>
//             </li>
//             <li>
//               Shipping Fee: <span>Free</span>
//             </li>
//           </ul>
//         </div>

//         <div className="purchase-info">
//           <input type="number" min="0" defaultValue="1" />
//           <Button variant="contained" color="primary" className={classes.btn}>
//             Add to Cart <i className="fas fa-shopping-cart"></i>
//           </Button>
//           <Button variant="contained" color="secondary" className={classes.btn}>
//             Compare
//           </Button>
//         </div>

//         <div className="social-links">
//           <Typography variant="body1" className={classes.shareText}>
//             Share At:
//           </Typography>
//           <a href="#" className={classes.socialLink}>
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="#" className={classes.socialLink}>
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href="#" className={classes.socialLink}>
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="#" className={classes.socialLink}>
//             <i className="fab fa-whatsapp"></i>
//           </a>
//           <a href="#" className={classes.socialLink}>
//             <i className="fab fa-pinterest"></i>
//           </a>
//         </div>
//       </Grid>
//     </Grid>
//   );
// };

// export default ProductDetail;

import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import "../../../src/Card.css"; // Include this if you have a separate CSS file

const ProductDetail = () => {
  const [imgId, setImgId] = useState(1);

  useEffect(() => {
    const slideImage = () => {
      const displayWidth = document.querySelector(
        ".img-showcase img:first-child"
      ).clientWidth;
      document.querySelector(".img-showcase").style.transform = `translateX(${
        -(imgId - 1) * displayWidth
      }px)`;
    };

    window.addEventListener("resize", slideImage);
    slideImage();

    return () => {
      window.removeEventListener("resize", slideImage);
    };
  }, [imgId]);

  const handleImgClick = (event, id) => {
    event.preventDefault();
    setImgId(id);
  };

  const handleVote = () => {
    setVotes(votes + 1);
    // You can add any logic here to save the vote to a backend, if needed.
  };

  const styles = {
    title: {
      fontSize: 30,
      marginBottom: 20,
      textAlign: "center",
      color: "#006400",
      fontWeight: "bold",
    },
  };
  const product = {
    _id: "6690e59f9916db1450923ea6",
    shgname: "testafterupdaet",
    product_name: "Wooden Toy",
    product_shortdescription: "A handcrafted wooden toy safe for children.",
    participating_persons_mobilenumber: "7070707070",
    product_weight: 700,
    product_length: 15,
    product_width: 10,
    product_colour: "Natural Wood",
    product_price: 800,
    product_category: "668e8a9b83e2da672181fddf",
    votecount: 0,
  };
  const [votes, setVotes] = useState(product.votecount);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={11}>
        <div className="card-wrapper">
          <div className="card">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                    alt="shoe image"
                  />
                </div>
              </div>
              <div className="img-select">
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
              </div>
            </div>
            <div className="product-content">
              <h2 className="product-title"> {product.product_name}</h2>
              <div className="product-price">
                <p className="new-price">
                  Price: <span>{product.product_price} ₹</span>
                </p>
              </div>

              <div className="product-detail">
                <h2>About this item: </h2>
                <p>{product.product_shortdescription}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, perferendis eius. Dignissimos, labore suscipit.
                  Unde.
                </p>
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
                  <li>
                    To Purchase - Contact Here:{" "}
                    <span>{product.participating_persons_mobilenumber}</span>
                  </li>
                </ul>
              </div>

              <Grid Container lg={12} sx={{ display: "flex" }}>
                <Grid lg={6}>
                  <Typography variant="body1">
                    Total Votes: {product.votecount}
                  </Typography>
                </Grid>
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
                    }}
                  >
                    Vote this product <i className="fas fa-thumbs-up"></i>
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
