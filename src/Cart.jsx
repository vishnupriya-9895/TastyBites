import React, { useEffect, useState } from "react";
import { getCart, updateCart, removeCart } from "./services/allapi";
import { Container, Typography, Button, Paper, Box } from "@mui/material";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const loadCart = async () => {
    const response = await getCart();
    if (response.status === 200) {
      setCart(response.data);
      calculateTotal(response.data);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const increase = async (item) => {
    await updateCart({ ...item, qty: item.qty + 1 });
    loadCart();
  };

  const decrease = async (item) => {
    if (item.qty > 1) {
      await updateCart({ ...item, qty: item.qty - 1 });
    } else {
      await removeCart(item.id);
    }
    loadCart();
  };

  const calculateTotal = (items) => {
    const sum = items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    setTotal(sum);
  };

  return (
    <Container sx={{ minHeight: "80vh", mt: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
        }}
      >
        Your Cart
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* IMAGE */}
        <Box>
          <img
            src="https://cdn.pixabay.com/photo/2022/01/28/12/17/fast-food-6974507_1280.jpg"
            alt=""
            style={{
              width: "380px",
              borderRadius: "16px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
            }}
          />
        </Box>

        {/* CART ITEMS */}
        <Box sx={{ flex: 1 }}>
          {cart.length === 0 ? (
            <Typography>No items in cart</Typography>
          ) : (
            <>
              {cart.map((item) => (
                <Paper
                  key={item.id}
                  elevation={3}
                  sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography color="text.secondary">
                      ₹ {item.price}
                    </Typography>
                  </Box>

                  {/* QUANTITY CONTROLS */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Button
                      onClick={() => decrease(item)}
                      variant="outlined"
                      sx={{
                        minWidth: "36px",
                        borderRadius: "50%",
                        fontSize: "18px",
                      }}
                    >
                      −
                    </Button>

                    <Typography sx={{ minWidth: "20px", textAlign: "center" }}>
                      {item.qty}
                    </Typography>

                    <Button
                      onClick={() => increase(item)}
                      variant="outlined"
                      sx={{
                        minWidth: "36px",
                        borderRadius: "50%",
                        fontSize: "18px",
                      }}
                    >
                      +
                    </Button>
                  </Box>
                </Paper>
              ))}

              {/* TOTAL */}
              <Paper
                elevation={4}
                sx={{
                  mt: 3,
                  p: 2,
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, #2e7d32, #1b5e20)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">
                  Total Amount
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  ₹ {total}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    color: "#1b5e20",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#f1f1f1",
                    },
                  }}
                >
                  Proceed to Pay
                </Button>
              </Paper>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
