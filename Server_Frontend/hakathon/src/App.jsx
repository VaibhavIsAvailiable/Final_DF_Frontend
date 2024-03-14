import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import AllCategory from "./component/AllCategory";
import AddCategory from "./component/AddCategory";
import EditCategory from "./component/EditCategory";
import Home from "./component/Home";
import Logout from "./component/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = () => {
      const userId = getCookie("userId");
      const name = getCookie("name");
      if (userId && name) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoggedIn();
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/AllCategory" element={<AllCategory />} />
            <Route
              path="/editcategory/:categoryId"
              element={<EditCategory />}
            />
            <Route path="/AddCategory" element={<AddCategory />} />
            <Route path="/Logout" element={<Logout />} />
  <Route path="/welcome" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<AddCategory />} />
            
          
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
