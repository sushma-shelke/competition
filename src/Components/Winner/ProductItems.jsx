import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const ProductItems = ({ product }) => {
  const sortdesc = product?.product_name 
  const desc = sortdesc.length > 10 ? sortdesc.substring(0, 20) + '...' : sortdesc;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          width: '100%',
          margin: '10px',
          borderRadius: '16px',
          backgroundColor: "#e8e8e8",
          overflow: 'visible',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            '& .card-media': {
              borderBottomLeftRadius: '0',
              transform: 'translate(0, -20px)',
            },
          },
        }}
      >
        <CardMedia
          component="img"
          image={product?.product_photo}
          alt={product?.product_name}
          className="card-media"
          sx={{
            backgroundColor: "#e8e8e8",
            height: "350px",
            borderBottomLeftRadius: "200px",
            transition: 'border-radius 0.3s, transform 0.3s',
          }}
        />
        <CardContent style={{ backgroundColor: "#e8e8e8" }}>
          <Typography
            style={{ color: "#6F1C32", fontWeight: "bold", fontSize: "17px" }}
          >
            {desc}
          </Typography>
          <Typography
            style={{ color: "#6F1C32", fontWeight: "bold", fontSize: "15px" }}
          >
            {product?.shgname}
          </Typography>
          <Typography
            style={{ color: "#6F1C32", fontWeight: "bold" }}
          >
            Votes: {product?.votecount}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductItems;

