import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import { useCompitationContext } from "../../Context/CompitationContext";

// Category data
const categoryData = [
  {
    id: "66b374e576aed362d5740cd0",
    category_name: "Food",
    category_image: "https://kitintellect.tech/bmccompetition/1.png_20240730055044"
  },
  {
    id: "66b3755c76aed362d5740cd1",
    category_name: "Fashion Elements",
    category_image: "http://kitintellect.tech/bmccompetition/munbailocalfashionelement.png_20240807132316"
  },
  {
    id: "66b375be76aed362d5740cd2",
    category_name: "Kids",
    category_image: "http://kitintellect.tech/bmccompetition/mumbailocalkids.png_20240807132444"
  },
  {
    id: "66b3763776aed362d5740cd3",
    category_name: "Health and Beauty",
    category_image: "https://kitintellect.tech/bmccompetition/mumbailocalhealthandbueaty%20.png_20240807132628"
  },
  {
    id: "66b3768f76aed362d5740cd4",
    category_name: "Home Decor",
    category_image: "https://kitintellect.tech/bmccompetition/3.png_20240730055246"
  },
  {
    id: "66b376d176aed362d5740cd5",
    category_name: "Divine Things",
    category_image: "https://kitintellect.tech/bmccompetition/4.png_20240730055317"
  },
  {
    id: "66b3770776aed362d5740cd6",
    category_name: "Art and Crafts",
    category_image: "https://kitintellect.tech/bmccompetition/6.png_20240730055513"
  }
];

// Create a mapping of category ID to category name
const categoryMap = categoryData.reduce((acc, { id, category_name }) => {
  acc[id] = category_name;
  return acc;
}, {});

export default function WinnerProducts() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [viewAll, setViewAll] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const { categoryWiseWinner } = useCompitationContext();

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleViewAll = (categoryId) => {
    setViewAll((prevViewAll) => ({ ...prevViewAll, [categoryId]: true }));
  };

  const categories = Object.entries(categoryWiseWinner);

  return (
    <Grid container spacing={4} sx={{ mt: 3, justifyContent: "center" }}>
      {categories.map(([categoryId, products], categoryIndex) => {
        const startIndex = viewAll[categoryId] ? 0 : (currentPage - 1) * itemsPerPage;
        const endIndex = viewAll[categoryId] ? products.length : startIndex + itemsPerPage;
        const paginatedProducts = products.slice(startIndex, endIndex);

        return (
          <Grid item xs={12} sm={12} md={12} lg={12} key={categoryId}>
            <Typography
              variant="h4"
              sx={{ mb: 2, textAlign: "center", color: "#9c2946" }}
            >
              Category: {categoryMap[categoryId] || categoryId}
            </Typography>
            {paginatedProducts.length === 0 ? (
              <Typography
                variant="h6"
                sx={{ textAlign: "center", color: "#9c2946" }}
              >
                No winning products in this category yet.
              </Typography>
            ) : (
              <Grid container spacing={4} sx={{ mt: 3, justifyContent: "center" }}>
                {paginatedProducts.map((product, index) => (
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
                          {/* {product.product_shortdescription} */}
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
            )}
          {!viewAll[categoryId] && paginatedProducts.length < products.length && (
  <Grid 
    item 
    xs={12} 
    sx={{ 
      display: "flex", 
      justifyContent: "center", 
      mt: 2 
    }}
  >
    <Button
      onClick={() => handleViewAll(categoryId)}
      sx={{
        width: "auto",
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
      <Typography sx={{ color: "#FFFFFF" }}>
        View Remaining Products
      </Typography>
    </Button>
  </Grid>
)}

          </Grid>
        );
      })}
    </Grid>
  );
}

