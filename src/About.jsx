import React, { useState } from "react";
import { Container, Typography, Box, Paper, Button, Grid } from "@mui/material";
import { GoSidebarExpand, GoLightBulb } from "react-icons/go";
import { FaHotel, FaStar } from "react-icons/fa";

const About = () => {
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviews = [
    { name: "John Doe", review: "Fast delivery and delicious food!" },
    { name: "Jane Smith", review: "Great customer service and quality meals." },
    { name: "Mike Johnson", review: "My go-to app for ordering dinner." },
  ];

  const nextReview = () => setReviewIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const steps = [
    { icon: <GoLightBulb />, text: "Our humble beginning\n2021" },
    { icon: <FaHotel />, text: "First hundreds partner restaurants\n2025" },
    { icon: <GoSidebarExpand />, text: "Expand to 5 new cities\n2025" },
  ];

  const features = [
    {
      title: "Local Favorite",
      desc: "Discover the flavors that our community loves! From classic comfort dishes to modern twists on traditional recipes, our menu highlights the tastes that keep our customers coming back.",
    },
    {
      title: "Fastest Delivery",
      desc: "Craving your favorite meal? We make sure it reaches you hot, fresh, and on time! Our efficient delivery system ensures that your food gets to your doorstep quickly.",
    },
    {
      title: "Eco-Friendly",
      desc: "We care for the planet as much as we care for your taste buds. From sustainable packaging to mindful sourcing of ingredients, every meal leaves a smaller footprint.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f5f5f5", paddingBottom: "50px" }}>
   
     <div> <div className="aboutimage"> <Typography variant="h4" style={{ textAlign: "center", color: "white", paddingTop: "100px" }} > Connecting you with the best local food, on delivery at time </Typography> </div>
      </div>

      {/* Our Story */}
      <Container style={{ marginTop: 40 }}>
        <Typography variant="h5" gutterBottom>Our Story</Typography>
        <Typography variant="body1" paragraph>
          At Foods, we are passionate about bringing delicious, fresh, and wholesome meals straight to your table. From classic favorites like Pepperoni Pizza and Biryani to flavorful creations like Chicken Curry and Paneer dishes, every item is made with love and the finest ingredients. Our journey began with a simple mission – to make every meal a memorable experience. Whether you’re craving comfort food or exploring new tastes, we strive to deliver quality, taste, and happiness with every bite.
        </Typography>


       <div className="vertical-stepper"> <div className="step"> <GoLightBulb /> <Typography> our humble begining <br /> 2021 </Typography> </div> <div className="line"></div> <div className="step"> <FaHotel /> <Typography> first hundrres partners restaurants <br /> 2025 </Typography> </div> <div className="line"></div> <div className="step"> <GoSidebarExpand /> <Typography> expand to 5 new cities <br /> 2025 </Typography> </div> </div>

    
        <Typography variant="h5" gutterBottom style={{ marginTop: 60 }}>What Makes Us Different</Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={3} mt={2}>
          {features.map((item, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                width: 300,
                minHeight: 220,
                p: 3,
                borderRadius: "16px",
                textAlign: "center",
                background: "linear-gradient(135deg, #ffffff, #fafafa)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                cursor: "pointer",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-12px) scale(1.05)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "green" }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#555" }}>
                {item.desc}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Customer Reviews */}
      <Container style={{ marginTop: 80, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>What Our Customers Say</Typography>
        <Paper
          style={{
            padding: 30,
            margin: "20px auto",
            maxWidth: 500,
            transition: "opacity 0.5s",
          }}
        >
          <Box mb={1}>
            <FaStar color="#ff5722"/><FaStar color="#ff5722"/><FaStar color="#ff5722"/><FaStar color="#ff5722"/><FaStar color="#ff5722"/>
          </Box>
          <Typography variant="body1" style={{ marginTop: 10 }}>"{reviews[reviewIndex].review}"</Typography>
          <Typography variant="subtitle2" style={{ marginTop: 10, fontWeight: "bold" }}>- {reviews[reviewIndex].name}</Typography>
          <Box mt={2}>
            <Button onClick={prevReview} style={{ marginRight: 10 }}>Prev</Button>
            <Button onClick={nextReview}>Next</Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default About;
