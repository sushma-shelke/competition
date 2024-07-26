import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, IconButton } from "@mui/material";
import "../../../src/Card.css";
import { useParams } from "react-router-dom";
import { useCompitationContext } from "../../Context/CompitationContext";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const { getProductById ,giveVote} = useCompitationContext();

  // get data form session storage
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

    useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(id);
      setProduct(fetchedProduct);
      setSelectedImage(fetchedProduct?.product_photo);
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
  const handleShare = () => {
    const productUrl = `http://mumbailocal.org:8080/getproductbyid/${product._Id}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=Check out this product and vote: ${product.product_name}. ${product.product_shortdescription}.Link:${productUrl}`;
    window.open(whatsappUrl, "_blank");
  };
  const voteData = {
    userid:user?.id,
    productid: product?._Id,
    categoryid: product?.product_category
  };
  
  const handleVote =()=>{
    giveVote(voteData);
    }
  return (
    <Grid container spacing={2} sx={{ padding: 2 }} class="mobileViewMargin">
      <Grid item xs={12}>
        <Typography
          className="product-title"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {product?.product_name}
        </Typography>
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={2} md={6} xs={12} className="imageClassMobile">
          <div
            className="img-select"
            // style={{
            //   // display: "flex",
            //   // flexDirection: "column",
            //   // overflowX: "auto",
            //   // whiteSpace: "nowrap",
            // }}
          >
            {product?.product_photo_gallery?.map((photo, index) => (
              <div
                className="img-item"
                key={index}
                style={{ marginBottom: "8px" }}
              >
                <a
                  href="#"
                  data-id={index}
                  onClick={(e) => handleImgClick(e, photo)}
                >
                  <img
                    src={photo}
                    alt={`Product gallery ${index}`}
                    className="productGallery"
                    // style={{
                    //   width: "50%",
                    //   height: "50%",
                    //   border: "1px solid #ccc",
                    //   borderRadius: 10,
                    // }}
                  />
                </a>
              </div>
            ))}
          </div>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img
                  src={selectedImage}
                  alt="Selected product"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={5} md={6} xs={12} sx={{ marginY: 5 }}>
          <div
            className="product-content"
            style={{ textAlign: "left", lineHeight: "2" }}
          >
            <Typography variant="h6">
              Price: <span>{product.product_price} ₹</span>
            </Typography>
            <Typography variant="h6">About this item:</Typography>
            <Typography variant="body1">
              {product.product_shortdescription}
            </Typography>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
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
            <Grid container spacing={2} sx={{ marginTop: "5rem" }}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Button
                  type="button"
                  className="btn"
                  style={{
                    width: "100%",
                    backgroundColor: "#9C2946",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    borderRadius: "50px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    boxShadow: "4px 6px 10px 0px grey",
                    color: "#fff",
                   
                  }}
                  onClick={handleVote}
                >
                  <FavoriteIcon />
                  Vote this product
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <IconButton
                  color="default"
                  onClick={handleShare}
                  style={{
                    width: "100%",
                    backgroundColor: "#9C2946",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    borderRadius: "50px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    boxShadow: "4px 6px 10px 0px grey",
                    color: "#fff",
                  }}
                >
                  <ShareIcon />
                  Share this product
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
