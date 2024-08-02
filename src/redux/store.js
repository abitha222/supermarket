import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import your user slice

const store = configureStore({
  reducer: {
    user: userReducer, // Ensure the user slice is included
  },
});

export default store;
