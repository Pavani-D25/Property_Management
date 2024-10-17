
import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogTitle,
  Divider,
  Badge
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const PricingTable = () => {
  const pricingItems = [
    { number: '01', title: 'Primary Pricing Component', bgcolor: '#FFE8E8' ,color:'#b3776d' },
    
  ];

  return (
    <Dialog open={true} onClose={() => {}} maxWidth="xs" fullWidth >
      <DialogTitle sx={{ fontFamily: "Nunito Sans"}}>
        Pricing Table
        <IconButton
          aria-label="close"
          onClick={() => {}}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <List>
        {pricingItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: item.bgcolor,
              borderRadius: 2,
              my: 1,
              px: 2, 
              width: '390px',
              height: '70px',
              boxSizing: 'border-box',
              marginLeft: '25px',
              marginRight: '25px',
              marginBottom: '10px',
              fontFamily: "Nunito Sans",
            }}
          >
            <ListItemIcon>
              <Badge 
                badgeContent={item.number} 
                overlap="circular"
                sx={{
                  mr: 1, 
                  ml: 3,
                  '& .MuiBadge-badge': { // Customize badge style
                    backgroundColor: item.color,
                    color: '#fff', // Text color inside the badge (white for contrast)
                    fontWeight: 'light',
                    width: '23px', // Adjust badge size if needed
                    height: '23px',
                    borderRadius: '50%',
                    fontSize:'10px',
                    fontFamily: "Nunito Sans",
                    
                  }
                }} 
              />
            </ListItemIcon>
            
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                fontSize: '14px',
                fontWeight: 'medium',
                whiteSpace: 'nowrap', // Prevent text from wrapping to multiple lines
                overflow: 'hidden',   // Hide overflowing text
                textOverflow: 'ellipsis', 
                color: item.color,
                fontFamily: "Nunito Sans",
              }}
            />
            <InfoOutlinedIcon sx={{color:'#dddde4', paddingRight:'10px',
                fontSize:'20px'
            }}/>
            <KeyboardArrowRightIcon sx={{
                color: item.color,
            }}/>
          </ListItem>
        ))}
      </List>

      
    </Dialog>
  );
};

export default PricingTable;
