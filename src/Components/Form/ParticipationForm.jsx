import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  TextField,
  Grid,
  MenuItem,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import CustomButton from "./../CustomButton.jsx";
import { useCompitationContext } from "../../Context/CompitationContext.jsx";
import wretch from "wretch";
import { useNavigate } from "react-router-dom";

const ParticipationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addProduct, category } = useCompitationContext();
  const [productPhotoUrl, setProductPhotoUrl] = useState("");
  const [productPhotoGalleryUrls, setProductPhotoGalleryUrls] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [productData, setProductData] = useState({});
  const navigate = useNavigate();
  const handleMainPhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await wretch("https://mumbailocal.org:8080/upload")
          .post(formData)
          .json((res) => res);

        if (response.status === 200) {
          setProductPhotoUrl(response.fileURL);
        } else {
          console.error("Failed to upload main photo");
        }
      } catch (error) {
        console.error("Error uploading main photo:", error);
      }
    }
  };

  const handleGalleryPhotosUpload = async (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const urls = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append("file", file);
        try {
          const response = await wretch("https://mumbailocal.org:8080/upload")
            .post(formData)
            .json((res) => res);

          if (response.status === 200) {
            urls.push(response.fileURL);
          } else {
            console.error("Failed to upload gallery photo");
          }
        } catch (error) {
          console.error("Error uploading gallery photo:", error);
        }
      }
      setProductPhotoGalleryUrls(urls);
    }
  };

  const onSubmit = (data) => {
    const selectedCategory = category.find(
      (cat) => cat.category_name === data.category
    );

    const productData = {
      shgname: data.shgName,
      product_name: data.productName,
      product_shortdescription: data.shortDescription,
      participating_persons_mobilenumber: data.mobileNumber,
      product_photo: productPhotoUrl,
      product_photo_gallery: productPhotoGalleryUrls,
      product_weight: parseFloat(data.weight),
      product_lenght: parseFloat(data.length),
      product_width: parseFloat(data.width),
      product_colour: data.color,
      product_price: parseFloat(data.price),
      product_category: selectedCategory ? selectedCategory.id : null,
      votecount: 0,
    };

    setProductData(productData);
    setOpenConfirm(true);
  };

  const handleConfirm = async () => {
    try {
      const response = await addProduct(productData);
      if (response?.result?.status === "200") {
        window.alert("Product submitted successfully!");
        navigate("/");
      } else {
        window.alert(`You already registered a product`);
      }
    } catch (error) {
      console.error("Error submitting product:", error);
      window.alert("Error submitting product. Please try again.");
    } finally {
      setOpenConfirm(false);
    }
  };

  return (
    <Box sx={{ borderRadius: 2, margin: "0 auto", mt: 4 }}>
      <Typography
        variant="h5"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: 700,
          textDecoration: "none",
          background:
            "linear-gradient(45deg, #f58529 40%, #dd2a7b 60%, #8134af 70%, #515bd4 80%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        gutterBottom
      >
        Participation Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="SHG Name / बचत गटाचे नाव "
              {...register("shgName", { required: "SHG Name is required" })}
              error={!!errors.shgName}
              helperText={errors.shgName && errors.shgName.message}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              type="number"
              label="Mobile Number / मोबाईल नंबर"
              {...register("mobileNumber", {
                required: "Mobile Number is required",
              })}
              error={!!errors.mobileNumber}
              helperText={errors.mobileNumber && errors.mobileNumber.message}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Product Name / उत्पादनाचे नाव"
              {...register("productName", {
                required: "Product Name is required",
              })}
              error={!!errors.productName}
              helperText={errors.productName && errors.productName.message}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              select
              label="Product Category / उत्पादन श्रेणी"
              {...register("category", { required: "Category is required" })}
              error={!!errors.category}
              helperText={errors.category && errors.category.message}
            >
              {category &&
                category.map((cat) => (
                  <MenuItem key={cat.id} value={cat.category_name}>
                    {cat.category_name}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              type="file"
              label="Product Main Photo / उत्पादन मुख्य फोटो"
              InputLabelProps={{ shrink: true }}
              {...register("mainPhoto", { required: "Main photo is required" })}
              inputProps={{ accept: "image/*" }}
              onChange={handleMainPhotoUpload}
              error={!!errors.mainPhoto}
              helperText={errors.mainPhoto && errors.mainPhoto.message}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              type="file"
              label="Product Photo Gallery (Max 3) / उत्पादन गॅलरी छायाचित्रे"
              InputLabelProps={{ shrink: true }}
              {...register("galleryPhotos")}
              inputProps={{ multiple: true, accept: "image/*" }}
              onChange={handleGalleryPhotosUpload}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Product Weight / उत्पादनाचे वजन (In Kg)"
              {...register("weight")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Length / लांबी (In Cm)"
              {...register("length")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Width / रुंदी (In Cm)"
              {...register("width")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Product Color / उत्पादनाचा रंग"
              {...register("color")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Product Price / उत्पादन किंमत ₹"
              {...register("price")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Product Short Description / उत्पादनाचे संक्षिप्त वर्णन"
              {...register("shortDescription")}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomButton type="submit">Submit</CustomButton>
          </Grid>
        </Grid>
      </form>

      <Dialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title">
          <span style={{ color: "red" }}>
            Please confirm the details cause you unable to update later:
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            <strong>SHG Name:</strong> {productData.shgname || " "} <br />
            <strong>Mobile Number:</strong>{" "}
            {productData.participating_persons_mobilenumber || " "} <br />
            <strong>Product Name:</strong> {productData.product_name || " "}{" "}
            <br />
            <strong>Weight:</strong> {productData.product_weight || " "} <br />
            <strong>Length:</strong> {productData.product_lenght || " "} <br />
            <strong>Width:</strong> {productData.product_width || " "} <br />
            <strong>Color:</strong> {productData.product_colour || " "} <br />
            <strong>Price:</strong> {productData.product_price || " "} <br />
            <strong>Short Description:</strong>{" "}
            {productData.product_shortdescription || " "}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenConfirm(false)}
            style={{
              width: "80%",
              backgroundColor: "#9C2946",
              fontWeight: "600",
              textTransform: "capitalize",
              borderRadius: "50px",
              padding: "10px 20px",
              fontSize: "16px",
              // boxShadow: "4px 6px 10px 0px grey",
              color: "#fff",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            autoFocus
            style={{
              width: "80%",
              backgroundColor: "#9C2946",
              fontWeight: "600",
              textTransform: "capitalize",
              borderRadius: "50px",
              padding: "10px 20px",
              fontSize: "16px",
              // boxShadow: "4px 6px 10px 0px grey",
              color: "#fff",
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ParticipationForm;
