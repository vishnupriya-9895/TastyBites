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
import Checkbox from "@mui/material/Checkbox";

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
          <Typography variant="h6">Hii welcome back</Typography>

          <FormControl sx={{ m: 2, width: "45ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-email">Email</InputLabel>
            <OutlinedInput id="outlined-email" type="email" label="email" />
          </FormControl>

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
                title: "Login Successful!",
                text: "Welcome back",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }}
            style={{ backgroundColor: "darkgreen", marginLeft: "49px" }}
            className="buttonlogin"
            variant="contained"
          >
            Login
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
            Don't have an account?
            <Link to="/Login"> sign up</Link>
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Login;
