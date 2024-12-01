import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProjects } from '../../services/projects/getProjects';
// Async thunk to fetch projects and columns
export const fetchProjectsAsync = createAsyncThunk(
  'projects/fetchProjectsAsync',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProjects();
      return response; // Response contains both `data` (projects) and `columns`
    } catch (error) {
      const errorMessage = error.response?.data || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);
