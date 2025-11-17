import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"#04400eff",color:"white"}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          TastyBites
          </Typography>

        
             <div style={{display:'flex',justifyContent:"center",gap:"54px",marginRight:"300px"}}>
                <Button component={Link} to="/" className='buttonheader' color="inherit">Home </Button>
          <Button component={Link} to="/About"  className='buttonheader' color="inherit">About</Button>
          <Button  component={Link} to="/Menu"  className='buttonheader' color="inherit">Menu</Button>
           <Button component={Link} to="/Contact"   className='buttonheader' color="inherit">Contact</Button>
             </div>
           <Button  className='buttonheader'  color="inherit"><FaSearch className='icons' /></Button>
            <Button component={Link} to="/Cart"   className='buttonheader'  color="inherit"><FaShoppingCart className='icons' /></Button>
          <Button  component={Link} to="/Login"   className='buttonheader'  color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header