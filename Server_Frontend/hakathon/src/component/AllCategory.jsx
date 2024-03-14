import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'; 
import Dashboard from './Dashboard';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
  Divider
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const AllCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9091/digitalflake/api/Categories/allCategories');
        if (response.status === 200) {
          setCategories(response.data);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      const response = await axios.delete(`http://localhost:9091/digitalflack/api/Categories/deleteById/${categoryId}`);
      if (response.status !== 200) {
        throw new Error('Failed to delete category');
      }
     
      navigate("/Allcategory");
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

 
  const handleAddNew = () => {
    navigate("/AddCategory");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Dashboard />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "top",
          height: "80vh",
          marginLeft: "21%",
          marginTop: 0,
        }}
      >
        <Box marginBottom={2} display="flex" alignItems="center" sx={{ marginRight: 10 }}>
          <Typography variant="h5" component="span" marginRight={1} sx={{ marginRight: 10 }}>
            Category
          </Typography>
          <Box flexGrow={1} marginRight={1}>
            <TextField fullWidth placeholder="Search" variant="outlined" />
          </Box>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddNew} sx={{ backgroundColor: 'purple', color: 'white', marginRight: 10, marginLeft: 10 }}>
            Add new
          </Button>
        </Box>
        <Divider />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: 'lightyellow' }}>
                  ID
                  <IconButton size="small">
                    <ArrowDropDownIcon />
                  </IconButton>
                  <IconButton size="small">
                    <ArrowDropUpIcon />
                  </IconButton>
                </TableCell>
                <TableCell style={{ backgroundColor: 'lightyellow' }}>
                  Category Name
                  <IconButton size="small">
                    <ArrowDropDownIcon />
                  </IconButton>
                  <IconButton size="small">
                    <ArrowDropUpIcon />
                  </IconButton>
                </TableCell>
                <TableCell style={{ backgroundColor: 'lightyellow' }}>
                  Description
                  <IconButton size="small">
                    <ArrowDropDownIcon />
                  </IconButton>
                  <IconButton size="small">
                    <ArrowDropUpIcon />
                  </IconButton>
                </TableCell>
                <TableCell style={{ backgroundColor: 'lightyellow' }}>
                  Status
                  <IconButton size="small">
                    <ArrowDropDownIcon />
                  </IconButton>
                  <IconButton size="small">
                    <ArrowDropUpIcon />
                  </IconButton>
                </TableCell>
                <TableCell style={{ backgroundColor: 'lightyellow' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map(category => (
                <TableRow key={category.categoryId} style={{ marginBottom: '8px' }}>
                  <TableCell>{category.categoryId}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.description}</TableCell>
                  <TableCell style={{ color: category.status === 'active' ? 'green' : 'red' }}>
                    {category.status}
                  </TableCell>
                  <TableCell>
                    <IconButton component={Link} to={`/editcategory/${category.categoryId}`} size="small">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(category.categoryId)} size="small">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AllCategory;
