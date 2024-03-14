import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const Logout = ({ imagePath }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c.replace(/^ +/, "");
    });
    navigate('/');
  };

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Logout</DialogTitle>
        <DialogContent dividers>
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <img src={imagePath} alt="warning" style={{ width: "100px" }} />
            <p style={{ color: "black" }}>Are you sure you want to log out?</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} style={{ backgroundColor: "white", color: "black" }}>
            Cancel
          </Button>
          <Button onClick={handleLogout} style={{ backgroundColor: "purple", color: "black" }}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Logout;
