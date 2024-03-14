import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard'; 

const AddCategory = () => {
  const [categoryData, setCategoryData] = useState({
    name: '',
    description: '',
    status: 'active',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:9091/digitalflack/api/Categories/register', categoryData)
      .then((response) => {
        console.log(response);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Error adding category data:', error);
      });
  };

  return (
    <Box>
      <Dashboard /> 
      <Box display="flex" flexDirection="column" alignItems="center">
        <br></br>
        <h1>Add new Category Here</h1>
       <br></br>
        <form onSubmit={handleSubmit} style={{ width: '50%' }}>
          <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" marginBottom={4}>
            <TextField label="Name" name="name" value={categoryData.name} onChange={handleChange} required sx={{ marginRight: 2 }} />
            <TextField label="Description" name="description" value={categoryData.description} onChange={handleChange} required sx={{ marginRight: 2 }} />
            <TextField
              select
              label="Status"
              name="status"
              value={categoryData.status}
              onChange={handleChange}
              required
              sx={{ width: 150 }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </TextField>
          </Box>
          <Box display="flex" justifyContent="flex-end" marginTop={4}>
            <Button variant="contained" color="secondary" style={{ marginRight: '10px', backgroundColor: 'white', color: 'black' }} onClick={() => navigate('/dashboard')}>
  Cancel
</Button>

            <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: 'purple', color: 'white' }}>
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddCategory;
