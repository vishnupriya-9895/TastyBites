import { Container, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdNoMeals } from "react-icons/md";
const Home = () => {
  return (
    <div className="homebg">
      <div className="homecontent">
        <Typography variant="h3">ORDER FOOD DELIVERY</Typography>
        <Typography variant="body1">
          Order your favorite food from the restaurants you love
        </Typography>
        <Button
          style={{
            backgroundColor: "#04400eff",
            width: "159px",
            marginTop: "30px",
          }}
          className="homebutton"
          component={Link}
          to="/Menu"
          variant="contained"
        >
        View  Menu
        </Button>
     <Container>
 <div style={{display:"flex",justifyContent:'space-between',marginTop:"80px"}}>
         <Typography><IoMdTime />24/7 Delivery</Typography>
       <Typography><FaShippingFast />Fast Delivery</Typography>
        <Typography><FaLock />Safe & Secure Payments</Typography>
         <Typography> <MdNoMeals />Fresh & Hot Meals</Typography>
      </div>
     </Container>
      </div>
    </div>
  );
};

export default Home;
