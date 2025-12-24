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
  sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 3,
    mt: 4,
  }}
>
  {[
    {
      title: "Local Favorite",
      desc:
        "Discover the flavors that our community loves! From classic comfort dishes to modern twists on traditional recipes, our menu highlights the tastes that keep our customers coming back.",
    },
    {
      title: "Fastest Delivery",
      desc:
        "Craving your favorite meal? We make sure it reaches you hot, fresh, and on time! Our efficient delivery system ensures that your food gets to your doorstep quickly.",
    },
    {
      title: "Eco-Friendly",
      desc:
        "We care for the planet as much as we care for your taste buds. From sustainable packaging to mindful sourcing of ingredients, every meal leaves a smaller footprint.",
    },
  ].map((item, index) => (
    <Paper
      key={index}
      elevation={0}
      sx={{
        width: 300,
        height: 220,
        p: 2,
        borderRadius: "16px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, #ffffff, #fafafa)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        cursor: "pointer",
        transition: "all 0.35s ease",
        animation: "fadeUp 0.8s ease forwards",
        animationDelay: `${index * 0.3}s`,

        "&:hover": {
          transform: "translateY(-12px) scale(1.05)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 1,
          color: "green",
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          fontSize: "0.95rem",
          lineHeight: 1.6,
          color: "#555",
        }}
      >
        {item.desc}
      </Typography>
    </Paper>
  ))}

  {/* Inline animation keyframe */}
  <style>
    {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>
</Box>

      </Container>
    </div>
  );
};

export default About;
