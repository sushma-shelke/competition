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
                      color: "#ffffff",
                    }}
                  >
                    Vote this product
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
