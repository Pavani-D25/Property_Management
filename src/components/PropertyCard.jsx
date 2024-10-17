// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
//   IconButton,
//   Box,
// } from "@mui/material";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import BedIcon from "@mui/icons-material/Bed";
// import BathtubIcon from "@mui/icons-material/Bathtub";
// import HomeIcon from "@mui/icons-material/Home";

// const PropertyCard = ({
//   title,
//   price,
//   location,
//   size,
//   beds,
//   baths,
//   type,
//   image,
//   onDelete,
// }) => {
//   return (
//     <Card
//       sx={{
//         width: "220px",
//         height: "400px",
//         borderRadius: 2,
//         boxShadow: 3,
//         border: "1px solid #e0e0e0",
//       }}
//     >
//       <Box sx={{ position: "relative", padding: "10px" }}>
//         {" "}
//         {/* Set position: relative */}
//         <CardMedia
//           component="img"
//           image={image}
//           alt={title}
//           sx={{
//             height: "100px",
//             width: "198px",
//           }}
//         />
//         <IconButton
//           aria-label="delete"
//           color="error"
//           onClick={onDelete}
//           sx={{
//             position: "absolute",
//             top: 10,
//             right: 10,
//             width: 24, // Custom button width
//             height: 24, // Custom button height
//             backgroundColor: "#fff",
//             "&:hover": { backgroundColor: "#f5f5f5" },
//           }}
//         >
//           <DeleteOutlineIcon fontSize="small" />
//         </IconButton>
//       </Box>
//       <CardContent>
//         <Typography variant="h6" component="div">
//           {title}
//         </Typography>
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           sx={{ marginBottom: 1 }}
//         >
//           {location} • {size}
//         </Typography>
//         <Typography
//           variant="h6"
//           sx={{ mt: 1, fontWeight: "bold", color: "#1c1c1c" }}
//         >
//           ${price}
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: 1.5,
//             marginTop: 2,
//             color: "#757575",
//           }}
//         >
//           <BedIcon fontSize="small" /> {beds}
//           <BathtubIcon fontSize="small" /> {baths}
//           <HomeIcon fontSize="small" /> {type}
//         </Box>
//       </CardContent>
//       <CardActions
//         sx={{
//           justifyContent: "center",
//           borderTop: "1px solid #e0e0e0",
//         }}
//       >
//         <Button
//           variant="text"
//           color="primary"
//           sx={{
//             textTransform: "none",
//             color: "#007bff",
//           }}
//         >
//           + Customise
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default PropertyCard;




// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
//   IconButton,
//   Box,
// } from "@mui/material";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import BedIcon from "@mui/icons-material/Bed";
// import BathtubIcon from "@mui/icons-material/Bathtub";
// import HomeIcon from "@mui/icons-material/Home";

// const PropertyCard = ({
//   title,
//   price,
//   location,
//   size,
//   beds,
//   baths,
//   type,
//   image,
//   onDelete,
//   additionalInfo1, // e.g., "umc.ran zstato"
//   additionalInfo2, // e.g., "2(JÜC Sq.Ft"
// }) => {
//   return (
//     <Card
//       sx={{
//         width: "220px",
//         height: "260px",
//         borderRadius: 2,
//         boxShadow: 3,
//         border: "1px solid #e0e0e0",
//       }}
//     >
//       <Box sx={{ position: "relative", padding: "10px" }}>
//         <CardMedia
//           component="img"
//           image={image}
//           alt={title}
//           sx={{
//             height: "100px",
//             width: "198px",
//           }}
//         />
//         <IconButton
//           aria-label="delete"
//           color="error"
//           onClick={onDelete}
//           sx={{
//             position: "absolute",
//             top: 10,
//             right: 10,
//             width: 24,
//             height: 24,
//             backgroundColor: "#fff",
//             "&:hover": { backgroundColor: "#f5f5f5" },
//           }}
//         >
//           <DeleteOutlineIcon fontSize="small" />
//         </IconButton>
//       </Box>
//       <CardContent>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Typography variant="h6" component="div" sx={{ fontSize: "15px" }}>
//             {title}
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: "bold",
//               color: "#1c1c1c",
//               fontSize: "1rem",
//             }}
//           >
//             ${price}
//           </Typography>
//         </Box>
//         <Typography
         
//           color="text.secondary"
//           sx={{ marginBottom: 1, fontSize:'12px' }}
//         >
//           {location} • {size}
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginTop: 1,
//           }}
//         >
//           <Typography variant="body2" color="text.secondary">
//             {additionalInfo1}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {additionalInfo2}
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: 1.5,
//             marginTop: 2,
//             color: "#757575",
//             mt:'0'
//           }}
//         >
//           <BedIcon fontSize="small" /> {beds}
//           <BathtubIcon fontSize="small" /> {baths}
//           <HomeIcon fontSize="small" /> {type}
//         </Box>
//       </CardContent>
//       <CardActions
//         sx={{
//           justifyContent: "center",
//           margin:'0'
//         }}
//       >
//         <Button
//           variant="text"
//           color="primary"
//           sx={{
//             textTransform: "none",
//             color: "#007bff",
//           }}
//         >
//           + Customise
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default PropertyCard;







import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";

const PropertyCard = ({
  title,
  price,
  location,
  size,
  beds,
  baths,
  type,
  image,
  onDelete,
  additionalInfo1,
  additionalInfo2,
}) => {
  return (
    <Card
      sx={{
        width: "220px",
        height: "260px",
        borderRadius: 2,
        boxShadow: 3,
        border: "1px solid #e0e0e0",
      }}
    >
      <Box sx={{ position: "relative", padding: "10px" }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: "100px",
            width: "198px",
            borderRadius:'5px'
          }}
        />
        <IconButton
          aria-label="delete"
          color="error"
          onClick={onDelete}
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            width: 24,
            height: 24,
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </Box>
      <CardContent sx={{ paddingBottom: "8px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontSize: "15px",fontFamily: "Nunito Sans", }}>
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#1c1c1c",
              fontSize: "1rem",
              fontFamily: "Nunito Sans",
            }}
          >
            ${price}
          </Typography>
        </Box>
        <Typography color="text.secondary" sx={{ marginBottom: 1, fontSize: "12px" ,fontFamily: "Nunito Sans", }}>
          {location} • {size}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{fontFamily: "Nunito Sans",}}>
            {additionalInfo1}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily: "Nunito Sans",}}>
            {additionalInfo2}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            marginTop: 1,
            color: "#757575",
            fontFamily: "Nunito Sans",
            
          }}
        >
          <BedIcon fontSize="small" /> {beds}
          <BathtubIcon fontSize="small" /> {baths}
          <HomeIcon fontSize="small"  /> {type}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          paddingTop: "4px",
          paddingBottom: "10px",
          margin:'0'
        }}
      >
        <Button
          variant="text"
          color="primary"
          sx={{
            textTransform: "none",
            color: "#007bff",
            fontFamily: "Nunito Sans",  
          }}
        >
          + Customise
        </Button>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
