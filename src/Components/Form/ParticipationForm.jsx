import React from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Grid, MenuItem, Typography } from "@mui/material";
import CustomButton from "./../CustomButton.jsx"; // Ensure this import is correct
import { useCompitationContext } from "../../Context/CompitationContext.jsx";

const ParticipationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addProduct } = useCompitationContext();

  const onSubmit = async (data) => {
    console.log("data",data.shgName);
    try {
      // Construct the payload for the API
      const productData = {
        shgname: data.shgName,
        product_name: data.productName,
        product_shortdescription: data.shortDescription,
        participating_persons_mobilenumber: data.mobileNumber,
        product_photo: data.groupPhoto[0]?.name, // Adjust as needed for file uploads
        product_photo_gallery: Array.from(data.galleryPhotos).map(
          (file) => file.name
        ), // Adjust for file array
        product_weight: data.weight,
        product_lenght: data.length,
        product_width: data.width,
        product_colour: data.color,
        product_price: data.price,
        product_category: data.category,
        // votecount: 0, // Default or dynamically set this as needed
      };
console.log(productData,"productData")
      const response = await addProduct(productData);
      console.log("Product submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        margin: "0 auto",
        mt: 4,
      }}
    >
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
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              type="number"
              label="Mobile Number / मोबाईल नंबर"
              {...register("mobileNumber")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Product Name / उत्पादनाचे नाव"
              {...register("productName")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              select
              label="Product Category / उत्पादन श्रेणी"
              {...register("category")}
            >
              <MenuItem value="Food">Food and Drinks</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Home Decor">Home Decor</MenuItem>
              <MenuItem value="Devine Things">Devine Things</MenuItem>
              <MenuItem value="Homemade">Homemade</MenuItem>
              <MenuItem value="Art and Craft">Art and Craft</MenuItem>
              <MenuItem value="Gardening">Gardening</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              type="file"
              label="Product Main Photo / उत्पादन मुख्य फोटो"
              InputLabelProps={{ shrink: true }}
              {...register("mainPhoto")}
              inputProps={{ accept: "image/*" }}
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
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Product Weight / उत्पादनाचे वजन"
              {...register("weight")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Length / लांबी"
              {...register("length")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField fullWidth label="Width" {...register("width")} />
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
              label="Product Price / उत्पादन किंमत"
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
    </Box>
  );
};

export default ParticipationForm;
