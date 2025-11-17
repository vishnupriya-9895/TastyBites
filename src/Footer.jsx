import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material';
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const Footer = () => {
  return (
    <div style={{backgroundColor:"#04400eff",color:'white'}}>
 <Container >
    <Grid container spacing={20}>
  <Grid className="box1footer"  item xs={4}>
    <Typography variant='h3' sx={{ mb: 1 }}>TastyBites</Typography>
    <Typography variant='body1' sx={{ mb: 1 }}> Made with juzz</Typography>
   <div style={{display:'flex',gap:"12px"}}>
     <FaInstagramSquare />
    <FaYoutube />
    <FaFacebook />
   </div>
    <Typography sx={{ mt: 1 }}>2024 All Rights Reserved</Typography>

  </Grid>
  <Grid className="box1footer" item xs={4}>
   
    <Button  component={Link} to="/"  variant='h6'> Home</Button> <br />
    <Button component={Link} to="/About"  variant='h6'>About</Button><br />
    <Button component={Link} to="/Contact"  variant='h6' >Contact</Button><br />
    <Button component={Link} to="/Menu"  variant='h6'>Menu</Button><br />

  </Grid>
  <Grid className="box1footer" item xs={4}>
    <Typography variant='h6' sx={{ mb: 1 }}>services</Typography>
     <Typography variant='h6' sx={{ mb: 1 }}>Privacy policy</Typography>
      <Typography variant='h6' sx={{ mb: 1 }}>Terms of services</Typography>
       <Typography variant='h6' sx={{ mb: 1 }}>Our missions</Typography>
  </Grid>
</Grid>


    </Container>
    </div>
   
  )
}

export default Footer