import { Container, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { GoSidebarExpand } from "react-icons/go";
import { FaHotel } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
const About = () => {
  return (
    <div>
      <div className="aboutimage">
        <Typography
          variant="h4"
          style={{ textAlign: "center", color: "white", paddingTop: "100px" }}
        >
          Connecting you with the best local food, on delivery at time
        </Typography>
      </div>
      <Container>
        <Typography variant="h5">our story</Typography>
        <Typography
          style={{ marginTop: "14px", marginBottom: "14px" }}
          variant="body1"
        >
          At Foods, we are passionate about bringing delicious, fresh, and
          wholesome meals straight to your table. From classic favorites like
          Pepperoni Pizza and Biryani to flavorful creations like Chicken Curry
          and Paneer dishes, every item is made with love and the finest
          ingredients. Our journey began with a simple mission – to make every
          meal a memorable experience. Whether you’re craving comfort food or
          exploring new tastes, we strive to deliver quality, taste, and
          happiness with every bite.
        </Typography>
        <div className="vertical-stepper">
          <div className="step">
            <GoLightBulb />
            <Typography>
              our humble begining <br />
              2021
            </Typography>
          </div>

          <div className="line"></div>

          <div className="step">
            <FaHotel />
            <Typography>
              first hundrres partners restaurants <br />
              2025
            </Typography>
          </div>

          <div className="line"></div>

          <div className="step">
            <GoSidebarExpand />
            <Typography>
              expand to 5 new cities <br />
              2025
            </Typography>
          </div>
        </div>

        <Typography
          style={{ marginTop: "10PX", marginBottom: "20px" }}
          variant="h5"
        >
          what's make us different
        </Typography>
        <Box
          className="aboutbo"
          style={{ justifyContent: "space-between" }}
          sx={{
            display: "flex",

            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 300,
              height: 200,
              paddingTop: "20px",
              textAlign: "center",
              padding: "10px",
              marginBottom: "100px",
            },
          }}
        >
          <Paper elevation={3}>
            local favorite
            <Typography className="aboutcard">
              Discover the flavors that our community loves! From classic
              comfort dishes to modern twists on traditional recipes, our menu
              highlights the tastes that keep our customers coming back.
            </Typography>
          </Paper>
          <Paper elevation={3}>
            Fastest delivery
            <Typography className="aboutcard">
              Craving your favorite meal? We make sure it reaches you hot,
              fresh, and on time! Our efficient delivery system ensures that
              your food gets to your doorstep quickly, so you can enjoy every
              bite without waiting.
            </Typography>
          </Paper>
          <Paper elevation={3}>
            eco-friendly
            <Typography className="aboutcard">
              We care for the planet as much as we care for your taste buds.
              From sustainable packaging to mindful sourcing of ingredients, our
              eco-friendly practices ensure that every meal you enjoy leaves a
              smaller carbon footprint.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default About;
