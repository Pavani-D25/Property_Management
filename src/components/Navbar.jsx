import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Select, MenuItem, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/system';

const StyledIconButton = styled(IconButton)({
  color: '#000', // Black arrow color
  backgroundColor: 'white', // Background color for the arrow button
  border: '1px solid #E0E0E0', // Light border
  borderRadius: '50%', // Circular button
  padding: '8px', // Padding to match the size
  marginRight: '16px', // Spacing between button and title
});

const Navbar = () => {
  const [selectedValue, setSelectedValue] = React.useState('Casagrand');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box display="flex" justifyContent="center" style={{ backgroundColor: '#ffffff' ,width: '100%'}}>
      <Box style={{ width: '100%' ,  }}>
        <AppBar position="static" color="default" elevation={1} style={{backgroundColor: '#ffffff'}}>
          <Toolbar>
            {/* Styled Back Arrow */}
            <StyledIconButton edge="start" aria-label="back">
              <ArrowBackIcon />
            </StyledIconButton>

            {/* Title */}
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Create Quotation To Existing Lead
            </Typography>

            {/* Dropdown */}
            <Select
              value={selectedValue}
              onChange={handleSelectChange}
              variant="outlined"
              style={{ minWidth: 120 }}
            >
              <MenuItem value="Casagrand">Casagrand</MenuItem>
              {/* Add more MenuItems as needed */}
            </Select>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
