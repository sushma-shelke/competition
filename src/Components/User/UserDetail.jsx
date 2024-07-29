import React, { useEffect, useState, useContext } from "react";
import { Avatar, Typography, Grid, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import userIcon from "../../Assets/Images/usericon.jpeg";
import ProductPost from "../Products/ProductPost";
import { useCompitationContext } from "../../Context/CompitationContext";
import { ListAllApi } from "../../Api/ListAllApi";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const [votedProducts, setVotedProducts] = useState([]);
  const { getProductById } = useCompitationContext(); // Ensure you call the function
  const navigate = useNavigate();

  const gotoVote = () => {
    navigate("/products");
  };

  const gotoForm = () => {
    navigate("/participationform");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const fetchVotedProducts = async () => {
      if (user?.productVotes) {
        const productDetails = await Promise.all(
          user.productVotes.map(async (vote) => {
            const product = await ListAllApi.getProductById(vote.productid);
            return product;
          })
        );
        setVotedProducts(productDetails);
      }
    };

    fetchVotedProducts();
  }, [user, getProductById]);

  return (
    <>
      <Grid
        xs={12}
        style={{
          background: "linear-gradient(to right, #FF4485, #FE8A77)",
          height: "400px",
        }}
      ></Grid>

      <Container>
        <Profile>
          <CenteredAvatar src={userIcon} alt="User Icon" />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#666666" }}
          >
            {user?.mobileNumber}
          </Typography>
        </Profile>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#666666" }}>
          * Your Product *
        </Typography>
        {user?.registeredProduct === null ? (
          <Button
            sx={{
              color: "white",
              backgroundColor: "#9C2946",
              fontWeight: "800",
              width: "14rem",
              borderRadius: "50px",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
            onClick={gotoForm}
          >
            Register Product
          </Button>
        ) : (
          <>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={6}>
                {user?.registeredProduct &&
                  user.registeredProduct.length > 0 && (
                    <img
                      src={user.registeredProduct[0].product_photo}
                      alt="Product"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "500px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#666666",
                      textTransform: "capitalize",
                    }}
                  >
                    <span>{user?.registeredProduct[0]?.product_name} </span>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#666666",
                    }}
                  >
                    Price:
                    <span>{user?.registeredProduct[0]?.product_price} ₹</span>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#666666",
                    }}
                  >
                    About this item:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#666666",
                    }}
                  >
                    {user?.registeredProduct[0]?.product_shortdescription}
                  </Typography>
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                      lineHeight: "1.6",
                      fontWeight: "bold",
                      color: "#666666",
                    }}
                  >
                    <li>
                      Category:{" "}
                      <span>
                        {user?.registeredProduct[0]?.product_category}
                      </span>
                    </li>
                    <li>
                      Color:{" "}
                      <span>{user?.registeredProduct[0]?.product_colour}</span>
                    </li>
                    <li>
                      Weight:{" "}
                      <span>{user?.registeredProduct[0]?.product_weight}</span>
                    </li>
                    <li>
                      Length:{" "}
                      <span>{user?.registeredProduct[0]?.product_length}</span>
                    </li>
                    <li>
                      Width:{" "}
                      <span>{user?.registeredProduct[0]?.product_width}</span>
                    </li>
                    <li>
                      Self Help Group Name:{" "}
                      <span>{user?.registeredProduct[0]?.shgname}</span>
                    </li>
                  </ul>
                  <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {user?.registeredProduct &&
                      user?.registeredProduct.length > 0 && (
                        <>
                          <Grid item xs={12} sm={6} md={4}>
                            <img
                              src={user?.registeredProduct[0]?.product_photo}
                              alt="Main Product"
                              style={{
                                width: "100%",
                                height: "180px",
                                borderRadius: "10px",
                              }}
                            />
                          </Grid>
                          {user?.registeredProduct[0]?.product_photo_gallery.map(
                            (photo, index) => (
                              <Grid item xs={12} sm={6} md={4} key={index}>
                                <img
                                  src={photo}
                                  alt={`Gallery Photo ${index + 1}`}
                                  style={{
                                    width: "100%",
                                    height: "180px",
                                    borderRadius: "10px",
                                  }}
                                />
                              </Grid>
                            )
                          )}
                        </>
                      )}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#666666", marginTop: 4 }}
            >
              Products you voted for...
            </Typography>
            <Grid container spacing={2}>
              {votedProducts &&
                votedProducts.map((product) => (
                  <Grid
                    item
                    key={product._id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <ProductPost product={product} />
                  </Grid>
                ))}
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={6}>
                {user?.registeredProduct &&
                  user.registeredProduct.length > 0 && (
                    <img
                      src={user.registeredProduct[0].product_photo}
                      alt="Product"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "500px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#666666",
                      textTransform: "capitalize",
                    }}
                  >
                    <span>{user?.registeredProduct[0]?.product_name} </span>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#666666",
                    }}
                  >
                    Price:{" "}
                    <span>{user?.registeredProduct[0]?.product_price} ₹</span>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#666666",
                    }}
                  >
                    About this item:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#666666",
                    }}
                  >
                    {user?.registeredProduct[0]?.product_shortdescription}
                  </Typography>
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                      lineHeight: "1.6",
                      fontWeight: "bold",
                      color: "#666666",
                    }}
                  >
                    <li>
                      Category:{" "}
                      <span>
                        {user?.registeredProduct[0]?.product_category}
                      </span>
                    </li>
                    <li>
                      Color:{" "}
                      <span>{user?.registeredProduct[0]?.product_colour}</span>
                    </li>
                    <li>
                      Weight:{" "}
                      <span>{user?.registeredProduct[0]?.product_weight}</span>
                    </li>
                    <li>
                      Length:{" "}
                      <span>{user?.registeredProduct[0]?.product_length}</span>
                    </li>
                    <li>
                      Width:{" "}
                      <span>{user?.registeredProduct[0]?.product_width}</span>
                    </li>
                    <li>
                      Self Help Group Name:{" "}
                      <span>{user?.registeredProduct[0]?.shgname}</span>
                    </li>
                  </ul>
                  <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {user?.registeredProduct &&
                      user?.registeredProduct.length > 0 && (
                        <>
                          <Grid item xs={12} sm={6} md={4}>
                            <img
                              src={user?.registeredProduct[0]?.product_photo}
                              alt="Main Product"
                              style={{
                                width: "100%",
                                height: "180px",
                                borderRadius: "10px",
                              }}
                            />
                          </Grid>
                          {user?.registeredProduct[0]?.product_photo_gallery.map(
                            (photo, index) => (
                              <Grid item xs={12} sm={6} md={4} key={index}>
                                <img
                                  src={photo}
                                  alt={`Gallery Photo ${index + 1}`}
                                  style={{
                                    width: "100%",
                                    height: "180px",
                                    borderRadius: "10px",
                                  }}
                                />
                              </Grid>
                            )
                          )}
                        </>
                      )}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </>
        )}

        {user?.productVotes === null ? (
          <>
            <Grid xs={12} sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#666666", marginTop: 4 }}
              >
                Products you voted for...
              </Typography>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#9C2946",
                  fontWeight: "800",
                  width: "14rem",
                  borderRadius: "50px",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                onClick={gotoVote}
              >
                Vote For Products
              </Button>
            </Grid>
          </>
        ) : (
          <>
            <Grid xs={12} sx={{ marginTop: "5rem" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#666666", marginTop: 4 }}
              >
                Products you voted for...
              </Typography>
              <Grid container spacing={2}>
                {votedProducts &&
                  votedProducts.map((product) => (
                    <Grid
                      item
                      key={product._id}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <ProductPost product={product} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default UserDetail;

// Styled components
const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  marginTop: "-309px",
  padding: "20px",
  backgroundColor: "#fff",
  //   backgroundColor: "#FDE6DD",

  borderRadius: "30px",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
}));

const Profile = styled(Box)(({ theme }) => ({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const CenteredAvatar = styled(Avatar)(({ theme }) => ({
  width: 130,
  height: 130,
  marginTop: "-100px",
  marginBottom: "20px",
  boxShadow: "0 0 20px rgba(0, 0, 0, 40%)",
}));
