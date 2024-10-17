// import React from 'react';
// import TopAppBar from './components/TopAppBar';
// import SideAppBar from './components/SideAppBar';
// import PricingTable from './components/PricingTable/PricingTable';
// import Primary from './components/PricingTable/Primary';
// import Navbar from './components/Navbar';
// import QuotationSummary from './components/QuotationSummary';

// function App() {
//   return (
//     <div className="App">
//       {/* <TopAppBar />

//       <Navbar />

//       <SideAppBar />

//        <PricingTable />  */}
       
//       {/*<Primary /> */}
//       <QuotationSummary/>
//     </div>
//   );
// }

// export default App;




// src/App.js
// import React from 'react';
// import Layout from './layout/Layout';
// import PricingTable from './components/PricingTable/PricingTable';
// import Primary from './components/PricingTable/Primary';

// function App() {
//   return (
//     <Layout>
//       {/* Here you can pass the main content that you want below the Navbar */}
//       {/* <PricingTable /> */}
//       {/* <Primary /> */}
      
//     </Layout>
//   );
// }

// export default App;




















// ??????????????????????????????????????????????? propertyCard????????????????????????????????????????????????????????????????????????????????????????????????????????????


import React from 'react';
import TopAppBar from './components/TopAppBar';
import SideAppBar from './components/SideAppBar';
import PricingTable from './components/PricingTable/PricingTable';
import Primary from './components/PricingTable/Primary';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard'; // Import the PropertyCard component

function App() {
  const properties = [
    {
      title: 'Jumeirah Estate',
      price: 1200,
      location: 'Jumeirah Golf Estate',
      size: '2000 Sq.Ft',
      beds: 2,
      baths: 2,
      type: '2BHK',
      image: '/images/propertyImage.jpg', // Use the relative URL for images in the public folder
      id: 1,
    },
    // Add more properties if needed
  ];

  const handleDelete = (id) => {
    console.log('Delete property with id:', id);
    // Add logic to delete or handle action for the card
  };

  return (
    <div className="App">
      {/* Top navigation bar */}
      {/* <TopAppBar /> */}

      {/* Place Navbar directly after TopAppBar */}
      {/* <Navbar /> */}

      {/* SideAppBar and other components */}
      {/* <SideAppBar /> */}

      {/* Render the PropertyCard(s) */}
      <div style={{ padding: '16px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            price={property.price}
            location={property.location}
            size={property.size}
            beds={property.beds}
            baths={property.baths}
            type={property.type}
            image={property.image}
            onDelete={() => handleDelete(property.id)}
          />
        ))}
      </div>

      
      <PricingTable />
       {/* <Primary /> */}
    </div>
  );
}

export default App;





// ??????????????????????????????????????????????? propertyCard????????????????????????????????????????????????????????????????????????????????????????????????????????????













// import React, { useState } from 'react';
// import AddAmenitiesDialog from './components/AddAmenitiesDialog';

// const App = () => {
//   // State to control dialog open/close
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   // State for amenities
//   const [amenities, setAmenities] = useState([
//     {
//       image: '/images/propertyImage.jpg', // Replace with actual image path
//       title: 'Amenities name 1',
//       price: '$20.00',
//       dates: 'Valid Feb 22 - 12 Feb 23',
//       checked: false,
//     },
//     {
//       image: '/images/propertyImage.jpg',
//       title: 'Amenities name 2',
//       price: '$20.00',
//       dates: 'Valid Feb 22 - 12 Feb 23',
//       checked: false,
//     },
//     {
//       image: '/images/propertyImage.jpg',
//       title: 'Amenities name 3',
//       price: '$20.00',
//       dates: 'Valid Feb 22 - 12 Feb 23',
//       checked: false,
//     },
//     {
//       image: '/images/propertyImage.jpg',
//       title: 'Amenities name 4',
//       price: '$20.00',
//       dates: 'Valid Feb 22 - 12 Feb 23',
//       checked: false,
//     },
//     {
//       image: '/images/propertyImage.jpg',
//       title: 'Amenities name 5',
//       price: '$20.00',
//       dates: 'Valid Feb 22 - 12 Feb 23',
//       checked: false,
//     },
//   ]);

//   // Function to handle closing the dialog
//   const handleDialogClose = () => {
//     setIsDialogOpen(false);
//   };

//   // Function to handle opening the dialog (you can call this from a button click)
//   const handleDialogOpen = () => {
//     setIsDialogOpen(true);
//   };

//   // Function to toggle the check state of an amenity
//   const handleToggle = (index) => {
//     setAmenities((prev) =>
//       prev.map((amenity, i) =>
//         i === index ? { ...amenity, checked: !amenity.checked } : amenity
//       )
//     );
//   };

//   return (
//     <div>
//       <h1>Your App</h1>
//       <button onClick={handleDialogOpen}>Open Dialog</button>

//       {/* Pass the required props to AddAmenitiesDialog */}
//       <AddAmenitiesDialog
//         open={isDialogOpen}
//         onClose={handleDialogClose}
//         totalAmenities={5}
//         totalCost="200.00" // Update to match the total cost from checked amenities if needed
//         amenities={amenities} // Pass the amenities array
//         onToggle={handleToggle} // Pass the toggle handler
//       />
//     </div>
//   );
// };

// export default App;
