import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import Header from "./Header";
import productsIcon from "../assets/products.svg";
import homeIcon from "../assets/home.svg";
import categoryIcon from "../assets/category.svg";
import arrow from "../assets/Vector.svg";

const Dashboard = () => {
  const getCookie = (name) => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name))
      ?.split("=")[1];
    return cookieValue || "";
  };

  const name = getCookie("name");
  const userId = getCookie("userId");

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex", marginTop: "64px" }}>
        {" "}
       
        <Drawer variant="permanent">
          <Toolbar />
          <div
            className="sidebar"
            style={{
              minWidth: "348px",
              display: "flex",
              height: "100%",
              boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#F4F4F4",
            }}
          >
            <List
              style={{
                width: "100%",
                alignItems: "flex-start",
                height: "100%",
              }}
            >
              <ListItemButton
                component={Link}
                to="/welcome"
                selected={activeItem === "home"}
                onClick={() => handleItemClick("home")}
                style={{
                  backgroundColor: activeItem == "home" ? "#FFF8B7" : "",
                }}
              >
                <ListItemIcon>
                  <img
                    src={homeIcon}
                    alt="Home"
                    style={{
                      color: activeItem === "home" ? "#3f51b5" : "#FFF8B7",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Home" />
                <img
                  src={arrow}
                  style={{
                    color: activeItem === "home" ? "#3f51b5" : "black",
                  }}
                />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/AllCategory"
                selected={activeItem === "category"}
                onClick={() => handleItemClick("category")}
                style={{
                  backgroundColor: activeItem == "category" ? "#FFF8B7" : "",
                }}
              >
                <ListItemIcon>
                  <img src={categoryIcon} alt="Category" />
                </ListItemIcon>
                <ListItemText primary="Category" />

                <img src={arrow} />
              </ListItemButton>
              <ListItemButton
                component={Link}
                 to="/AllCategory"
                selected={activeItem === "products"}
                onClick={() => handleItemClick("products")}
                style={{
                  backgroundColor: activeItem == "products" ? "#FFF8B7" : "",
                }}
              >
                <ListItemIcon>
                  <img
                    src={productsIcon}
                    alt="Products"
                    style={{
                      color: activeItem === "products" ? "#3f51b5" : "#FFF8B7",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Products" />
                <img
                  src={arrow}
                  style={{
                    color: activeItem === "products" ? "#3f51b5" : "#FFF8B7",
                  }}
                />
              </ListItemButton>
            </List>
            <Divider />
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Dashboard;
