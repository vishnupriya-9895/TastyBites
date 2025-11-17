import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Typography } from "@mui/material";


const Contact = () => {

  return (
   <Container>
     <div className="maincontact">
      
      <div class="center-box">
       
        <div >
          <Typography style={{ textAlign: "center",marginTop:"32px",marginBottom:"21px" }} variant="h5">
            Contact us   
          </Typography>
         <div style={{marginLeft:"26px"}}>
           <Typography style={{marginBottom:"8px"}} variant="h6">Send us a message  
    </Typography>
          <Typography style={{marginBottom:"8px"}}  >
            have a question or feedback?fill out of form below and we'll get
            back to you as soon as possible
          </Typography>
          <label htmlFor="">Name</label><br /><br />
         <TextField style={{width:"300px", height:"50px"}} id="outlined-basic"  variant="outlined" /><br /><br />
          <label htmlFor="">Email</label><br /><br />
          <TextField style={{width:"300px", height:"50px"}} id="outlined-basic"  variant="outlined" /><br /><br />
         <label htmlFor="">message</label><br /><br />
         <TextField style={{width:"300px", height:"50px"}} id="outlined-basic"  variant="outlined" /><br /><br />

         <Button style={{marginBottom:"40px" }}
          id="message" variant="contained" disableElevation>
 send message
</Button>
         </div>
        </div>
      </div>
     <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.793203404306!2d76.9396304747743!3d8.519448591522975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb0009c76167%3A0x4f50abbcc52fbd2f!2sLuminar%20Technolab%20-%20Software%20training%20institute!5e0!3m2!1sen!2sin!4v1763148502695!5m2!1sen!2sin"
  width="600"
  height="600"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
   
   </Container>
  );
};

export default Contact;
