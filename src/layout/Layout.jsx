// import React from "react";
// import { Box } from "@mui/material";
// import TopAppBar from "../components/TopAppBar"; // Top AppBar
// import SideAppBar from "../components/SideAppBar"; 
// import Navbar from "../components/Navbar"; 

// const Layout = ({ children }) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
       
//         overflow: "hidden",
//       }}
//     >
//       {/* Sidebar */}
      

      
//       <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
//         {/* Top AppBar */}
//         <TopAppBar />
//         <SideAppBar />

//         {/* Secondary Navbar */}
       

//         {/* Main Content - children passed in */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             backgroundColor: "#fff",
//             padding: "20px", 
//           }}
//         >
           
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Layout;



import React from "react";
import { Box } from "@mui/material";
import TopAppBar from "../components/TopAppBar"; // Top AppBar
import SideAppBar from "../components/SideAppBar"; 
import Navbar from "../components/Navbar"; 

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Top AppBar - full width */}
      <Box sx={{ width: "100%", position: "fixed", top: 0, zIndex: 1000, left:'0' }}>
        <TopAppBar />
      </Box>

      {/* Layout Container */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          marginTop: "62px", 
        }}
      >
        {/* Sidebar - Fixed on the left */}
        <Box
          sx={{
            width: "80px",
            position: "fixed",
            top: "64px", 
            left: 0,
            height: "660px", 
            zIndex: 999,
            backgroundColor: "#f4f4f4",
          }}
        >
          <SideAppBar />
        </Box>

        {/* Main Content Area */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            marginLeft: "80px", 
          }}
        >
          {/* Navbar - Below Top AppBar */}
          <Box
            sx={{
            top:'0',
            left:'0',
              marginTop: "0", 
              
            }}
          >
            <Navbar />
          </Box>

          {/* Main Content - children passed in */}
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "#fff",
              padding: "20px", 
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
