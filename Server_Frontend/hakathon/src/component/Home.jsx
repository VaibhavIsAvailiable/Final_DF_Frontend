import React from "react";
import { Box, Container, Typography } from "@mui/material";
import homeImage from "../assets/image 289.svg";
import welcomeText from "../assets/Welcome to Digitalflake Admin.svg";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <Box>
      <Dashboard></Dashboard>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          marginLeft: "21%",
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
      </Container>
    </Box>
  );
}

export default Home;
