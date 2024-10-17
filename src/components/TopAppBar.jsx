import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Badge from "@mui/material/Badge";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { styled } from "@mui/material/styles";

// Create a styled Badge for the blue dot
const BlueDotBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#3b82f6", // Blue color for the dot
    color: "#3b82f6", // Ensure the color matches
    width: "5px", // Dot size
    height: "5px",
    borderRadius: "50%", // Make the badge circular
    right: 6, // Adjust position
    top: 6, // Adjust position
  },
}));

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, margin: 0, padding: 0 }}>
      <AppBar
        position="static"
        sx={{
          margin: 0,
          padding: 0,
          boxShadow: "none",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#1c1c1c",
        }}
      >
        <Toolbar
          sx={{
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            {/* Logo Image */}
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ height: "20px", width: "110px", marginRight: "5px" }}
            />

            {/* Vertical Divider */}
            <Box
              sx={{
                height: "25px",
                width: "0.5px",
                backgroundColor: "#ffffff",
                margin: "0 10px",
              }}
            />

            {/* Text with reduced size */}
            <Typography
              variant="body2"
              sx={{
                fontSize: "15px",
                color: "#ffffff",
                fontFamily: "Nunito Sans",
              }}
            >
              <span style={{ fontWeight: "lighter" }}>
                Property Management Solution
              </span>
            </Typography>
          </Typography>

          {/* Centered Search Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <TextField
              variant="standard"
              placeholder="Search"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: "#9b9ea3", ml:'10px' }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                    backgroundColor: "#424242",
                    borderRadius: "4px",
                    color: "#ffffff",
                    width: "400px",
                    padding: "2px 5px", // Adjusted padding to decrease height
                    height: "35px", 
                },
                // Add this style for the placeholder
                inputProps: {
                  style: { fontSize: "13px" }, // Change the font size as needed
                },
              }}
            />
          </Box>

          {/* Notification Bell and Avatar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            <IconButton color="inherit" size="large">
              {/* Notification Bell with Blue Dot */}
              <BlueDotBadge overlap="circular" badgeContent=" " variant="dot">
                <NotificationsNoneOutlinedIcon />
              </BlueDotBadge>
            </IconButton>
            <Box
              sx={{
                height: "25px",
                width: "0.5px",
                backgroundColor: "#ffffff",
              }}
            />

            {/* User Avatar */}
            <Avatar
              alt="Bala Ganesh"
              src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
              sx={{ ml: 2 }}
            />
            <Typography
              variant="body2"
              sx={{
                ml: 1,
                textAlign: "center",
                color: "white",
                fontFamily: "Nunito Sans",
                fontSize: "12px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Bala Ganesh</span>
              <br />

              <span style={{ fontWeight: "lighter" }}>Super Admin</span>
            </Typography>
            <KeyboardArrowDownOutlinedIcon sx={{ ml: "15px" }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
