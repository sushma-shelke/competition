// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Box, TextField, Grid, MenuItem, Typography } from "@mui/material";
// import CustomButton from "./../CustomButton.jsx";
// import { useCompitationContext } from "../../Context/CompitationContext.jsx";
// import wretch from "wretch";

// const ParticipationForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const { addProduct } = useCompitationContext();
//   const [productPhotoUrl, setProductPhotoUrl] = useState(""); // State for storing uploaded image URL

//   // Function to handle file upload
//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append("file", file);

//       console.log("Uploading file:", file.name);

//       try {
//         const response = await wretch("http://mumbailocal.org:8080/upload")
//           .post(formData)
//           .json((res) => {
//             console.log("Uploaded file response:", res);
//             return res;
//           });

//         if (response.status === 200) {
//           setProductPhotoUrl(response.fileURL); // Set the uploaded image URL
//           console.log("Uploaded file URL:", response.fileURL);
//         } else {
//           console.error("Failed to upload file");
//         }
//       } catch (error) {
//         console.error("Error uploading file:", error);
//       }
//     }
//   };

//   // Function to handle form submission
//   const onSubmit = async (data) => {
//     console.log("Form data:", data);
//     try {
//       const productData = {
//         shgname: data.shgName,
//         product_name: data.productName,
//         product_shortdescription: data.shortDescription,
//         participating_persons_mobilenumber: data.mobileNumber,
//         product_photo: productPhotoUrl, // Use the uploaded image URL
//         product_photo_gallery: [
//           "https://m.media-amazon.com/images/I/71L-FOWXa5L._SX569_.jpg",
//           "https://m.media-amazon.com/images/I/91gkwmrYbML._SX569_.jpg",
//         ],
//         product_weight: data.weight,
//         product_lenght: data.length,
//         product_width: data.width,
//         product_colour: data.color,
//         product_price: data.price,
//         product_category: data.category,
//       };
//       console.log("Product data to be submitted:", productData);
//       const response = await addProduct(productData);
//       console.log("Product submitted successfully:", response);
//     } catch (error) {
//       console.error("Error submitting product:", error);
//     }
//   };

//   return (
//     <Box sx={{ borderRadius: 2, margin: "0 auto", mt: 4 }}>
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
//               {...register("mainPhoto", { required: "Main photo is required" })}
//               inputProps={{ accept: "image/*" }}
//               onChange={handleFileUpload}
//               error={!!errors.mainPhoto}
//               helperText={errors.mainPhoto && errors.mainPhoto.message}
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

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Grid, MenuItem, Typography } from "@mui/material";
import CustomButton from "./../CustomButton.jsx";
import { useCompitationContext } from "../../Context/CompitationContext.jsx";
import wretch from "wretch";

const ParticipationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addProduct, category } = useCompitationContext();
  console.log(category, "CATEGRyyY");
  const [productPhotoUrl, setProductPhotoUrl] = useState(""); // State for storing main photo URL
  const [productPhotoGalleryUrls, setProductPhotoGalleryUrls] = useState([]); // State for storing gallery URLs

  // Function to handle main photo upload
  const handleMainPhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      console.log("Uploading main photo:", file.name);

      try {
        const response = await wretch("http://mumbailocal.org:8080/upload")
          .post(formData)
          .json((res) => res);

        if (response.status === 200) {
          setProductPhotoUrl(response.fileURL); // Set the uploaded main photo URL
          console.log("Uploaded main photo URL:", response.fileURL);
        } else {
          console.error("Failed to upload main photo");
        }
      } catch (error) {
        console.error("Error uploading main photo:", error);
      }
    }
  };

  // Function to handle gallery photos upload
  const handleGalleryPhotosUpload = async (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const urls = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append("file", file);

        console.log("Uploading gallery photo:", file.name);

        try {
          const response = await wretch("http://mumbailocal.org:8080/upload")
            .post(formData)
            .json((res) => res);

          if (response.status === 200) {
            urls.push(response.fileURL); // Add the uploaded gallery photo URL
            console.log("Uploaded gallery photo URL:", response.fileURL);
          } else {
            console.error("Failed to upload gallery photo");
          }
        } catch (error) {
          console.error("Error uploading gallery photo:", error);
        }
      }
      setProductPhotoGalleryUrls(urls); // Set the uploaded gallery photo URLs
    }
  };

  // Function to handle form submission
  const onSubmit = async (data) => {
    console.log("Form data:", data);
    try {
      // Assuming `category` is the array of category objects from your context
      const selectedCategory = category.find(
        (cat) => cat.category_name === data.category
      );

      // const productData = {
      //   shgname: data.shgName,
      //   product_name: data.productName,
      //   product_shortdescription: data.shortDescription,
      //   participating_persons_mobilenumber: data.mobileNumber,
      //   product_photo: productPhotoUrl, // Use the uploaded main photo URL
      //   product_photo_gallery: productPhotoGalleryUrls, // Use the uploaded gallery photo URLs
      //   product_weight: data.weight,
      //   product_lenght: data.length,
      //   product_width: data.width,
      //   product_colour: data.color,
      //   product_price: data.price,
      //   product_category: selectedCategory ? selectedCategory.id : null, // Use category ID
      //   votecount: 0,
      // };

      const productData = {
        shgname: data.shgName,
        product_name: data.productName,
        product_shortdescription: data.shortDescription,
        participating_persons_mobilenumber: data.mobileNumber,
        product_photo: productPhotoUrl, // Use the uploaded main photo URL
        product_photo_gallery: productPhotoGalleryUrls, // Use the uploaded gallery photo URLs
        product_weight: parseFloat(data.weight), // Ensure weight is a number
        product_lenght: parseFloat(data.length), // Ensure length is a number
        product_width: parseFloat(data.width), // Ensure width is a number
        product_colour: data.color,
        product_price: parseFloat(data.price), // Ensure price is a number
        product_category: selectedCategory ? selectedCategory.id : null, // Use category ID
        votecount: 0,
      };
      console.log("Product data to be submitted:", productData);
      const response = await addProduct(productData);
            console.log("Product submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting product:", error);
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
          {/* <Grid item xs={12} md={6} lg={4}>
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
          </Grid> */}
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              fullWidth
              select
              label="Product Category / उत्पादन श्रेणी"
              {...register("category")}
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
