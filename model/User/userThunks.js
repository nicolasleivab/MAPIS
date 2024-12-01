import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi } from '../../services';
import { loginUser } from './userSlice';

export const loginUserAsync = createAsyncThunk(
  'user/loginUserAsync',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const data = await loginUserApi(credentials);
      // Dispatch loginUser action with the response data
      dispatch(loginUser(data));
      return data;
    } catch (error) {
      // Handle errors appropriately
      const errorMessage = error.response?.data || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);
