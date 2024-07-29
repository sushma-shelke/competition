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
    console.log("data", data.shgName);
    try {
      // Construct the payload for the API
      const productData = {
        shgname: data.shgName,
        product_name: data.productName,
        product_shortdescription: data.shortDescription,
        participating_persons_mobilenumber: data.mobileNumber,
        // product_photo: data.mainPhoto[0]?.name, // Adjust as needed for file uploads
        // product_photo_gallery: Array.from(data.galleryPhotos).map(
        //   (file) => file.name
        // ),
        product_photo: "product_photo", // Adjust as needed for file uploads
        product_photo_gallery: "product_photo_gallery",
        product_weight: data.weight,
        product_lenght: data.length,
        product_width: data.width,
        product_colour: data.color,
        product_price: data.price,
        product_category: data.category,
        // votecount: 0, // Default or dynamically set this as needed
      };
      console.log(productData, "productData");
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
              helperText={errors.shgName && errors.shgName.message}
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

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Box, TextField, Grid, MenuItem, Typography } from "@mui/material";
// import CustomButton from "./../CustomButton.jsx"; // Ensure this import is correct
// import { useCompitationContext } from "../../Context/CompitationContext.jsx";
// import wretch from "wretch";

// const ParticipationForm = () => {
//   const [mainPhotoName, setMainPhotoName] = useState("");
//   const [galleryPhotoNames, setGalleryPhotoNames] = useState([]);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const { addProduct } = useCompitationContext();

//   const onSubmit = async (data) => {
//     console.log("data", data.shgName);
//     try {
//       // Upload the main photo
//       const mainPhotoFile = data.mainPhoto[0];
//       const mainPhotoFormData = new FormData();
//       mainPhotoFormData.append("file", mainPhotoFile);

//       const uploadResponse = await wretch(
//         `https://kitintellect.tech/bmccompetition/${mainPhotoFile.name}.png`
//       )
//         .post(mainPhotoFormData)
//         .json();

//       const mainPhotoUrl = uploadResponse.url; // Adjust based on your API response

//       // Construct the payload for the API
//       const productData = {
//         shgname: data.shgName,
//         product_name: data.productName,
//         product_shortdescription: data.shortDescription,
//         participating_persons_mobilenumber: data.mobileNumber,
//         product_photo: mainPhotoUrl, // Use the URL of the uploaded photo
//         product_photo_gallery: galleryPhotoNames, // Use the state for gallery photos
//         product_weight: data.weight,
//         product_lenght: data.length,
//         product_width: data.width,
//         product_colour: data.color,
//         product_price: data.price,
//         product_category: data.category,
//         // votecount: 0, // Default or dynamically set this as needed
//       };
//       console.log(productData, "productData");

//       const response = await addProduct(productData);
//       console.log("Product submitted successfully:", response);
//     } catch (error) {
//       console.error("Error submitting product:", error);
//     }
//   };

//   const handleMainPhotoChange = (event) => {
//     const files = event.target.files;
//     if (files.length > 0) {
//       console.log("Selected main photo:", files[0]);
//       setMainPhotoName(files[0].name);
//     }
//   };

//   const handleGalleryPhotosChange = (event) => {
//     const files = event.target.files;
//     if (files.length > 0) {
//       console.log("Selected gallery photos:", files);
//       setGalleryPhotoNames(Array.from(files).map((file) => file.name));
//     }
//   };

//   return (
//     <Box
//       sx={{
//         borderRadius: 2,
//         margin: "0 auto",
//         mt: 4,
//       }}
//     >
//       <Typography
//         variant="h5"
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           fontWeight: 700,
//           textDecoration: "none",
//           background:
//             "linear-gradient(45deg, #f58529 40%, #dd2a7b 60%, #8134af 70%, #515bd4 80%)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//         gutterBottom
//       >
//         Participation Form
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               label="SHG Name / बचत गटाचे नाव "
//               {...register("shgName", { required: "SHG Name is required" })}
//               error={!!errors.shgName}
//               helperText={errors.shgName && errors.shgName.message}
//             />
//           </Grid>

//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               type="number"
//               label="Mobile Number / मोबाईल नंबर"
//               {...register("mobileNumber")}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               label="Product Name / उत्पादनाचे नाव"
//               {...register("productName")}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               select
//               label="Product Category / उत्पादन श्रेणी"
//               {...register("category")}
//             >
//               <MenuItem value="Food">Food and Drinks</MenuItem>
//               <MenuItem value="Clothing">Clothing</MenuItem>
//               <MenuItem value="Home Decor">Home Decor</MenuItem>
//               <MenuItem value="Devine Things">Devine Things</MenuItem>
//               <MenuItem value="Homemade">Homemade</MenuItem>
//               <MenuItem value="Art and Craft">Art and Craft</MenuItem>
//               <MenuItem value="Gardening">Gardening</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </TextField>
//           </Grid>

//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               type="file"
//               label="Product Main Photo / उत्पादन मुख्य फोटो"
//               InputLabelProps={{ shrink: true }}
//               {...register("mainPhoto")}
//               inputProps={{ accept: "image/*" }}
//               onChange={handleMainPhotoChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               type="file"
//               label="Product Photo Gallery (Max 3) / उत्पादन गॅलरी छायाचित्रे"
//               InputLabelProps={{ shrink: true }}
//               {...register("galleryPhotos")}
//               inputProps={{ multiple: true, accept: "image/*" }}
//               onChange={handleGalleryPhotosChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               label="Product Weight / उत्पादनाचे वजन"
//               {...register("weight")}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               label="Length / लांबी"
//               {...register("length")}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField fullWidth label="Width" {...register("width")} />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               label="Product Color / उत्पादनाचा रंग"
//               {...register("color")}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <TextField
//               fullWidth
//               label="Product Price / उत्पादन किंमत"
//               {...register("price")}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={12}>
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               label="Product Short Description / उत्पादनाचे संक्षिप्त वर्णन"
//               {...register("shortDescription")}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <CustomButton type="submit">Submit</CustomButton>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default ParticipationForm;
