// import React from "react";
// import Grid from "@mui/material/Grid";
// import { useNavigate } from "react-router-dom";
// import { useCompitationContext } from "../../Context/CompitationContext";
// import { Typography } from "@mui/material";

// const ProductMainCategory = () => {
//   const { category } = useCompitationContext();
//    const navigate = useNavigate();
//   const handleCategorySelect = (id) => {
//     navigate(`/category/${id}`);
//   };
//   return (
//     <>
    
//     <Grid
//       container
//       sx={{ justifyContent: "center", marginBottom: "40px" }}
//       xs={12}
//     >{category.length>0 ? (
//       {category.map((category, index) => (
//         <Grid
//           item
//           xs={4} // Each item takes up 6/12 columns on extra-small screens
//           sm={3} // Each item takes up 3/12 columns on small screens
//           lg={1.7}
//           key={index}
//           onClick={() => handleCategorySelect(category.id)}
//           sx={{ display: "flex", justifyContent: "center" }}
//         >
//           <img
//             src={category?.category_image}
//             alt="Category images"
//             style={{ borderRadius: "16px" }}
//           />
//         </Grid>
//       ))}):(  <Typography
//         variant="h6"
//         sx={{ textAlign: "center", color: "#9c2946" }}
//       >
//           No product add in this category yet...
//         </Typography>)}
//     </Grid>
//     </>
//   );
// };

// export default ProductMainCategory;


import React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useCompitationContext } from "../../Context/CompitationContext";
import { Typography } from "@mui/material";

const ProductMainCategory = () => {
  const { category } = useCompitationContext();
  const navigate = useNavigate();

  const handleCategorySelect = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <Grid container sx={{ justifyContent: "center", marginBottom: "40px" }}>
      {category.length > 0 ? (
        category.map((category, index) => (
          <Grid
            item
            xs={4} // Each item takes up 4/12 columns on extra-small screens
            sm={3} // Each item takes up 3/12 columns on small screens
            lg={1.7} // Each item takes up 1.7/12 columns on large screens
            key={index}
            onClick={() => handleCategorySelect(category.id)}
            sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
          >
            <img
              src={category?.category_image}
              alt="Category images"
              style={{ borderRadius: "16px" }}
            />
          </Grid>
        ))
      ) : (
        <Typography variant="h6" sx={{ textAlign: "center", color: "#9c2946" }}>
          Products not available
        </Typography>
      )}
    </Grid>
  );
};

export default ProductMainCategory;
