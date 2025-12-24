import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import { addToCart } from "./services/allapi";

const menuItems = [
  {
    name: "Pepperoni Pizza",
    price: 299,
    desc: "Hot fresh pizza with cheese & pepperoni",
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
  },
  {
    name: "Veggie Pizza",
    price: 249,
    desc: "Fresh veggie pizza with tomato and cheese",
    img: "https://content.jdmagicbox.com/comp/pune/k1/020pxx20.xx20.180711121953.e7k1/catalogue/bro-pizza-pimpri-chinchwad-area-pune-pizza-delivery-services-fqbifqxtxf.jpg",
  },
  {
    name: "Paneer",
    price: 249,
    desc: "Paneer cubes cooked in creamy spiced gravy",
    img: "https://cdn.pixabay.com/photo/2025/10/21/07/54/shahi-9906985_1280.jpg",
  },
  {
    name: "Noodles",
    price: 299,
    desc: "Noodles tossed with veggies and savory sauce",
    img: "https://cdn.pixabay.com/photo/2024/09/04/14/26/ai-generated-9022021_1280.jpg",
  },
  {
    name: "Chicken Curry",
    price: 170,
    desc: "Chicken cooked with aromatic spices",
    img: "https://cdn.pixabay.com/photo/2023/06/02/19/10/ai-generated-8036252_1280.jpg",
  },
  {
    name: "Chicken Biryani",
    price: 249,
    desc: "Rich biryani with bold flavors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6TfMNBZJ5wcAKwRw27peGazluzztxxeiAw&s",
  },
];

const Menu = () => {
  const [qty, setQty] = useState({});

  const addFirst = (name) => {
    setQty((prev) => ({ ...prev, [name]: 1 }));
  };

  const increaseQty = (name) => {
    setQty((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const decreaseQty = (name) => {
    setQty((prev) => {
      const current = prev[name];
      if (current === 1) {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      }
      return { ...prev, [name]: current - 1 };
    });
  };

  const cartAdd = async (item, quantity) => {
    const response = await addToCart({
      ...item,
      qty: quantity,
    });
    if (response.status !== 201) {
      alert("Failed to add item");
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
      >
        Our Menu
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {menuItems.map((item) => (
          <Grid
            item
            key={item.name}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: 350,
                height: 420,
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.img}
                alt={item.name}
                sx={{
                  height: 180,
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2.5,
                }}
              >
                <Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.4 }}
                  >
                    {item.desc}
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "green",
                    fontWeight: "bold",
                    mt: "auto",
                  }}
                >
                  ₹ {item.price}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  justifyContent: "center",
                  pb: 2.5,
                  px: 2.5,
                }}
              >
                {qty[item.name] ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      border: "1px solid #ddd",
                      borderRadius: "20px",
                      px: 1.5,
                      py: 0.5,
                    }}
                  >
                    <Button
                      size="small"
                      onClick={() => decreaseQty(item.name)}
                      sx={{
                        minWidth: 32,
                        height: 32,
                        p: 0,
                      }}
                    >
                      <FaMinus />
                    </Button>

                    <Typography sx={{ minWidth: 20, textAlign: "center" }}>
                      {qty[item.name]}
                    </Typography>

                    <Button
                      size="small"
                      onClick={() => {
                        increaseQty(item.name);
                        cartAdd(item, qty[item.name] + 1);
                      }}
                      sx={{
                        minWidth: 32,
                        height: 32,
                        p: 0,
                      }}
                    >
                      <FaPlus />
                    </Button>
                  </Box>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "green",
                      borderRadius: "20px",
                      px: 4,
                      py: 0.75,
                      fontWeight: "bold",
                      width: "100%",
                    }}
                    onClick={() => {
                      addFirst(item.name);
                      cartAdd(item, 1);
                    }}
                  >
                    ADD
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Menu;
