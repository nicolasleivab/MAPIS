import { createSlice } from '@reduxjs/toolkit';
import { fetchProjectsAsync } from './projectThunks';

const initialState = {
  projects: [],
  columns: [],
  isLoading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
    updateProject: (state, action) => {
      const { id, ...changes } = action.payload;
      const index = state.projects.findIndex((project) => project.id === id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...changes };
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjectsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload.data; // Populate projects
        state.columns = action.payload.columns; // Populate columns
      })
      .addCase(fetchProjectsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export actions
export const {
  addProject,
  removeProject,
  updateProject,
  setLoading,
  setError,
} = projectsSlice.actions;
// Export reducer
export default projectsSlice.reducer;
