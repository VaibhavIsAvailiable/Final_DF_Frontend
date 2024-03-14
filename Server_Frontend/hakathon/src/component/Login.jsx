import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import welcomeText from "../assets/Welcome to Digitalflake Admin.svg";
import homeImage from "../assets/image 289.svg";
import backgroundImage from "../assets/LoginImage.svg";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9091/digitalflack/api/users/login",
        values
      );

      const { userId, name } = response.data;
      document.cookie = `userId=${userId};`;
      document.cookie = `name=${name};`;

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    navigate("/dashboard")
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        padding: "10px",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "500px",
          height: "600px",
          marginLeft: "86px",
          marginTop: "70px",
          backgroundColor: "white",
          boxShadow: "2px 1px 5px rgba(0, 0, 0, 0.4)",
          borderRadius: "10px",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={homeImage} alt="First Image" style={{ width: "300px" }} />
          <img
            src={welcomeText}
            alt="Second Image"
            style={{ width: "400px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            onChange={handleInputChange}
          />
       <Button
  variant="contained"
  color="primary"
  style={{ marginTop: "16px", width: "300px", backgroundColor: "purple" }}
  onClick={handleLogin}
>
  Login
</Button>
          <Typography variant="body2" style={{ marginTop: "8px" }}>
            <Link href="#" color="textSecondary">
              Forgot Password
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
