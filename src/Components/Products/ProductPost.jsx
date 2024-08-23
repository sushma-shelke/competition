import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import { useCompitationContext } from "../../Context/CompitationContext";
import wretch from "wretch";
import { Helmet } from "react-helmet";

const ProductPost = ({ product }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [liked, setLiked] = useState(false);
  const { giveVote, removeVote, registerOrLoginUser } = useCompitationContext();

  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userId = JSON.parse(storedUser).id;
           wretch(`https://mumbailocal.org:8080/users/${userId}`)
        .get()
        .json((data) => {
           setUser(data.data);

          const isProductLiked = data.data.productVotes?.some(
            (vote) => vote.productid === product._Id
          );
          setLiked(isProductLiked);
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [product._Id]);

  const votedata = {
    userid: user?.id,
    productid: product?._Id,
    categoryid: product?.product_category,
  };

  const handleLike =async () => {
    if (!user) {
      setOpenModal(true);
      return;
    }

 
    if (liked) {
      const voteRemoved = await removeVote(votedata);
      if (voteRemoved) {
        setLiked(false);
      }
    } else {
      const voteSuccessful = await giveVote(votedata);
      if (voteSuccessful) {
        setLiked(true);
      }
    }
    // setLiked(async (prevLiked) => {
    //   if (prevLiked) {
    //     await removeVote(votedata);
    //     return false;
    //   } else {
    //     const voteSuccessful = await giveVote(votedata);
    //     return voteSuccessful;
    //   }
    // });
  };

        const handleShare = () => {
        const productUrl = `https://mumbailocal.org/competition/product/${product._Id ? product._Id : product?.result?._Id}`;  // Ensure that the product's ID is correctly accessed
        const productName = encodeURIComponent( product?.product_name
          ? product?.product_name
          : product?.result?.product_name); // Encode the product name to handle special characters
        const shgName = encodeURIComponent( product?.shgname ? product?.shgname : product?.result?.shgname); // Encode SHG name as well
        const message = `Check out this product and vote: ${productName}. ${shgName}. Link: ${productUrl}`;
        
        const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };
    
      const productData = product?.result?._id
          ? product?.result?._id
          : product?.result?._Id;
        
          const handleProductSelect = () => {
          navigate(`/product/${product?._Id ? product?._Id : productData}`);
        };


  const sortdesc =
    product?.product_shortdescription ??
    product?.result?.product_shortdescription ??
    "";
  const desc =
    sortdesc.length > 30 ? sortdesc.substring(0, 30) + "..." : sortdesc;

  const handleLogin = async () => {
    if (mobileNumber.length !== 10) {
      setErrorMessage("Mobile number must be 10 digits long.");
      return;
    }
    const result = await registerOrLoginUser(mobileNumber);
    if (result) {
      setOpenModal(false);
      setErrorMessage("");
      setUser(result);

      const isProductLiked = result.productVotes?.some(
        (vote) => vote.productid === product._id
      );
      setLiked(isProductLiked);
    } else {
      alert("Failed to login/register.");
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setErrorMessage("");
  };

  return (
    <>
      <Helmet>
                <title>{product?.product_name}</title>
                <meta property="og:title" content={`${product?.product_name}`} />
                <meta property="og:description" content={`${product?.product_shortdescription}`} />
                {/* <meta property="og:image" content={product?.product_photo} /> */}
                <meta property="og:image" content="https://kitintellect.tech/bmccompetition/meta%20tag.jpeg_20240808061052"  />
               <meta property="og:url" content={`https://mumbailocal.org/competition/product/${product._Id}`} />
               
            </Helmet>
      <Card
        sx={{
          maxWidth: 345,
          margin: 1,
          position: "relative",
          height: isMobile ? "240px" : "450px",
        }}
      >
        <CardMedia
          component="img"
          height={isMobile ? 150 : 300}
          width={"100%"}
          image={
            product?.product_photo
              ? product?.product_photo
              : product?.result?.product_photo
          }
          sx={{
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          onClick={handleProductSelect}
        />
        <CardContent sx={{ padding: isMobile ? "8px" : "16px" }}>
          <Typography
            sx={{
              textAlign: "left",
              height: 30,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: isMobile ? "1rem" : "1.25rem",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {product?.product_name
              ? product?.product_name
              : product?.result?.product_name}
          </Typography>
          {!isMobile && (
            <Typography
              sx={{
                textAlign: "left",
                width: 280,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              variant="body2"
              color="text.secondary"
            >
              {desc}
            </Typography>
          )}
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: isMobile ? "0 8px" : "8px",
          }}
        >
        
          <IconButton
            color={liked ? "secondary" : "default"}
            onClick={handleLike}
            sx={{
              flexBasis: "50%",
              padding: isMobile ? "5px" : "8px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FavoriteIcon fontSize={isMobile ? "small" : "medium"} /><Typography sx={{ml:1}}>Vote</Typography>
          </IconButton>
          <IconButton
            color="default"
            onClick={handleShare}
            sx={{
              flexBasis: "50%",
              padding: isMobile ? "5px" : "8px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ShareIcon fontSize={isMobile ? "small" : "medium"} />
          </IconButton>
        </CardActions>
      </Card>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your mobile number to login.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="mobileNumber"
            label="Mobile Number"
            type="number"
            fullWidth
            variant="outlined"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            error={!!errorMessage}
            helperText={errorMessage}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#9C2946",
              fontWeight: "800",
              width: "10rem",
              borderRadius: "50px",
            }}
            onClick={handleCloseModal}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#9C2946",
              fontWeight: "800",
              width: "10rem",
              borderRadius: "50px",
            }}
            onClick={handleLogin}
            color="primary"
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductPost;

