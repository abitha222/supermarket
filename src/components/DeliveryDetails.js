// DeliveryDetails.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// const DeliveryDetails = () => {
//   const [address, setAddress] = useState('');
//   const [paymentType, setPaymentType] = useState('');
//   const [details, setDetails] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//   });
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit the details
//     console.log(details, paymentType);
//     // Navigate to confirmation or home page
//     navigate('/');
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Delivery Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={details.name}
//             onChange={(e) => setDetails({ ...details, name: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone</label>
//           <input
//             type="text"
//             value={details.phone}
//             onChange={(e) => setDetails({ ...details, phone: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={details.email}
//             onChange={(e) => setDetails({ ...details, email: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <label>Address</label>
//           <LoadScript googleMapsApiKey="YOUR_API_KEY" libraries={['places']}>
//             <Autocomplete
//               onLoad={(autocomplete) => {
//                 // Store the autocomplete instance
//                 console.log('Autocomplete: ', autocomplete);
//               }}
//               onPlaceChanged={() => {
//                 // Handle the place changed event
//                 const place = autocomplete.getPlace();
//                 setDetails({ ...details, address: place.formatted_address });
//               }}
//             >
//               <input
//                 type="text"
//                 value={details.address}
//                 onChange={(e) => setDetails({ ...details, address: e.target.value })}
//                 required
//               />
//             </Autocomplete>
//           </LoadScript>
//         </div>
//         <div>
//           <label>Payment Type</label>
//           <select
//             value={paymentType}
//             onChange={(e) => setPaymentType(e.target.value)}
//             required
//           >
//             <option value="">Select Payment Type</option>
//             <option value="card">Card</option>
//             <option value="cash">Cash</option>
//           </select>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h2>Map</h2>
//         <LoadScript googleMapsApiKey="YOUR_API_KEY">
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//             onLoad={(map) => {
//               console.log('Map Loaded: ', map);
//             }}
//           >
//             {/* Additional map components can go here */}
//           </GoogleMap>
//         </LoadScript>
//       </div>
//     </div>
//   );
// };

// export default DeliveryDetails;
