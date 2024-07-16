import React from "react";
import { Grid } from "@mui/material";
import ProductPost from "./ProductPost";

const products = [
  {
    _id: "1",
    name: "Handmade Tote Bag",
    shortDescription:
      "A stylish and eco-friendly tote bag made from recycled materials.",
    photos: [
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "200g",
    quantity: 50,
    dimensions: "30cm x 40cm x 10cm",
    color: "Blue",
    price: "$20",
    category: "Bags and Luggage",
  },
  {
    _id: "2",
    name: "Organic Jam",
    shortDescription: "Delicious homemade jam made from organic fruits.",
    photos: [
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "250g",
    quantity: 30,
    dimensions: "10cm x 10cm x 10cm",
    color: "Red",
    price: "$5",
    category: "Food and Drinks",
  },
  {

    _id: "3",
    name: "Handcrafted Wooden Bowl",
    name: " Wooden Bowl",

    shortDescription: "A beautiful bowl crafted from sustainable wood.",
    photos: [
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "500g",
    quantity: 20,
    dimensions: "15cm x 15cm x 8cm",
    color: "Brown",
    price: "$15",
    category: "Home Decor",
  },
  {
    _id: "4",
    name: "Natural Soy Candles",
    shortDescription: "Eco-friendly candles made from natural soy wax.",
    photos: [
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "300g",
    quantity: 40,
    dimensions: "10cm x 10cm x 12cm",
    color: "White",
    price: "$10",
    category: "Home Fragrance",
  },
  {
    _id: "5",
    name: "Knitted Scarf",
    shortDescription: "A warm and cozy scarf knitted from organic wool.",
    photos: [
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "150g",
    quantity: 25,
    dimensions: "180cm x 30cm",
    color: "Green",
    price: "$25",
    category: "Apparel",
  },
  {
    _id: "6",
    name: "Ceramic Coffee Mug",
    shortDescription:
      "A handcrafted ceramic mug perfect for your morning coffee.",
    photos: [
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "400g",
    quantity: 60,
    dimensions: "8cm x 8cm x 10cm",
    color: "Black",
    price: "$12",
    category: "Kitchenware",
  },
];

const ProductGrid = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {products.map((product) => (
        <Grid item key={product._id} xs={12} sm={6} md={3}>
          <ProductPost {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
