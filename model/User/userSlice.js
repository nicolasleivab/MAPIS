import { createSlice } from '@reduxjs/toolkit';
import { loginUserAsync } from './userThunks';

// Initial demo user data
const initialState = {
  id: null,
  name: '',
  email: '',
  role: '',
  createdAt: null,
  updatedAt: null,
  views: [],
  projects: [],
  isAuthenticated: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set user data upon login
    loginUser: (state, action) => {
      const {
        id,
        name,
        email,
        role,
        created_at,
        updated_at,
        view_ids,
        projects,
      } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.role = role;
      state.createdAt = created_at;
      state.updatedAt = updated_at;
      state.views = view_ids;
      state.projects = projects;
      state.isAuthenticated = true;
    },
    // Action to clear user data upon logout
    logoutUser: (state) => {
      state.id = null;
      state.name = '';
      state.email = '';
      state.role = '';
      state.createdAt = null;
      state.updatedAt = null;
      state.views = [];
      state.projects = [];
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { loginUser, logoutUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
