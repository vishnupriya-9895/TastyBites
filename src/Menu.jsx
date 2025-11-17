import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import { addToCart } from "./services/allapi";

const Menu = () => {
  const [qty, setqty] = useState(0);

  const addqty = () => {
    setqty(qty + 1);
  };

  const subqty = () => {
    if (qty > 1) setqty(qty - 1);
  };

  const cartAdd = async (product) => {
    const item = {
      ...product,
      qty: 1,
    };

    const response = await addToCart(item);

    if (response.status === 201) {
      alert("Item added to cart!");
    } else {
      alert("Failed to add item");
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {/* 1st */}
        <Grid className="menucard1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo="
              title="Pepperoni Pizza"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pepperoni Pizza
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Hot fresh pizza with cheese & pepperoni
              </Typography>
              <Typography variant="h6">299</Typography>
            </CardContent>
            <CardActions>
              <div className="buttonmenu">
                <button onClick={subqty}>
                  <FaMinus />
                </button>
                <span style={{ margin: "0 10px" }}>{qty}</span>
                <button
                  onClick={() => {
                    addqty();
                    cartAdd({
                      name: "Pepperoni Pizza",
                      price: 299,
                    });
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </CardActions>
          </Card>
        </Grid>

        {/* 2nd*/}
        <Grid className="menucard1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/2150383746/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=612x612&w=0&k=20&c=Wotwv3RdBzDmgijx4ujP44aaC6GF53bleATVcLFRqO0="
              title="Veggie Pizza"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Veggie Pizza
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Fresh veggie pizza with tomato and cheese
              </Typography>
              <Typography variant="h6">249</Typography>
            </CardContent>
            <CardActions>
              <div className="buttonmenu">
                <button onClick={subqty}>
                  <FaMinus />
                </button>
                <span style={{ margin: "0 10px" }}>{qty}</span>
                <button
                  onClick={() => {
                    addqty();
                    cartAdd({
                      name: "Veggie Pizza",
                      price: 249,
                    });
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* 3rd*/}
        <Grid className="menucard1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://cdn.pixabay.com/photo/2025/10/21/07/54/shahi-9906985_1280.jpg"
              title="Paneer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Paneer
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                paneer cubes cooked in a creamy, spiced gravy
              </Typography>
              <Typography variant="h6">249</Typography>
            </CardContent>
            <CardActions>
              <div className="buttonmenu">
                <button onClick={subqty}>
                  <FaMinus />
                </button>
                <span style={{ margin: "0 10px" }}>{qty}</span>
                <button
                  onClick={() => {
                    addqty();
                    cartAdd({
                      name: "panner",
                      price: 249,
                    });
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* 4th */}
        <Grid className="menucard1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://cdn.pixabay.com/photo/2024/09/04/14/26/ai-generated-9022021_1280.jpg"
              title="Pepperoni Pizza"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Noodles
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                noodles tossed with veggies and savory sauce
              </Typography>
              <Typography variant="h6">299</Typography>
            </CardContent>
            <CardActions>
              <div className="buttonmenu">
                <button onClick={subqty}>
                  <FaMinus />
                </button>
                <span style={{ margin: "0 10px" }}>{qty}</span>
                <button
                  onClick={() => {
                    addqty();
                    cartAdd({
                      name: "noodles",
                      price: 299,
                    });
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* 5t */}
        <Grid className="menucard1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://cdn.pixabay.com/photo/2023/06/02/19/10/ai-generated-8036252_1280.jpg"
              title="Chicken curry"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chicken curry
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                chicken pieces cooked with aromatic spices
              </Typography>
              <Typography variant="h6">170</Typography>
            </CardContent>
            <CardActions>
              <div className="buttonmenu">
                <button onClick={subqty}>
                  <FaMinus />
                </button>
                <span style={{ margin: "0 10px" }}>{qty}</span>
                <button
                  onClick={() => {
                    addqty();
                    cartAdd({
                      name: "chicken curry",
                      price: 170,
                    });
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* 6th */}
        <Grid className="menucard1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043064_1280.jpg"
              title="Veggie Pizza"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                chicken briyani
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Biryani with a rich mix of flavors and textures.
              </Typography>
              <Typography variant="h6">249</Typography>
            </CardContent>
            <CardActions>
              <div className="buttonmenu">
                <button onClick={subqty}>
                  <FaMinus />
                </button>
                <span style={{ margin: "0 10px" }}>{qty}</span>
                <button
                  onClick={() => {
                    addqty();
                    cartAdd({
                      name: "Veggie Pizza",
                      price: 249,
                    });
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* 7th */}
        <Grid className="menucard1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo="
              title="Pepperoni Pizza"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pepperoni Pizza
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Hot fresh pizza with cheese & pepperoni
              </Typography>
              <Typography variant="h6">299</Typography>
            </CardContent>
            <CardActions>
              <div className="buttonmenu">
                <button onClick={subqty}>
                  <FaMinus />
                </button>
                <span style={{ margin: "0 10px" }}>{qty}</span>
                <button
                  onClick={() => {
                    addqty();
                    cartAdd({
                      name: "Pepperoni Pizza",
                      price: 299,
                    });
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* 8th */}
        <Grid className="menucard1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://cdn.pixabay.com/photo/2024/09/04/14/26/ai-generated-9022021_1280.jpg"
              title="Pepperoni Pizza"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Noodles
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                noodles tossed with veggies and savory sauce
              </Typography>
              <Typography variant="h6">299</Typography>
            </CardContent>
            <CardActions>
              <div className="buttonmenu">
                <button onClick={subqty}>
                  <FaMinus />
                </button>
                <span style={{ margin: "0 10px" }}>{qty}</span>
                <button
                  onClick={() => {
                    addqty();
                    cartAdd({
                      name: "Pepperoni Pizza",
                      price: 299,
                    });
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </CardActions>
          </Card>
        </Grid>
        {/* 9th */}
        <Grid className="menucard1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043064_1280.jpg"
              title="Veggie Pizza"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                chicken briyani
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Biryani with a rich mix of flavors and textures.
              </Typography>
              <Typography variant="h6">249</Typography>
            </CardContent>
            <CardActions>
              <div className="buttonmenu">
                <button onClick={subqty}>
                  <FaMinus />
                </button>
                <span style={{ margin: "0 10px" }}>{qty}</span>
                <button
                  onClick={() => {
                    addqty();
                    cartAdd({
                      name: "Veggie Pizza",
                      price: 249,
                    });
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Menu;
