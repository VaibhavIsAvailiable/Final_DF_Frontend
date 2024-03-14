import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, MenuItem } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';

const EditCategory = () => {
  const [categoryData, setCategoryData] = useState({
    name: '',
    description: '',
    status: ''
  });

  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!categoryId) return;
    axios
      .get(`http://localhost:9091/digitalflack/api/Categories/getCategoryByID/${categoryId}`)
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      });
  }, [categoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9091/digitalflack/api/Categories/updateCategoryById/${categoryId}`, categoryData)
      .then((response) => {
        console.log('Category data updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating category data:', error);
      });
  };

  return (
    <Box>
      <Dashboard /> 
      <Box display="flex" flexDirection="column" alignItems="center">
        <br></br>
        <h3>Edit Your Category here</h3>
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

export default EditCategory;
