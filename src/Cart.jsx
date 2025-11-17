import React, { useEffect, useState } from "react";
import { getCart, updateCart, removeCart } from "./services/allapi";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
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

  //   add
  const increase = async (item) => {
    const updatedItem = { ...item, qty: item.qty + 1 };
    await updateCart(updatedItem);
    loadCart();
  };

  //sub
  const decrease = async (item) => {
    if (item.qty > 1) {
      const updatedItem = { ...item, qty: item.qty - 1 };
      await updateCart(updatedItem);
    } else {
      await removeCart(item.id);
    }
    loadCart();
  };

  // Calculate total
  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(sum);
  };

  return (
    <Container style={{ height: "80vh" }}>
      <Typography
        style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}
        variant="h5"
      >
        Cart
      </Typography>
      <div className="cartdis">
        <div>
          <img
            style={{ width: "400px" }}
            src="https://cdn.pixabay.com/photo/2022/01/28/12/17/fast-food-6974507_1280.jpg"
            alt=""
          />
        </div>
        <div className="maincart">
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom: "15px",
                    border: "1px solid #ccc",
                    padding: "10px",
                  }}
                >
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                    <div className="buttonmenu">
                      <button onClick={() => decrease(item)}>-</button>
                      <span style={{ margin: "0 10px" }}>{item.qty}</span>
                      <button onClick={() => increase(item)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
              <Button
                style={{
                  marginLeft: "130px",
                  marginBottom: "40px",
                  marginTop: "10px",
                  backgroundColor: "darkgreen",
                }}
                variant="contained"
              >
                <Typography style={{ textAlign: "center" }} variant="h6">
                  To pay: {total}
                </Typography>
              </Button>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
