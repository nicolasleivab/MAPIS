export const selectUser = (state) => state.user;

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export const selectUserName = (state) => state.user.name;
