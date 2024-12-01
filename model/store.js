import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userSlice';
import projectsReducer from './Project/projectSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    projects: projectsReducer,
  },
  // Optional: Add middleware or enhancers here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable if needed
    }),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
