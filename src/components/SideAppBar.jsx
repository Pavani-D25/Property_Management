


// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
// import LocalOffer from "@mui/icons-material/LocalOffer";
// import SettingsIcon from "@mui/icons-material/Settings";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import TopicIcon from "@mui/icons-material/Topic";
// import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
// import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import GroupsIcon from "@mui/icons-material/Groups";
// import PersonIcon from "@mui/icons-material/Person";
// import { styled } from "@mui/material/styles";

// // Styled component for active icons
// const ActiveIconButton = styled(IconButton)(({ theme, active }) => ({
//   backgroundColor: active ? "#3b82f6" : "transparent", // Active background color
//   color: "#ffffff",
//   borderRadius: "50%",
//   padding: "5px",
//   "&:hover": {
//     backgroundColor: "#3b82f6", // Keep the hover color same as active
//   },
// }));

// const SideAppBar = () => {
//   const [activeIcon, setActiveIcon] = useState(null); // State to track active icon

//   const handleIconClick = (iconName) => {
//     setActiveIcon(iconName); // Set the clicked icon as active
//   };

//   return (
//     <Box
//       sx={{
//         width: "60px",
//         height: "635px",
//         backgroundColor: "#333",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         paddingTop: "10px",
//         gap: "10px",
        
//       }}
//     >
//       {/* Collapse Button */}
//       <IconButton
//         sx={{
//           color: "#ffffff",
//           padding: "10px",
//           borderRadius: "50%",
//           backgroundColor: "#3b82f6", // Blue color for this button
//         }}
//       >
//         <ChevronRightOutlinedIcon />
//       </IconButton>

//       {/* Divider Line */}
//       <Box
//         sx={{
//           width: "40px",
//           height: "2px",
//           backgroundColor: "#555",
//           margin: "10px 0",
//         }}
//       />

//       {/* Menu Icons */}
//       <ActiveIconButton
//         active={activeIcon === "dashboard"}
//         onClick={() => handleIconClick("dashboard")}
//       >
//         <DashboardIcon />
//       </ActiveIconButton>

//       <ActiveIconButton
//         active={activeIcon === "groups"}
//         onClick={() => handleIconClick("groups")}
//       >
//         <GroupsIcon />
//       </ActiveIconButton>

//       <ActiveIconButton
//         active={activeIcon === "person"}
//         onClick={() => handleIconClick("person")}
//       >
//         <PersonIcon />
//       </ActiveIconButton>

//       <ActiveIconButton
//         active={activeIcon === "business"}
//         onClick={() => handleIconClick("business")}
//       >
//         <BusinessOutlinedIcon />
//       </ActiveIconButton>

//       <ActiveIconButton
//         active={activeIcon === "offer"}
//         onClick={() => handleIconClick("offer")}
//       >
//         <LocalOffer />
//       </ActiveIconButton>

//       <ActiveIconButton
//         active={activeIcon === "settings"}
//         onClick={() => handleIconClick("settings")}
//       >
//         <SettingsIcon />
//       </ActiveIconButton>

//       <ActiveIconButton
//         active={activeIcon === "upload"}
//         onClick={() => handleIconClick("upload")}
//       >
//         <CloudUploadIcon />
//       </ActiveIconButton>

//       <ActiveIconButton
//         active={activeIcon === "description"}
//         onClick={() => handleIconClick("description")}
//       >
//         <DescriptionOutlinedIcon />
//       </ActiveIconButton>

//       <ActiveIconButton
//         active={activeIcon === "topic"}
//         onClick={() => handleIconClick("topic")}
//       >
//         <TopicIcon />
//       </ActiveIconButton>

//       <ActiveIconButton
//         active={activeIcon === "question"}
//         onClick={() => handleIconClick("question")}
//       >
//         <QuestionAnswerIcon />
//       </ActiveIconButton>
//     </Box>
//   );
// };

// export default SideAppBar;



import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalOffer from "@mui/icons-material/LocalOffer";
import SettingsIcon from "@mui/icons-material/Settings";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TopicIcon from "@mui/icons-material/Topic";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";

// Styled component for active icons
const ActiveIconButton = styled(IconButton)(({ theme, active }) => ({
  backgroundColor: active ? "#3b82f6" : "transparent", // Active background color
  color: "#ffffff",
  borderRadius: "50%",
  padding: "5px",
  fontSize: "20px", // Reduced size for icons
  "&:hover": {
    backgroundColor: "#3b82f6", // Keep the hover color same as active
  },
}));

const SideAppBar = () => {
  const [activeIcon, setActiveIcon] = useState(null); // State to track active icon

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName); // Set the clicked icon as active
  };

  return (
    <Box
      sx={{
        width: "80px",
        height: "660px",
        backgroundColor: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10px",
        gap: "10px",
        
      }}
    >
      {/* Collapse Button */}
      <IconButton
        sx={{
          color: "#ffffff",
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "#3b82f6", // Blue color for this button
        }}
      >
        <ChevronRightOutlinedIcon />
      </IconButton>

      {/* Divider Line */}
      <Box
        sx={{
          width: "40px",
          height: "2px",
          backgroundColor: "#555",
          margin: "10px 0",
        }}
      />

      {/* Menu Icons */}
      <ActiveIconButton
        active={activeIcon === "dashboard"}
        onClick={() => handleIconClick("dashboard")}
      >
        <DashboardIcon />
      </ActiveIconButton>

      <ActiveIconButton
        active={activeIcon === "groups"}
        onClick={() => handleIconClick("groups")}
      >
        <GroupsIcon />
      </ActiveIconButton>

      <ActiveIconButton
        active={activeIcon === "person"}
        onClick={() => handleIconClick("person")}
      >
        <PersonIcon />
      </ActiveIconButton>

      <ActiveIconButton
        active={activeIcon === "business"}
        onClick={() => handleIconClick("business")}
      >
        <BusinessOutlinedIcon />
      </ActiveIconButton>

      <ActiveIconButton
        active={activeIcon === "offer"}
        onClick={() => handleIconClick("offer")}
      >
        <LocalOffer />
      </ActiveIconButton>

      <ActiveIconButton
        active={activeIcon === "settings"}
        onClick={() => handleIconClick("settings")}
      >
        <SettingsIcon />
      </ActiveIconButton>

      <ActiveIconButton
        active={activeIcon === "upload"}
        onClick={() => handleIconClick("upload")}
      >
        <CloudUploadIcon />
      </ActiveIconButton>

      <ActiveIconButton
        active={activeIcon === "description"}
        onClick={() => handleIconClick("description")}
      >
        <DescriptionOutlinedIcon />
      </ActiveIconButton>

      <ActiveIconButton
        active={activeIcon === "topic"}
        onClick={() => handleIconClick("topic")}
      >
        <TopicIcon />
      </ActiveIconButton>

      <ActiveIconButton
        active={activeIcon === "question"}
        onClick={() => handleIconClick("question")}
      >
        <QuestionAnswerIcon />
      </ActiveIconButton>
    </Box>
  );
};

export default SideAppBar;
