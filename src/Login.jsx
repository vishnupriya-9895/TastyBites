import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container>
      <div className="login1">
        <div>
          <img
            style={{ width: "555px", height: "564px" }}
            src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg"
            alt=""
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <Typography variant="h6">Create an account</Typography>

          <FormControl sx={{ m: 2, width: "45ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-name">Enter your name</InputLabel>
            <OutlinedInput id="outlined-name" type="text" label="name" />
          </FormControl>

          <FormControl sx={{ m: 2, width: "45ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-email">Email</InputLabel>
            <OutlinedInput id="outlined-email" type="email" label="email" />
          </FormControl>

          <FormControl sx={{ m: 2, width: "45ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-phone">Phone number</InputLabel>
            <OutlinedInput id="outlined-phone" type="text" label="phone" />
          </FormControl>

          {/* PASSWORD FIELD */}
          <FormControl sx={{ m: 2, width: "45ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  {showPassword ? (
                    <IoMdEyeOff
                      onClick={handleTogglePassword}
                      style={{ cursor: "pointer", fontSize: "22px" }}
                    />
                  ) : (
                    <IoMdEye
                      onClick={handleTogglePassword}
                      style={{ cursor: "pointer", fontSize: "22px" }}
                    />
                  )}
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <br />

          <Button
            onClick={() => {
              Swal.fire({
                title: "Success",
                text: "Your account has been created.",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }}
            style={{ backgroundColor: "darkgreen", marginLeft: "49px" }}
            className="buttonlogin"
            variant="contained"
          >
            Sign up
          </Button>

          <Divider sx={{ my: 4 }}>or with</Divider>

          <Button
            style={{ backgroundColor: "darkgreen" }}
            variant="contained"
            onClick={() =>
              window.open("https://www.facebook.com/login", "_blank")
            }
          >
            Sign up with Facebook
          </Button>

          <Button
            style={{ backgroundColor: "darkgreen", marginLeft: "20px" }}
            variant="contained"
            onClick={() =>
              (window.location.href = "https://accounts.google.com")
            }
          >
            Sign up with Google
          </Button>

          <Typography style={{ textAlign: "center" }} sx={{ mt: 2 }}>
            Already have an account?<Link to="/signin">login in</Link>
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Login;
