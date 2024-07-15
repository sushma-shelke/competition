import React from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Grid, MenuItem, Typography } from "@mui/material";
import CustomButton from "./../CustomButton.jsx"; // Changed the import to .jsx
import { useCompitationContext } from "../../Context/CompitationContext.jsx";

const ParticipationForm = () => {
  // const { faq } = useCompitationContext();
  // console.log(faq, "FAQWQ");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        padding: 4,
        border: "1px solid #ccc",
        borderRadius: 2,
        maxWidth: "80%",
        margin: "0 auto",
        mt: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mr: 2,
          // display: { xs: "none", md: "flex" },
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
              label="SHG Leader Name / बचत गट प्रमुखाचे नाव "
              {...register("shgLeaderName", {
                required: "SHG Leader Name is required",
              })}
              error={!!errors.shgLeaderName}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              label="Participating Persons Mobile Number / मोबाईल नंबर"
              {...register("mobileNumber")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              type="file"
              label="SHG Group Photo / बचत गटाचा फोटो"
              InputLabelProps={{ shrink: true }}
              {...register("groupPhoto")}
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
              multiline
              rows={4}
              label="Product Short Description / उत्पादनाचे संक्षिप्त वर्णन"
              {...register("shortDescription")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              type="file"
              label="Product Main Photo / उत्पादन मुख्य फोटो"
              InputLabelProps={{ shrink: true }}
              {...register("mainPhoto")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              type="file"
              label="Product Photo Gallery (Max 3) / उत्पादन गॅलरी छायाचित्रे"
              InputLabelProps={{ shrink: true }}
              {...register("galleryPhotos")}
              inputProps={{ multiple: true }}
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
          <Grid item xs={12}>
            <CustomButton type="submit">Submit</CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ParticipationForm;
