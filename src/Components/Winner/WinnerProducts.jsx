import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useCompitationContext } from "../../Context/CompitationContext";

// Category data
const categoryData = [
  {
    id: "668e8a9b83e2da672181fddf",
    category_name: "fashion element",
    category_image:
      "https://kitintellect.tech/bmccompetition/7.png_20240730055541",
  },
  {
    id: "668fda04c338457079d8e2d9",
    category_name: "Art and Craft",
    category_image:
      "https://kitintellect.tech/bmccompetition/6.png_20240730055513",
  },
  {
    id: "668fda29c338457079d8e2da",
    category_name: "Food and Drinks",
    category_image:
      "https://kitintellect.tech/bmccompetition/1.png_20240730055044",
  },
  {
    id: "6696343dc6a272dbcdffda18",
    category_name: "Apparel",
    category_image:
      "https://kitintellect.tech/bmccompetition/2.png_20240730055213",
  },
  {
    id: "6696347dc6a272dbcdffda1c",
    category_name: "Home Decor",
    category_image:
      "https://kitintellect.tech/bmccompetition/3.png_20240730055246",
  },
  {
    id: "669636b5c6a272dbcdffda20",
    category_name: "Devine Things",
    category_image:
      "https://kitintellect.tech/bmccompetition/4.png_20240730055317",
  },
  {
    id: "6696431bdc9c057507b4fec6",
    category_name: "Homemade",
    category_image:
      "https://kitintellect.tech/bmccompetition/5.png_20240730055349",
  },
];

// Create a mapping of category ID to category name
const categoryMap = categoryData.reduce((acc, { id, category_name }) => {
  acc[id] = category_name;
  return acc;
}, {});

export default function WinnerProducts() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const { categoryWiseWinner } = useCompitationContext();

  // Flatten and map products from the categoryWiseWinner object
  const categories = Object.entries(categoryWiseWinner);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <Grid container spacing={4} sx={{ mt: 3, justifyContent: "center" }}>
      {categories.map(([categoryId, products], categoryIndex) => (
        <Grid item xs={12} sm={12} md={12} lg={12} key={categoryId}>
          <Typography
            variant="h4"
            sx={{ mb: 2, textAlign: "center", color: "#9c2946" }}
          >
            Category: {categoryMap[categoryId] || categoryId}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3, justifyContent: "center" }}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._Id}>
                <Card
                  onMouseEnter={() =>
                    handleMouseEnter(categoryIndex * products.length + index)
                  }
                  onMouseLeave={handleMouseLeave}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition:
                      "height 0.3s ease-in-out, transform 0.3s ease-in-out",
                    height:
                      hoveredIndex === categoryIndex * products.length + index
                        ? "400px"
                        : "300px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.product_photo}
                    title={product.product_name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                      transform:
                        hoveredIndex === categoryIndex * products.length + index
                          ? "scale(1.1)"
                          : "scale(1)",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      color: "#000",
                      opacity:
                        hoveredIndex === categoryIndex * products.length + index
                          ? 1
                          : 0,
                      transition: "opacity 0.3s ease-in-out",
                      padding: "16px",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#5e5c5c" }}
                    >
                      {product.shgname} - {product.product_name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#5e5c5c" }}>
                      {product.product_shortdescription}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "right", color: "#5e5c5c" }}
                    >
                      Vote {product.votecount}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
