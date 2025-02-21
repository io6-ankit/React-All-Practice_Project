import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import Image1 from "../../assets/image/image-1.webp";
import Image2 from "../../assets/image/image-2.webp";
import Image3 from "../../assets/image/image-3.webp";
import Image4 from "../../assets/image/image-4.webp";
import Image5 from "../../assets/image/image-5.webp";
import Image6 from "../../assets/image/image-6.webp";

const products = [
  {
    title: "Graphic Tees & more",
    subtitle: "Top Styles",
    price: "From ₹79",
    image:
      " https://rukminim2.flixcart.com/fk-p-flap/2700/1449/image/e4229e10550365bb.jpg?q=60",
  },
  {
    title: "Kitchen Bestsellers",
    subtitle: "Mega Offers",
    price: "From ₹30",
    image: { Image2 },
  },
  {
    title: "Casual Shoes",
    subtitle: "Cool Picks",
    price: "From ₹145",
    image: { Image3 },
  },
  {
    title: "Best of Audio",
    subtitle: "Groovy Steals",
    price: "From ₹60",
    image: { Image4 },
  },
  {
    title: "Silk Sarees & more",
    subtitle: "Elegant Picks",
    price: "From ₹99",
    image: { Image5 },
  },
  {
    title: "Beauty Gadgets",
    subtitle: "Must Haves",
    price: "From ₹129",
    image: { Image6 },
  },
];

const ProductCard = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                background: "linear-gradient(to bottom, #2d0b73, #4c1aa6)",
                color: "#fff",
                borderRadius: "12px",
                padding: "10px",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card Image */}
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  width: "300px",
                  height: "200px",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                }}
              />

              {/* Card Content */}
              <CardContent>
                {/* <Typography variant="body2">{product.title}</Typography> */}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {products.image}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#FFD700" }}
                >
                  {/* {product.price} */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;
